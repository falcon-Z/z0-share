"use client";

import { handleLogout } from "@falcon-z/app/actions";
import Link from "next/link";
import { useTransition } from "react";

export default function LogoutButton({ token }: { token: string | null }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <Link href={"/auth/signin"} className={`${token ? "hidden" : "block"}`}>
        Sign In
      </Link>
      <button
        onClick={() => startTransition(() => handleLogout())}
        type="button"
        className={`${token ? "block" : "hidden"}`}
      >
        Sign Out
      </button>
    </div>
  );
}
