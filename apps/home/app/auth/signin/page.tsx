"use client";
import { AuthForm } from "@momconnect/shared/components/AuthForm";
import { SiteLayout } from "@momconnect/shared/components/SiteLayout";

export default function SignInPage() {
  return (
    <SiteLayout siteName="MomConnect" siteColor="#7c3aed">
      <AuthForm mode="signin" siteColor="#7c3aed" />
    </SiteLayout>
  );
}
