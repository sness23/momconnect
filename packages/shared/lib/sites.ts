export interface SiteConfig {
  name: string;
  slug: string;
  tagline: string;
  color: string;
  port: number;
}

export const sites: Record<string, SiteConfig> = {
  home:    { name: "MomConnect",  slug: "home",    tagline: "One account. Five spaces. Your village.", color: "#7c3aed", port: 4100 },
  market:  { name: "Market",      slug: "market",  tagline: "Buy, sell, and support each other",      color: "#059669", port: 4110 },
  village: { name: "Village",     slug: "village", tagline: "Find your people",                       color: "#2563eb", port: 4120 },
  launch:  { name: "Launch",      slug: "launch",  tagline: "Build something amazing",                color: "#d97706", port: 4130 },
  restore: { name: "Restore",     slug: "restore", tagline: "Breathe. Heal. Come back to yourself.",  color: "#9333ea", port: 4140 },
  safe:    { name: "Safe Space",  slug: "safe",    tagline: "You are not alone",                      color: "#dc2626", port: 4150 },
};

export function siteUrl(slug: string): string {
  if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
    return `https://${slug}.sness.net`;
  }
  return `http://localhost:${sites[slug]?.port || 4100}`;
}
