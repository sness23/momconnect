"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignInPage() {
  return (
    <SiteLayout siteName="Market" siteColor="#059669">
      <AuthForm mode="signin" siteColor="#059669" />
    </SiteLayout>
  );
}
