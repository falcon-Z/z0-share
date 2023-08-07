"use client";

import useAuth from "@falcon-z/app/_context/useAuth";
import Link from "next/link";

export default function LogoutButton() {
  const { user } = useAuth();

  return (
    <div>
      <Link href={"/auth/signin"} className={`${user ? "hidden" : "block"}`}>
        Sign In
      </Link>
      <button type="button" className={`${user ? "block" : "hidden"}`}>
        Sign Out
      </button>
    </div>
  );
}
