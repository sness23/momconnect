import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, useAuth } from "@momconnect/shared";

export default function CreateGroup() {
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
    try {
      const group = await api.post("/api/groups", {
        name: form.get("name"),
        description: form.get("description"),
        type: form.get("type"),
        locationZip: form.get("locationZip") || null,
      });
      navigate(`/groups/${group.id}`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1 transition-shadow";

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-light tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
        Create a group
      </h2>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm border border-red-200">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>Group name *</label>
          <input name="name" required placeholder="Eastside Toddler Moms" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>Description</label>
          <textarea name="description" rows={3} placeholder="What's this group about?" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>Type *</label>
          <select name="type" required className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }}>
            <option value="neighborhood">Neighborhood</option>
            <option value="interest">Interest</option>
            <option value="age_stage">Age & Stage</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light)" }}>Zip code (for neighborhood groups)</label>
          <input name="locationZip" placeholder="78701" className={inputClass} style={{ borderColor: "var(--color-cream-dark)" }} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create group"}
        </button>
      </form>
    </div>
  );
}
