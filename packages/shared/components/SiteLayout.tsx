"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

interface SiteLayoutProps {
  siteName: string;
  siteColor: string;
  children: React.ReactNode;
}

const navLinks = [
  { name: "Village", href: "/", slug: "village" },
  { name: "Restore", href: "/", slug: "restore" },
  { name: "Market", href: "/", slug: "market" },
  { name: "Launch", href: "/", slug: "launch" },
];

export function SiteLayout({ siteName, siteColor, children }: SiteLayoutProps) {
  const { data: session } = useSession();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://{slug}.sness.net"
      : "http://localhost:{port}";

  function siteUrl(slug: string) {
    if (process.env.NODE_ENV === "production") {
      return `https://${slug}.sness.net`;
    }
    const ports: Record<string, number> = {
      home: 3000,
      market: 3010,
      village: 3020,
      launch: 3030,
      restore: 3040,
      safe: 3050,
    };
    return `http://localhost:${ports[slug] || 3000}`;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={siteUrl("home")} className="text-sm text-gray-500 hover:text-gray-700">
              MomConnect
            </a>
            <h1 className="text-xl font-bold" style={{ color: siteColor }}>
              {siteName}
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.slug}
                href={siteUrl(link.slug)}
                className="text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {session?.user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {session.user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="text-sm px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: siteColor }}
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          MomConnect &mdash; Community, healing, and resources for moms.
        </div>
      </footer>
    </div>
  );
}
