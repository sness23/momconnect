import { Outlet } from "react-router-dom";
import { AuthProvider } from "@momconnect/shared";
import { SiteLayout } from "@momconnect/shared";

export default function Layout() {
  return (
    <AuthProvider>
      <SiteLayout siteName="Safe Space" siteColor="#dc2626">
        <Outlet />
      </SiteLayout>
    </AuthProvider>
  );
}
