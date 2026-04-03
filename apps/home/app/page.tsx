import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

const spaces = [
  {
    name: "Village",
    tagline: "Find your people",
    description: "Connect with moms near you. Organize playdates, discover events, build your village.",
    color: "#2563eb",
    slug: "village",
    icon: "🏘️",
  },
  {
    name: "Restore",
    tagline: "Breathe. Heal. Come back to yourself.",
    description: "Affirmations, meditations, prayers, and healing guides made by moms, for moms.",
    color: "#9333ea",
    slug: "restore",
    icon: "🌿",
  },
  {
    name: "Market",
    tagline: "Buy, sell, and support each other",
    description: "A trusted marketplace for crafts, baked goods, kids' clothes, and services.",
    color: "#059669",
    slug: "market",
    icon: "🛍️",
  },
  {
    name: "Launch",
    tagline: "Build something amazing",
    description: "Mentorship, courses, and AI tools to help you start and grow your business.",
    color: "#d97706",
    slug: "launch",
    icon: "🚀",
  },
  {
    name: "Safe Space",
    tagline: "You are not alone",
    description: "Resources, safety planning, and support for women in difficult situations.",
    color: "#dc2626",
    slug: "safe",
    icon: "🛡️",
  },
];

function siteUrl(slug: string) {
  if (process.env.NODE_ENV === "production") {
    return `https://${slug}.sness.net`;
  }
  const ports: Record<string, number> = {
    market: 3010, village: 3020, launch: 3030, restore: 3040, safe: 3050,
  };
  return `http://localhost:${ports[slug]}`;
}

export default function HomePage() {
  return (
    <SiteLayout siteName="MomConnect" siteColor="#7c3aed">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          One account. Five spaces. Your village.
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          MomConnect is an ecosystem of connected spaces built for mothers —
          community, commerce, entrepreneurship, healing, and safety — all under
          one roof.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space) => (
          <a
            key={space.slug}
            href={siteUrl(space.slug)}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-3">{space.icon}</div>
            <h3 className="text-xl font-bold mb-1" style={{ color: space.color }}>
              {space.name}
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-3">
              {space.tagline}
            </p>
            <p className="text-sm text-gray-600">{space.description}</p>
          </a>
        ))}
      </div>
    </SiteLayout>
  );
}
