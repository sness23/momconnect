import { Router } from "express";
import { prisma } from "../lib/db.js";
import { requireAuth } from "../lib/jwt.js";

export const profileRouter = Router();

// Update profile
profileRouter.put("/", requireAuth, async (req, res) => {
  const userId = (req as any).userId;
  const { displayName, bio, city, state, zip, kidsInfo, interests } = req.body;

  const profile = await prisma.profile.upsert({
    where: { userId },
    update: { displayName, bio, city, state, zip, kidsInfo, interests },
    create: { userId, displayName: displayName || "Mom", bio, city, state, zip, kidsInfo, interests },
  });

  res.json(profile);
});
