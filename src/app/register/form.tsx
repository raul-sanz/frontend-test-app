"use client";

import { SubmitButton } from "@/components/buttons.component";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/icons.component";
import { button_form_style, input_style, label_style } from "@/helpers/classes";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: "", email: "", password: "" });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        let err = (await res.json()).message
        if (err.includes("email")) {
          setError("Email already exists, please login.");
          return;
        }
      }

      signIn("credentials", {
        redirect: true,
        email: formValues.email,
        password: formValues.password,
        callbackUrl:"/",
      });
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
      <div >
        <label htmlFor="name" className={label_style}>
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
          className={input_style}
        />
      </div>
      <div >
        <label htmlFor="email" className={label_style}>
          Email address
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={input_style}
        />
      </div>
      <div >
        <label htmlFor="password" className={label_style}>
          Password
        </label>
        <div className="mt-2 relative">
          <input
            required
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[A-Z]).{6,}"
            title="Password must be at least 6 characters long, contain at least one uppercase letter and one number."
            className={`pr-10 ${input_style}`}
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
          </span>
        </div>
      </div>
      <SubmitButton loading={loading} text="Sign Up"/>
    </form>
  );
};
