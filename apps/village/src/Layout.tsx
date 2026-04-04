import { Outlet } from "react-router-dom";
import { AuthProvider } from "@momconnect/shared";
import { SiteLayout } from "@momconnect/shared";

export default function Layout() {
  return (
    <AuthProvider>
      <SiteLayout siteName="Village" siteColor="#2563eb">
        <Outlet />
      </SiteLayout>
    </AuthProvider>
  );
}
