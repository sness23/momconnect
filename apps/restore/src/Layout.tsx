import { Outlet } from "react-router-dom";
import { AuthProvider } from "@momconnect/shared";
import { SiteLayout } from "@momconnect/shared";

export default function Layout() {
  return (
    <AuthProvider>
      <SiteLayout siteName="Restore" siteColor="#9333ea">
        <Outlet />
      </SiteLayout>
    </AuthProvider>
  );
}
