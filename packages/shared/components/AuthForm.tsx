import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../lib/auth";

interface AuthFormProps {
  mode: "signin" | "signup";
  siteColor: string;
}

export function AuthForm({ mode, siteColor }: AuthFormProps) {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "signup") {
        await signUp(email, password, name);
      } else {
        await signIn(email, password);
      }
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-16">
      <h2
        className="text-3xl font-light mb-8 text-center tracking-tight"
        style={{ fontFamily: "var(--font-display, serif)", color: "var(--color-ink, #1a1613)" }}
      >
        {mode === "signin" ? "Welcome back" : "Join the village"}
      </h2>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light, #4a4540)" }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 transition-shadow"
              style={{ borderColor: "var(--color-cream-dark, #e5e0d8)" }}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light, #4a4540)" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 transition-shadow"
            style={{ borderColor: "var(--color-cream-dark, #e5e0d8)" }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink-light, #4a4540)" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 transition-shadow"
            style={{ borderColor: "var(--color-cream-dark, #e5e0d8)" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-full text-white font-medium text-sm tracking-wide disabled:opacity-50 transition-opacity hover:opacity-90"
          style={{ backgroundColor: siteColor }}
        >
          {loading ? "..." : mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="text-center text-sm mt-6" style={{ color: "var(--color-ink-muted, #8a847c)" }}>
        {mode === "signin" ? (
          <>
            New here?{" "}
            <Link to="/auth/signup" className="underline" style={{ color: siteColor }}>
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link to="/auth/signin" className="underline" style={{ color: siteColor }}>
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
