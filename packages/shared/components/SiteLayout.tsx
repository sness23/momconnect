import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../lib/auth";
import { siteUrl } from "../lib/sites";

interface SiteLayoutProps {
  siteName: string;
  siteColor: string;
  children?: React.ReactNode;
}

const navLinks = [
  { name: "Village", slug: "village" },
  { name: "Restore", slug: "restore" },
  { name: "Market", slug: "market" },
  { name: "Launch", slug: "launch" },
];

export function SiteLayout({ siteName, siteColor, children }: SiteLayoutProps) {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream, #faf7f2)" }}>
      <header className="bg-white/80 backdrop-blur-sm border-b" style={{ borderColor: "var(--color-cream-dark, #f0ebe3)" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={siteUrl("home")}
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-ink-muted, #8a847c)", fontFamily: "var(--font-body, sans-serif)" }}
            >
              MomConnect
            </a>
            <h1
              className="text-xl font-medium tracking-tight"
              style={{ color: siteColor, fontFamily: "var(--font-display, serif)" }}
            >
              {siteName}
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-5 text-sm" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            {navLinks.map((link) => (
              <a
                key={link.slug}
                href={siteUrl(link.slug)}
                className="hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-ink-light, #4a4540)" }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3" style={{ fontFamily: "var(--font-body, sans-serif)" }}>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm" style={{ color: "var(--color-ink-muted, #8a847c)" }}>
                  {user.name || user.email}
                </span>
                <button
                  onClick={signOut}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-ink-muted, #8a847c)" }}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                to="/auth/signin"
                className="text-sm px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: siteColor }}
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {children || <Outlet />}
      </main>

      <footer style={{ borderColor: "var(--color-cream-dark, #f0ebe3)" }} className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm" style={{ color: "var(--color-ink-muted, #8a847c)" }}>
          MomConnect — Community, healing, and resources for moms.
        </div>
      </footer>
    </div>
  );
}
