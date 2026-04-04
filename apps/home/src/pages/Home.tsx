import { Link } from "react-router-dom";
import { siteUrl } from "@momconnect/shared";

const spaces = [
  {
    name: "Village", slug: "village", tagline: "Find your people",
    description: "Connect with moms near you. Organize playdates, join local groups, and build the support network every mother deserves.",
    bgClass: "bg-blue-50", borderClass: "border-blue-200", textClass: "text-blue-600",
  },
  {
    name: "Restore", slug: "restore", tagline: "Breathe. Heal. Return to yourself.",
    description: "Affirmations, guided meditations, prayers, and healing audio created by moms who understand.",
    bgClass: "bg-purple-50", borderClass: "border-purple-200", textClass: "text-purple-600",
  },
  {
    name: "Market", slug: "market", tagline: "Support each other's work",
    description: "A trusted marketplace for handmade crafts, baked goods, kids' clothes, and services — from moms in your community.",
    bgClass: "bg-emerald-50", borderClass: "border-emerald-200", textClass: "text-emerald-600",
  },
  {
    name: "Launch", slug: "launch", tagline: "Build something of your own",
    description: "Business courses built for interrupted schedules, AI ideation tools, mentor matching, and a path from idea to first sale.",
    bgClass: "bg-amber-50", borderClass: "border-amber-200", textClass: "text-amber-600",
  },
  {
    name: "Safe Space", slug: "safe", tagline: "You are not alone",
    description: "Confidential resources, safety planning tools, and connections to real help — for women in difficult and dangerous situations.",
    bgClass: "bg-red-50/60", borderClass: "border-red-200", textClass: "text-red-600",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 text-center">
        <div
          className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] opacity-[0.07] pointer-events-none -z-10"
          style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb, #9333ea)" }}
        />

        <p className="animate-fade-up text-sm font-medium tracking-[0.2em] uppercase mb-6" style={{ color: "var(--color-ink-muted)", animationDelay: "0.1s" }}>
          One account &middot; Five spaces &middot; Your village
        </p>

        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8 max-w-4xl mx-auto" style={{ fontFamily: "var(--font-display)", animationDelay: "0.2s" }}>
          Everything a mother<br />
          <span className="italic" style={{ color: "var(--color-brand)" }}>needs</span>, together
        </h1>

        <p className="animate-fade-up text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-ink-light)", animationDelay: "0.35s" }}>
          Community. Commerce. Entrepreneurship. Healing. Safety.<br className="hidden md:block" />
          Five connected spaces built by moms, for moms — under one roof.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.5s" }}>
          <Link
            to="/auth/signup"
            className="px-8 py-3.5 rounded-full text-white font-medium text-sm tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            style={{ background: "var(--color-brand)" }}
          >
            Join the village
          </Link>
          <a
            href="#spaces"
            className="px-8 py-3.5 rounded-full font-medium text-sm tracking-wide border transition-all duration-300 hover:bg-white/60"
            style={{ color: "var(--color-ink-light)", borderColor: "var(--color-cream-dark)" }}
          >
            Explore the spaces
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 pb-16 md:pb-24">
        <div className="h-px w-16" style={{ background: "var(--color-cream-dark)" }} />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "var(--color-ink-muted)" }}>
          <path d="M10 3c-1.5 2.5-5 4.5-5 7.5a5 5 0 0 0 10 0C15 7.5 11.5 5.5 10 3z" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <div className="h-px w-16" style={{ background: "var(--color-cream-dark)" }} />
      </div>

      {/* Spaces */}
      <section id="spaces" className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Five spaces, one home
          </h2>
          <p className="text-base" style={{ color: "var(--color-ink-muted)" }}>
            Each space is its own world — connected by your single account.
          </p>
        </div>

        <div className="space-y-5">
          {spaces.map((space) => (
            <a
              key={space.slug}
              href={siteUrl(space.slug)}
              className={`space-card block relative overflow-hidden rounded-2xl border p-8 md:p-10 ${space.bgClass} ${space.borderClass}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <h3 className={`text-2xl font-medium tracking-tight ${space.textClass}`} style={{ fontFamily: "var(--font-display)" }}>
                      {space.name}
                    </h3>
                    <span className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>
                      {space.tagline}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--color-ink-light)" }}>
                    {space.description}
                  </p>
                </div>
                <div className={`space-arrow shrink-0 ${space.textClass}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center pt-24 pb-12">
        <p className="text-2xl md:text-3xl font-light italic tracking-tight mb-8 max-w-lg mx-auto" style={{ fontFamily: "var(--font-display)" }}>
          &ldquo;It takes a village.<br />This is yours.&rdquo;
        </p>
        <Link
          to="/auth/signup"
          className="inline-block px-8 py-3.5 rounded-full text-white font-medium text-sm tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          style={{ background: "var(--color-brand)" }}
        >
          Get started — it's free
        </Link>
      </section>
    </>
  );
}
