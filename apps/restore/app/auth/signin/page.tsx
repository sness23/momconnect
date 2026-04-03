"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignInPage() {
  return (
    <SiteLayout siteName="Restore" siteColor="#9333ea">
      <AuthForm mode="signin" siteColor="#9333ea" />
    </SiteLayout>
  );
}
