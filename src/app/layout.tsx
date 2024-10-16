import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-50 w-screen max-h-screen">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
