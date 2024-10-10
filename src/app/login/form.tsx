"use client";

import { SubmitButton } from "@/components/buttons.component";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/icons.component";
import { button_form_style, input_style, label_style } from "@/helpers/classes";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };


  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push("/");
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div>
        <label htmlFor="email" className={label_style}>
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email address"
            className={input_style}
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className={label_style}>
          Password
        </label>
        <div className="mt-2 relative">
          <input
            required
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            className={`pr-10 ${input_style}`}
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
          </span>
        </div>
      </div>
      <SubmitButton loading={loading} text="Sign In"/>
    </form>
  );
};
