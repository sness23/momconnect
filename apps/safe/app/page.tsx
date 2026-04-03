import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SafeSpacePage() {
  return (
    <SiteLayout siteName="Safe Space" siteColor="#dc2626">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          You are not alone
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          If you or someone you know is in an unsafe situation, help is
          available. No account needed.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
          <h3 className="font-bold text-lg mb-2 text-red-700">
            Need help now?
          </h3>
          <div className="space-y-3">
            <a
              href="tel:1-800-799-7233"
              className="block p-3 bg-white rounded-lg border border-red-200 hover:border-red-400 transition-colors"
            >
              <div className="font-medium">National DV Hotline</div>
              <div className="text-sm text-gray-600">
                1-800-799-7233 (24/7, confidential)
              </div>
            </a>
            <a
              href="sms:741741&body=HOME"
              className="block p-3 bg-white rounded-lg border border-red-200 hover:border-red-400 transition-colors"
            >
              <div className="font-medium">Crisis Text Line</div>
              <div className="text-sm text-gray-600">
                Text HOME to 741741
              </div>
            </a>
            <a
              href="tel:988"
              className="block p-3 bg-white rounded-lg border border-red-200 hover:border-red-400 transition-colors"
            >
              <div className="font-medium">988 Suicide &amp; Crisis Lifeline</div>
              <div className="text-sm text-gray-600">
                Call or text 988
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-gray-800">
            Find local resources
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Shelters, legal aid, counseling, and financial assistance near you.
          </p>
          <span className="text-xs text-gray-400">Resource finder coming soon</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-gray-800">
            Learn &amp; understand
          </h3>
          <p className="text-gray-500 text-sm">
            Guides on recognizing abuse, safety planning, technology safety, and
            your legal rights.
          </p>
          <span className="text-xs text-gray-400">Coming soon</span>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://google.com"
          className="block px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium shadow-lg hover:bg-gray-900"
        >
          Quick Exit &rarr;
        </a>
      </div>
    </SiteLayout>
  );
}
