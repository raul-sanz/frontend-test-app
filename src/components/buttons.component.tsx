"use client";

import { button_form_style } from "@/helpers/classes";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

export const SubmitButton = ({ text, loading }: { text: string, loading: boolean }) => {
  return (
    <button
      type="submit"
      style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}`, paddingTop: 10, paddingBottom: 10 }}
      className={button_form_style}
      disabled={loading}
    >
      {loading ? "loading..." : text}
    </button>
  );
}