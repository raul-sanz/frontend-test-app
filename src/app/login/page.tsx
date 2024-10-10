import FormLayout from "@/components/form.layout";
import { LoginForm } from "./form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <FormLayout title="Sign in to your account">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </FormLayout>
  );
}