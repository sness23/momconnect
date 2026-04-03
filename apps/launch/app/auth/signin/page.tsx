"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignInPage() {
  return (
    <SiteLayout siteName="Launch" siteColor="#d97706">
      <AuthForm mode="signin" siteColor="#d97706" />
    </SiteLayout>
  );
}
