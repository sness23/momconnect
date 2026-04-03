"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignUpPage() {
  return (
    <SiteLayout siteName="Village" siteColor="#2563eb">
      <AuthForm mode="signup" siteColor="#2563eb" />
    </SiteLayout>
  );
}
