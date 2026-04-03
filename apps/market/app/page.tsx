import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

const categories = [
  { name: "Kids' Clothing", emoji: "👶" },
  { name: "Handmade & Crafts", emoji: "🎨" },
  { name: "Baked Goods", emoji: "🧁" },
  { name: "Women's Clothing", emoji: "👗" },
  { name: "Home & Baby Gear", emoji: "🏠" },
  { name: "Services", emoji: "💼" },
];

export default function MarketPage() {
  return (
    <SiteLayout siteName="Market" siteColor="#059669">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Buy, sell, and support each other
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A trusted marketplace for moms — crafts, baked goods, kids' clothes,
          and services from women in your community.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all text-center cursor-pointer"
          >
            <div className="text-2xl mb-2">{cat.emoji}</div>
            <div className="text-sm font-medium text-gray-700">{cat.name}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="/auth/signin"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
        >
          Sign in to start selling
        </a>
      </div>
    </SiteLayout>
  );
}
