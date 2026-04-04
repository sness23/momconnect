export default function Home() {
  const moments = [
    { label: "I'm overwhelmed", emoji: "😮‍💨" },
    { label: "I can't sleep", emoji: "🌙" },
    { label: "I feel alone", emoji: "💙" },
    { label: "I'm anxious", emoji: "🌊" },
    { label: "I need strength", emoji: "💪" },
    { label: "I feel like a bad mom", emoji: "🤍" },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
          What do you need right now?
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-light)" }}>
          Affirmations, meditations, prayers, and healing guides — made by moms who understand.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
        {moments.map((m) => (
          <button
            key={m.label}
            className="p-5 bg-white rounded-2xl border hover:border-purple-300 hover:shadow-md transition-all text-center"
            style={{ borderColor: "var(--color-cream-dark)" }}
          >
            <div className="text-2xl mb-2">{m.emoji}</div>
            <div className="text-sm font-medium" style={{ color: "var(--color-ink-light)" }}>{m.label}</div>
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="font-medium text-lg mb-4 text-purple-700" style={{ fontFamily: "var(--font-display)" }}>
          Browse Content
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Meditations", emoji: "🧘" },
            { label: "Affirmations", emoji: "✨" },
            { label: "Prayers", emoji: "🙏" },
          ].map((cat) => (
            <div key={cat.label} className="bg-white p-5 rounded-2xl border text-center" style={{ borderColor: "var(--color-cream-dark)" }}>
              <div className="text-2xl mb-2">{cat.emoji}</div>
              <div className="font-medium text-sm">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
