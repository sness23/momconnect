module.exports = {
  apps: [
    {
      name: "mc-api",
      script: "node",
      args: "dist/index.js",
      cwd: "./apps/api",
      env: { PORT: 4200, NODE_ENV: "production" },
    },
    // In production, frontend apps are static files served by nginx.
    // These entries are for pm2 preview mode only.
    {
      name: "mc-home",
      script: "npm",
      args: "run preview",
      cwd: "./apps/home",
      env: { NODE_ENV: "production" },
    },
    {
      name: "mc-market",
      script: "npm",
      args: "run preview",
      cwd: "./apps/market",
      env: { NODE_ENV: "production" },
    },
    {
      name: "mc-village",
      script: "npm",
      args: "run preview",
      cwd: "./apps/village",
      env: { NODE_ENV: "production" },
    },
    {
      name: "mc-launch",
      script: "npm",
      args: "run preview",
      cwd: "./apps/launch",
      env: { NODE_ENV: "production" },
    },
    {
      name: "mc-restore",
      script: "npm",
      args: "run preview",
      cwd: "./apps/restore",
      env: { NODE_ENV: "production" },
    },
    {
      name: "mc-safe",
      script: "npm",
      args: "run preview",
      cwd: "./apps/safe",
      env: { NODE_ENV: "production" },
    },
  ],
};
