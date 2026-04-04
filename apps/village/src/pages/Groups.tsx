import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, useAuth } from "@momconnect/shared";

interface Group {
  id: string;
  name: string;
  description: string | null;
  type: string;
  locationZip: string | null;
  _count: { members: number; posts: number };
}

export default function Groups() {
  const { user } = useAuth();
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/groups")
      .then(setGroups)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const typeLabel: Record<string, string> = {
    neighborhood: "Neighborhood",
    interest: "Interest",
    age_stage: "Age & Stage",
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Groups
        </h2>
        {user && (
          <Link
            to="/groups/new"
            className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Create a Group
          </Link>
        )}
      </div>

      {loading ? (
        <p className="text-center py-12" style={{ color: "var(--color-ink-muted)" }}>Loading...</p>
      ) : groups.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border" style={{ borderColor: "var(--color-cream-dark)" }}>
          <p className="text-lg mb-2" style={{ color: "var(--color-ink-muted)" }}>No groups yet</p>
          <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>Start one for your neighborhood or interest!</p>
          {user && (
            <Link to="/groups/new" className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              Create the first group
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {groups.map((group) => (
            <Link
              key={group.id}
              to={`/groups/${group.id}`}
              className="block bg-white p-6 rounded-2xl border hover:shadow-md transition-shadow"
              style={{ borderColor: "var(--color-cream-dark)" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-lg mb-1">{group.name}</h3>
                  {group.description && (
                    <p className="text-sm line-clamp-2 mb-2" style={{ color: "var(--color-ink-light)" }}>
                      {group.description}
                    </p>
                  )}
                  <div className="flex gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                      {typeLabel[group.type] || group.type}
                    </span>
                    {group.locationZip && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                        {group.locationZip}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right text-sm shrink-0" style={{ color: "var(--color-ink-muted)" }}>
                  <div>{group._count.members} members</div>
                  <div>{group._count.posts} posts</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
