import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api, useAuth } from "@momconnect/shared";

interface Rsvp {
  id: string;
  status: string;
  userId: string;
  user: { profile: { displayName: string } | null };
}

interface Event {
  id: string;
  title: string;
  description: string | null;
  locationName: string | null;
  locationAddress: string | null;
  startsAt: string;
  endsAt: string | null;
  category: string | null;
  capacity: number | null;
  kidAgeMin: number | null;
  kidAgeMax: number | null;
  creatorId: string;
  creator: { profile: { displayName: string } | null };
  rsvps: Rsvp[];
}

export default function EventDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/api/events/${id}`)
      .then(setEvent)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  async function handleRsvp(status: string) {
    if (!event) return;
    await api.post(`/api/events/${event.id}/rsvp`, { status });
    const updated = await api.get(`/api/events/${event.id}`);
    setEvent(updated);
  }

  async function handleCancelRsvp() {
    if (!event) return;
    await api.fetch(`/api/events/${event.id}/rsvp`, { method: "DELETE" });
    const updated = await api.get(`/api/events/${event.id}`);
    setEvent(updated);
  }

  if (loading) {
    return <p className="text-center py-16" style={{ color: "var(--color-ink-muted)" }}>Loading...</p>;
  }

  if (!event) {
    return <p className="text-center py-16" style={{ color: "var(--color-ink-muted)" }}>Event not found</p>;
  }

  const myRsvp = user ? event.rsvps.find((r) => r.userId === user.id) : null;
  const going = event.rsvps.filter((r) => r.status === "going");
  const maybe = event.rsvps.filter((r) => r.status === "maybe");

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">&larr; All events</Link>

      <div className="bg-white rounded-2xl border p-8" style={{ borderColor: "var(--color-cream-dark)" }}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            {event.category && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 mb-3 inline-block">
                {event.category}
              </span>
            )}
            <h2 className="text-2xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              {event.title}
            </h2>
          </div>
        </div>

        <div className="space-y-3 mb-6 text-sm" style={{ color: "var(--color-ink-light)" }}>
          <div>
            <strong>When:</strong>{" "}
            {new Date(event.startsAt).toLocaleDateString("en-US", {
              weekday: "long", month: "long", day: "numeric",
              hour: "numeric", minute: "2-digit",
            })}
            {event.endsAt && ` – ${new Date(event.endsAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`}
          </div>
          {event.locationName && (
            <div><strong>Where:</strong> {event.locationName}{event.locationAddress && `, ${event.locationAddress}`}</div>
          )}
          {(event.kidAgeMin !== null || event.kidAgeMax !== null) && (
            <div><strong>Kid ages:</strong> {event.kidAgeMin || 0} – {event.kidAgeMax || "any"}</div>
          )}
          {event.capacity && (
            <div><strong>Capacity:</strong> {going.length} / {event.capacity}</div>
          )}
          <div><strong>Organizer:</strong> {event.creator.profile?.displayName || "A mom"}</div>
        </div>

        {event.description && (
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-ink-light)" }}>
            {event.description}
          </p>
        )}

        {/* RSVP buttons */}
        {user && (
          <div className="flex flex-wrap gap-3 mb-8">
            {myRsvp ? (
              <>
                <span className="text-sm py-2" style={{ color: "var(--color-ink-muted)" }}>
                  You're {myRsvp.status === "going" ? "going!" : myRsvp.status}
                </span>
                <button
                  onClick={handleCancelRsvp}
                  className="px-4 py-2 text-sm rounded-full border hover:bg-red-50 transition-colors"
                  style={{ borderColor: "var(--color-cream-dark)", color: "var(--color-ink-muted)" }}
                >
                  Cancel RSVP
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleRsvp("going")}
                  className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  I'm going!
                </button>
                <button
                  onClick={() => handleRsvp("maybe")}
                  className="px-5 py-2 rounded-full text-sm font-medium border hover:bg-white/60 transition-colors"
                  style={{ borderColor: "var(--color-cream-dark)", color: "var(--color-ink-light)" }}
                >
                  Maybe
                </button>
              </>
            )}
          </div>
        )}

        {/* Attendees */}
        {going.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2" style={{ color: "var(--color-ink-light)" }}>
              Going ({going.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {going.map((r) => (
                <span key={r.id} className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700">
                  {r.user.profile?.displayName || "Mom"}
                </span>
              ))}
            </div>
          </div>
        )}

        {maybe.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2" style={{ color: "var(--color-ink-light)" }}>
              Maybe ({maybe.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {maybe.map((r) => (
                <span key={r.id} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                  {r.user.profile?.displayName || "Mom"}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
