export default function Home() {
  const features = [
    { title: "AI Business Partner", desc: "Got an idea? Talk it through with our AI partner. It'll help you figure out your first steps.", soon: true },
    { title: "Micro-Courses", desc: "5-15 minute lessons on pricing, marketing, legal basics, and more — taught by real mom entrepreneurs.", soon: true },
    { title: "Find Collaborators", desc: "Post what you need or what you offer. Find your designer, your accountant, your co-founder.", soon: true },
    { title: "Mentor Matching", desc: "Get paired with an experienced mom entrepreneur who's been where you are.", soon: true },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Build something amazing
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-light)" }}>
          Mentorship, courses, and AI tools to help moms start and grow businesses — on their own schedule.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded-2xl border" style={{ borderColor: "var(--color-cream-dark)" }}>
            <h3 className="font-medium text-lg mb-2 text-amber-600" style={{ fontFamily: "var(--font-display)" }}>
              {f.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: "var(--color-ink-muted)" }}>{f.desc}</p>
            {f.soon && <span className="text-xs" style={{ color: "var(--color-ink-muted)" }}>Coming soon</span>}
          </div>
        ))}
      </div>
    </>
  );
}
