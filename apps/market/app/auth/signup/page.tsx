"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignUpPage() {
  return (
    <SiteLayout siteName="Market" siteColor="#059669">
      <AuthForm mode="signup" siteColor="#059669" />
    </SiteLayout>
  );
}
