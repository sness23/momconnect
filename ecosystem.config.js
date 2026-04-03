module.exports = {
  apps: [
    {
      name: "mc-home",
      script: "npm",
      args: "start",
      cwd: "./apps/home",
      env: { PORT: 3000, NODE_ENV: "production" },
    },
    {
      name: "mc-market",
      script: "npm",
      args: "start",
      cwd: "./apps/market",
      env: { PORT: 3010, NODE_ENV: "production" },
    },
    {
      name: "mc-village",
      script: "npm",
      args: "start",
      cwd: "./apps/village",
      env: { PORT: 3020, NODE_ENV: "production" },
    },
    {
      name: "mc-launch",
      script: "npm",
      args: "start",
      cwd: "./apps/launch",
      env: { PORT: 3030, NODE_ENV: "production" },
    },
    {
      name: "mc-restore",
      script: "npm",
      args: "start",
      cwd: "./apps/restore",
      env: { PORT: 3040, NODE_ENV: "production" },
    },
    {
      name: "mc-safe",
      script: "npm",
      args: "start",
      cwd: "./apps/safe",
      env: { PORT: 3050, NODE_ENV: "production" },
    },
  ],
};
