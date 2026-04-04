export default function Home() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
          You are not alone
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-light)" }}>
          If you or someone you know is in an unsafe situation, help is available. No account needed.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
          <h3 className="font-medium text-lg mb-3 text-red-700" style={{ fontFamily: "var(--font-display)" }}>
            Need help now?
          </h3>
          <div className="space-y-3">
            <a href="tel:1-800-799-7233" className="block p-4 bg-white rounded-xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="font-medium">National DV Hotline</div>
              <div className="text-sm" style={{ color: "var(--color-ink-muted)" }}>1-800-799-7233 (24/7, confidential)</div>
            </a>
            <a href="sms:741741&body=HOME" className="block p-4 bg-white rounded-xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="font-medium">Crisis Text Line</div>
              <div className="text-sm" style={{ color: "var(--color-ink-muted)" }}>Text HOME to 741741</div>
            </a>
            <a href="tel:988" className="block p-4 bg-white rounded-xl border border-red-200 hover:border-red-400 transition-colors">
              <div className="font-medium">988 Suicide &amp; Crisis Lifeline</div>
              <div className="text-sm" style={{ color: "var(--color-ink-muted)" }}>Call or text 988</div>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: "var(--color-cream-dark)" }}>
          <h3 className="font-medium text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>Find local resources</h3>
          <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
            Shelters, legal aid, counseling, and financial assistance near you.
          </p>
          <span className="text-xs mt-2 inline-block" style={{ color: "var(--color-ink-muted)" }}>Resource finder coming soon</span>
        </div>
      </div>

      {/* Quick Exit */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://google.com"
          className="block px-4 py-2.5 bg-gray-800 text-white rounded-full text-sm font-medium shadow-lg hover:bg-gray-900 transition-colors"
        >
          Quick Exit &rarr;
        </a>
      </div>
    </>
  );
}
