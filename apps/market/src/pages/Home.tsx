export default function Home() {
  const categories = [
    { name: "Kids' Clothing", emoji: "👶" },
    { name: "Handmade & Crafts", emoji: "🎨" },
    { name: "Baked Goods", emoji: "🧁" },
    { name: "Women's Clothing", emoji: "👗" },
    { name: "Home & Baby Gear", emoji: "🏠" },
    { name: "Services", emoji: "💼" },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Buy, sell, and support each other
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-light)" }}>
          A trusted marketplace for moms — crafts, baked goods, kids' clothes, and services from women in your community.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="p-5 bg-white rounded-2xl border hover:border-emerald-300 hover:shadow-md transition-all text-center cursor-pointer"
            style={{ borderColor: "var(--color-cream-dark)" }}
          >
            <div className="text-2xl mb-2">{cat.emoji}</div>
            <div className="text-sm font-medium" style={{ color: "var(--color-ink-light)" }}>{cat.name}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/auth/signin" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full font-medium text-sm hover:bg-emerald-700 transition-colors">
          Sign in to start selling
        </a>
      </div>
    </>
  );
}
