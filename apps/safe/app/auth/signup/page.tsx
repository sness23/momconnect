"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignUpPage() {
  return (
    <SiteLayout siteName="Safe Space" siteColor="#dc2626">
      <AuthForm mode="signup" siteColor="#dc2626" />
    </SiteLayout>
  );
}
