import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, useAuth } from "@momconnect/shared";

interface Event {
  id: string;
  title: string;
  description: string | null;
  locationName: string | null;
  startsAt: string;
  category: string | null;
  capacity: number | null;
  creator: { profile: { displayName: string } | null };
  rsvps: { status: string }[];
}

export default function Home() {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/events")
      .then(setEvents)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const goingCount = (e: Event) => e.rsvps.filter((r) => r.status === "going").length;

  return (
    <>
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-light tracking-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find your people
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-light)" }}>
          Connect with moms near you. Organize playdates, discover events, and
          build the village every mom deserves.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {user && (
          <Link
            to="/events/new"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Create an Event
          </Link>
        )}
        <Link
          to="/groups"
          className="px-5 py-2.5 rounded-full text-sm font-medium border transition-colors hover:bg-white/60"
          style={{ color: "var(--color-ink-light)", borderColor: "var(--color-cream-dark)" }}
        >
          Browse Groups
        </Link>
        {!user && (
          <Link
            to="/auth/signin"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Sign in to get started
          </Link>
        )}
      </div>

      {/* Events */}
      <div className="max-w-3xl mx-auto">
        <h3
          className="text-xl font-medium mb-6 text-blue-600"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Upcoming Events
        </h3>

        {loading ? (
          <p className="text-center py-12" style={{ color: "var(--color-ink-muted)" }}>
            Loading...
          </p>
        ) : events.length === 0 ? (
          <div
            className="text-center py-16 bg-white rounded-2xl border"
            style={{ borderColor: "var(--color-cream-dark)" }}
          >
            <p className="text-lg mb-2" style={{ color: "var(--color-ink-muted)" }}>
              No events yet
            </p>
            <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
              Be the first to organize something!
            </p>
            {user && (
              <Link
                to="/events/new"
                className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Create the first event
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="block bg-white p-6 rounded-2xl border hover:shadow-md transition-shadow"
                style={{ borderColor: "var(--color-cream-dark)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-lg mb-1">{event.title}</h4>
                    <p className="text-sm mb-2" style={{ color: "var(--color-ink-muted)" }}>
                      {new Date(event.startsAt).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                      {event.locationName && ` · ${event.locationName}`}
                    </p>
                    {event.description && (
                      <p className="text-sm line-clamp-2" style={{ color: "var(--color-ink-light)" }}>
                        {event.description}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-sm font-medium text-blue-600">
                      {goingCount(event)} going
                    </div>
                    {event.capacity && (
                      <div className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                        of {event.capacity}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  {event.category && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                      {event.category}
                    </span>
                  )}
                  <span className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                    by {event.creator.profile?.displayName || "A mom"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
