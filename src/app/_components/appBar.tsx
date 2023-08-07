"use client";

import Link from "next/link";
import IconWrapper from "./wrappers/iconWrapper";
import useAuth from "../_context/useAuth";
import LogoutButton from "./auth/logoutButton";

export default function AppBar() {
  const { user } = useAuth();

  return (
    <div className="fixed top-0 w-full  border-b-2 backdrop-blur  bg-gray-950 bg-opacity-25 border-gray-950/50 py-4 px-8">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <h2 className="text-xl flex gap-2 items-center">
            <div>Z0-Share</div>
            <IconWrapper icon="carbon:share" />
          </h2>
        </Link>
        <div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
