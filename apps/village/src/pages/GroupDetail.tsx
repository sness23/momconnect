import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api, useAuth } from "@momconnect/shared";

interface Post {
  id: string;
  body: string;
  postType: string;
  createdAt: string;
  author: { profile: { displayName: string } | null };
}

interface Group {
  id: string;
  name: string;
  description: string | null;
  type: string;
  locationZip: string | null;
  members: { userId: string; role: string; user: { profile: { displayName: string } | null } }[];
  posts: Post[];
  _count: { members: number; posts: number };
}

export default function GroupDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [postBody, setPostBody] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    api.get(`/api/groups/${id}`)
      .then(setGroup)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  const isMember = user && group?.members.some((m) => m.userId === user.id);

  async function handleJoin() {
    if (!group) return;
    await api.post(`/api/groups/${group.id}/join`, {});
    const updated = await api.get(`/api/groups/${group.id}`);
    setGroup(updated);
  }

  async function handleLeave() {
    if (!group) return;
    await api.fetch(`/api/groups/${group.id}/leave`, { method: "DELETE" });
    const updated = await api.get(`/api/groups/${group.id}`);
    setGroup(updated);
  }

  async function handlePost(e: React.FormEvent) {
    e.preventDefault();
    if (!group || !postBody.trim()) return;
    setPosting(true);
    await api.post(`/api/groups/${group.id}/posts`, { body: postBody });
    setPostBody("");
    const updated = await api.get(`/api/groups/${group.id}`);
    setGroup(updated);
    setPosting(false);
  }

  if (loading) return <p className="text-center py-16" style={{ color: "var(--color-ink-muted)" }}>Loading...</p>;
  if (!group) return <p className="text-center py-16" style={{ color: "var(--color-ink-muted)" }}>Group not found</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/groups" className="text-sm text-blue-600 hover:underline mb-6 inline-block">&larr; All groups</Link>

      {/* Header */}
      <div className="bg-white rounded-2xl border p-8 mb-6" style={{ borderColor: "var(--color-cream-dark)" }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              {group.name}
            </h2>
            {group.description && (
              <p className="text-sm mb-3" style={{ color: "var(--color-ink-light)" }}>{group.description}</p>
            )}
            <div className="flex gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{group.type}</span>
              <span style={{ color: "var(--color-ink-muted)" }} className="py-1">{group._count.members} members · {group._count.posts} posts</span>
            </div>
          </div>
          {user && (
            <div>
              {isMember ? (
                <button
                  onClick={handleLeave}
                  className="px-4 py-2 text-sm rounded-full border hover:bg-red-50 transition-colors"
                  style={{ borderColor: "var(--color-cream-dark)", color: "var(--color-ink-muted)" }}
                >
                  Leave
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Join
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Post form */}
      {isMember && (
        <form onSubmit={handlePost} className="bg-white rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--color-cream-dark)" }}>
          <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            placeholder="Share something with the group..."
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 mb-3 text-sm"
            style={{ borderColor: "var(--color-cream-dark)" }}
          />
          <button
            type="submit"
            disabled={posting || !postBody.trim()}
            className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {posting ? "Posting..." : "Post"}
          </button>
        </form>
      )}

      {/* Posts */}
      {group.posts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border" style={{ borderColor: "var(--color-cream-dark)" }}>
          <p style={{ color: "var(--color-ink-muted)" }}>No posts yet. {isMember ? "Be the first!" : "Join to start posting."}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {group.posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl border p-6" style={{ borderColor: "var(--color-cream-dark)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium">{post.author.profile?.displayName || "Mom"}</span>
                <span className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                  {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-light)" }}>
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
