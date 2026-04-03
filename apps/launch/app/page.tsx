import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function LaunchPage() {
  return (
    <SiteLayout siteName="Launch" siteColor="#d97706">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Build something amazing
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Mentorship, courses, and AI tools to help moms start and grow
          businesses — on their own schedule.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-amber-600">
            AI Business Partner
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Got an idea? Talk it through with our AI partner. It'll help you
            figure out your first steps.
          </p>
          <span className="text-xs text-gray-400">Coming soon</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-amber-600">
            Micro-Courses
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            5-15 minute lessons on pricing, marketing, legal basics, and more —
            taught by real mom entrepreneurs.
          </p>
          <span className="text-xs text-gray-400">Coming soon</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-amber-600">
            Find Collaborators
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Post what you need or what you offer. Find your designer, your
            accountant, your co-founder.
          </p>
          <span className="text-xs text-gray-400">Coming soon</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-amber-600">
            Mentor Matching
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Get paired with an experienced mom entrepreneur who's been where you
            are.
          </p>
          <span className="text-xs text-gray-400">Coming soon</span>
        </div>
      </div>
    </SiteLayout>
  );
}
