export default function Home() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Find your people
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-light)" }}>
          Connect with moms near you. Organize playdates, discover events, and
          build the village every mom deserves.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { title: "Upcoming Events", desc: "No events yet. Be the first to create one!", cta: "Create an Event" },
          { title: "Moms Near You", desc: "Sign in and add your location to find moms in your area." },
          { title: "Local Groups", desc: "Join neighborhood groups, interest groups, and age-stage groups." },
          { title: "The Village Knows", desc: "Ask questions and get recommendations from moms who know your area." },
        ].map((card) => (
          <div key={card.title} className="bg-white p-6 rounded-2xl border" style={{ borderColor: "var(--color-cream-dark)" }}>
            <h3 className="font-medium text-lg mb-2 text-blue-600" style={{ fontFamily: "var(--font-display)" }}>
              {card.title}
            </h3>
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>{card.desc}</p>
            {card.cta && (
              <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                {card.cta}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
