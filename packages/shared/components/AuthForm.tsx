"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  mode: "signin" | "signup";
  siteColor: string;
}

export function AuthForm({ mode, siteColor }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "signup") {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === "signin" ? "Sign in" : "Create your account"}
      </h2>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1"
              style={{ focusRingColor: siteColor } as any}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-lg text-white font-medium disabled:opacity-50"
          style={{ backgroundColor: siteColor }}
        >
          {loading
            ? "..."
            : mode === "signin"
              ? "Sign in"
              : "Create account"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        {mode === "signin" ? (
          <>
            New here?{" "}
            <a href="/auth/signup" className="underline" style={{ color: siteColor }}>
              Create an account
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a href="/auth/signin" className="underline" style={{ color: siteColor }}>
              Sign in
            </a>
          </>
        )}
      </p>
    </div>
  );
}
