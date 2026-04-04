import { Outlet } from "react-router-dom";
import { AuthProvider } from "@momconnect/shared";
import { SiteLayout } from "@momconnect/shared";

export default function Layout() {
  return (
    <AuthProvider>
      <SiteLayout siteName="MomConnect" siteColor="#7c3aed">
        <Outlet />
      </SiteLayout>
    </AuthProvider>
  );
}
