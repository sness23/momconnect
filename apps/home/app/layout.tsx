import "./globals.css";
import { SessionProvider } from "./providers";

export const metadata = {
  title: "MomConnect — One account. Five spaces. Your village.",
  description: "Community, healing, and resources for moms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
