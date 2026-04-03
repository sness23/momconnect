import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function VillagePage() {
  return (
    <SiteLayout siteName="Village" siteColor="#2563eb">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Find your people
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Connect with moms near you. Organize playdates, discover events, and
          build the village every mom deserves.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-blue-600">
            Upcoming Events
          </h3>
          <p className="text-gray-500 text-sm">
            No events yet. Be the first to create one!
          </p>
          <a
            href="/events/new"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
          >
            Create an Event
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-blue-600">
            Moms Near You
          </h3>
          <p className="text-gray-500 text-sm">
            Sign in and add your location to find moms in your area.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-blue-600">
            Local Groups
          </h3>
          <p className="text-gray-500 text-sm">
            Join neighborhood groups, interest groups, and age-stage groups.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-blue-600">
            The Village Knows
          </h3>
          <p className="text-gray-500 text-sm">
            Ask questions and get recommendations from moms who know your area.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
