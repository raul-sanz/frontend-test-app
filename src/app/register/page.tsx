import FormLayout from "@/components/form.layout";
import { RegisterForm } from "./form";
import Header from "@/components/header.component";

export default function RegisterPage() {
  return (
    <FormLayout title="Create your account">
      <RegisterForm />
    </FormLayout>
  );
}
