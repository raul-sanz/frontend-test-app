"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LogOutIcon } from "./icons.component";

const Header = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  if (status === "loading") {
    return null
  }
  return (
    <header className="bg-white h-20 absolute w-full px-4 sm:px-12">
      <nav className="h-full flex justify-between container items-center">
        <div>
          <h3 className="text-ct-dark-600 text-2xl font-semibold">
            FrontApp
          </h3>
        </div>
        <ul className="flex items-center gap-4">

          {user ? (
            <>
              <li className="cursor-pointer border border-blue-700 rounded-md px-3 py-1 text-blue-700 flex gap-2 hover:bg-gray-50" onClick={() => signOut()}>
                Logout
                <LogOutIcon/>
              </li>
            </>
          ):(
            <>
              <li>
                <Link href="/login" className="text-ct-dark-600 underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-ct-dark-600 underline">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
