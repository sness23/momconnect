import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, useAuth } from "@momconnect/shared";

const categories = ["playdate", "momnight", "activity", "meetup"];

export default function CreateEvent() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!user) {
    navigate("/auth/signin");
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const data = {
      title: form.get("title"),
      description: form.get("description"),
      locationName: form.get("locationName"),
      locationAddress: form.get("locationAddress"),
      startsAt: form.get("startsAt"),
      endsAt: form.get("endsAt") || null,
      category: form.get("category"),
      kidAgeMin: form.get("kidAgeMin") || null,
      kidAgeMax: form.get("kidAgeMax") || null,
      capacity: form.get("capacity") || null,
    };

    try {
      const event = await api.post("/api/events", data);
      navigate(`/events/${event.id}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1 transition-shadow";

  return (
    <div className="max-w-lg mx-auto">
      <h2
        className="text-3xl font-light tracking-tight mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Create an event
      </h2>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
            What's happening? *
          </label>
          <input name="title" required placeholder="Playdate at the park" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
            Tell us more
          </label>
          <textarea name="description" rows={3} placeholder="Bring snacks, we'll be by the swings..." className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
              When? *
            </label>
            <input name="startsAt" type="datetime-local" required className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
              Until
            </label>
            <input name="endsAt" type="datetime-local" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
            Where?
          </label>
          <input name="locationName" placeholder="Zilker Park" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
          <input name="locationAddress" placeholder="2100 Barton Springs Rd" className={`${inputClass} mt-2`} style={{ borderColor: "var(--color-cream-dark)" }} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
            Category
          </label>
          <select name="category" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }}>
            <option value="">Select one...</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
              Kid ages (min)
            </label>
            <input name="kidAgeMin" type="number" min="0" max="18" placeholder="0" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
              Kid ages (max)
            </label>
            <input name="kidAgeMax" type="number" min="0" max="18" placeholder="18" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>
              Capacity
            </label>
            <input name="capacity" type="number" min="1" placeholder="10" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create event"}
        </button>
      </form>
    </div>
  );
}
