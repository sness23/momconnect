import "./globals.css";
import { SessionProvider } from "./providers";

export const metadata = {
  title: "Market — MomConnect",
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
