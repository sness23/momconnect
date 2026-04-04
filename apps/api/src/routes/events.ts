import { Router } from "express";
import { prisma } from "../lib/db.js";
import { requireAuth } from "../lib/jwt.js";

export const eventsRouter = Router();

const param = (req: any, name: string): string => String(req.params[name]);

// List events (with optional filters)
eventsRouter.get("/", async (req, res) => {
  const zip = req.query.zip as string | undefined;
  const upcoming = req.query.upcoming as string | undefined;

  const where: any = {};
  if (zip) {
    // Find events by creator's zip code area
    where.creator = { profile: { zip: zip as string } };
  }
  if (upcoming !== "false") {
    where.startsAt = { gte: new Date() };
  }

  const events = await prisma.event.findMany({
    where,
    include: {
      creator: { include: { profile: true } },
      rsvps: { include: { user: { include: { profile: true } } } },
    },
    orderBy: { startsAt: "asc" },
    take: 50,
  });

  res.json(events);
});

// Get single event
eventsRouter.get("/:id", async (req, res) => {
  const event = await prisma.event.findUnique({
    where: { id: param(req, "id") },
    include: {
      creator: { include: { profile: true } },
      rsvps: { include: { user: { include: { profile: true } } } },
    },
  });

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }

  res.json(event);
});

// Create event
eventsRouter.post("/", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const {
    title, description, locationName, locationAddress,
    locationLat, locationLng, startsAt, endsAt,
    kidAgeMin, kidAgeMax, capacity, category,
  } = req.body;

  if (!title || !startsAt) {
    res.status(400).json({ error: "Title and start time required" });
    return;
  }

  const event = await prisma.event.create({
    data: {
      creatorId: userId,
      title,
      description,
      locationName,
      locationAddress,
      locationLat: locationLat ? parseFloat(locationLat) : null,
      locationLng: locationLng ? parseFloat(locationLng) : null,
      startsAt: new Date(startsAt),
      endsAt: endsAt ? new Date(endsAt) : null,
      kidAgeMin: kidAgeMin ? parseInt(kidAgeMin) : null,
      kidAgeMax: kidAgeMax ? parseInt(kidAgeMax) : null,
      capacity: capacity ? parseInt(capacity) : null,
      category,
    },
    include: {
      creator: { include: { profile: true } },
      rsvps: true,
    },
  });

  res.json(event);
});

// Update event
eventsRouter.put("/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const event = await prisma.event.findUnique({ where: { id: param(req, "id") } });

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }
  if (event.creatorId !== userId) {
    res.status(403).json({ error: "Not your event" });
    return;
  }

  const {
    title, description, locationName, locationAddress,
    startsAt, endsAt, kidAgeMin, kidAgeMax, capacity, category,
  } = req.body;

  const updated = await prisma.event.update({
    where: { id: param(req, "id") },
    data: {
      title, description, locationName, locationAddress,
      startsAt: startsAt ? new Date(startsAt) : undefined,
      endsAt: endsAt ? new Date(endsAt) : undefined,
      kidAgeMin, kidAgeMax, capacity, category,
    },
    include: { creator: { include: { profile: true } }, rsvps: true },
  });

  res.json(updated);
});

// Delete event
eventsRouter.delete("/:id", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const event = await prisma.event.findUnique({ where: { id: param(req, "id") } });

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }
  if (event.creatorId !== userId) {
    res.status(403).json({ error: "Not your event" });
    return;
  }

  await prisma.event.delete({ where: { id: param(req, "id") } });
  res.json({ ok: true });
});

// RSVP to event
eventsRouter.post("/:id/rsvp", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const { status } = req.body; // "going", "maybe", "waitlist"

  if (!status || !["going", "maybe", "waitlist"].includes(status)) {
    res.status(400).json({ error: "Status must be going, maybe, or waitlist" });
    return;
  }

  const event = await prisma.event.findUnique({
    where: { id: param(req, "id") },
    include: { rsvps: true },
  });

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }

  // Check capacity
  if (status === "going" && event.capacity) {
    const goingCount = event.rsvps.filter((r) => r.status === "going").length;
    if (goingCount >= event.capacity) {
      // Auto-waitlist
      const rsvp = await prisma.rsvp.upsert({
        where: { eventId_userId: { eventId: event.id, userId } },
        update: { status: "waitlist" },
        create: { eventId: event.id, userId, status: "waitlist" },
      });
      res.json({ ...rsvp, note: "Event is full, you've been waitlisted" });
      return;
    }
  }

  const rsvp = await prisma.rsvp.upsert({
    where: { eventId_userId: { eventId: event.id, userId } },
    update: { status },
    create: { eventId: event.id, userId, status },
  });

  res.json(rsvp);
});

// Remove RSVP
eventsRouter.delete("/:id/rsvp", requireAuth, async (req, res) => {
  const userId = (req as any).userId;

  await prisma.rsvp.deleteMany({
    where: { eventId: param(req, "id"), userId },
  });

  res.json({ ok: true });
});
