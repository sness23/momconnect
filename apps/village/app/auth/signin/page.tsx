"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignInPage() {
  return (
    <SiteLayout siteName="Village" siteColor="#2563eb">
      <AuthForm mode="signin" siteColor="#2563eb" />
    </SiteLayout>
  );
}
