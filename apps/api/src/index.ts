import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.js";
import { profileRouter } from "./routes/profile.js";

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors({
  origin: [
    "http://localhost:4100",
    "http://localhost:4110",
    "http://localhost:4120",
    "http://localhost:4130",
    "http://localhost:4140",
    "http://localhost:4150",
  ],
  credentials: true,
}));

app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`MomConnect API running on port ${PORT}`);
});
