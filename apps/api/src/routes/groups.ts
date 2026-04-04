import { Router } from "express";
import { prisma } from "../lib/db.js";
import { requireAuth } from "../lib/jwt.js";

export const groupsRouter = Router();

const param = (req: any, name: string): string => String(req.params[name]);

// List groups
groupsRouter.get("/", async (req, res) => {
  const zip = req.query.zip as string | undefined;
  const type = req.query.type as string | undefined;

  const where: any = {};
  if (zip) where.locationZip = zip;
  if (type) where.type = type;

  const groups = await prisma.group.findMany({
    where,
    include: {
      _count: { select: { members: true, posts: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  res.json(groups);
});

// Get group with recent posts
groupsRouter.get("/:id", async (req, res) => {
  const group = await prisma.group.findUnique({
    where: { id: param(req, "id") },
    include: {
      members: { include: { user: { include: { profile: true } } }, take: 20 },
      posts: {
        include: { author: { include: { profile: true } } },
        orderBy: { createdAt: "desc" },
        take: 20,
      },
      _count: { select: { members: true, posts: true } },
    },
  });

  if (!group) {
    res.status(404).json({ error: "Group not found" });
    return;
  }

  res.json(group);
});

// Create group
groupsRouter.post("/", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const { name, description, type, locationZip, privacy } = req.body;

  if (!name || !type) {
    res.status(400).json({ error: "Name and type required" });
    return;
  }

  const group = await prisma.group.create({
    data: {
      name,
      description,
      type,
      locationZip,
      privacy: privacy || "public",
      members: {
        create: { userId, role: "admin" },
      },
    },
    include: { _count: { select: { members: true } } },
  });

  res.json(group);
});

// Join group
groupsRouter.post("/:id/join", requireAuth, async (req, res) => {
  const userId = (req as any).userId;

  const existing = await prisma.groupMember.findUnique({
    where: { groupId_userId: { groupId: param(req, "id"), userId } },
  });

  if (existing) {
    res.json(existing);
    return;
  }

  const member = await prisma.groupMember.create({
    data: { groupId: param(req, "id"), userId, role: "member" },
  });

  res.json(member);
});

// Leave group
groupsRouter.delete("/:id/leave", requireAuth, async (req, res) => {
  const userId = (req as any).userId;

  await prisma.groupMember.deleteMany({
    where: { groupId: param(req, "id"), userId },
  });

  res.json({ ok: true });
});

// Create post in group
groupsRouter.post("/:id/posts", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const { body, postType } = req.body;

  if (!body) {
    res.status(400).json({ error: "Post body required" });
    return;
  }

  // Check membership
  const member = await prisma.groupMember.findUnique({
    where: { groupId_userId: { groupId: param(req, "id"), userId } },
  });

  if (!member) {
    res.status(403).json({ error: "Join the group first" });
    return;
  }

  const post = await prisma.post.create({
    data: {
      groupId: param(req, "id"),
      authorId: userId,
      body,
      postType: postType || "text",
    },
    include: { author: { include: { profile: true } } },
  });

  res.json(post);
});
