import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

const moments = [
  { label: "I'm overwhelmed", emoji: "😮‍💨" },
  { label: "I can't sleep", emoji: "🌙" },
  { label: "I feel alone", emoji: "💙" },
  { label: "I'm anxious", emoji: "🌊" },
  { label: "I need strength", emoji: "💪" },
  { label: "I feel like a bad mom", emoji: "🤍" },
];

export default function RestorePage() {
  return (
    <SiteLayout siteName="Restore" siteColor="#9333ea">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          What do you need right now?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Affirmations, meditations, prayers, and healing guides — made by moms
          who understand.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
        {moments.map((m) => (
          <button
            key={m.label}
            className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-center"
          >
            <div className="text-2xl mb-2">{m.emoji}</div>
            <div className="text-sm font-medium text-gray-700">{m.label}</div>
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="font-bold text-lg mb-4 text-purple-700">
          Browse Content
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div className="text-2xl mb-2">🧘</div>
            <div className="font-medium text-sm">Meditations</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div className="text-2xl mb-2">✨</div>
            <div className="font-medium text-sm">Affirmations</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div className="text-2xl mb-2">🙏</div>
            <div className="font-medium text-sm">Prayers</div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
