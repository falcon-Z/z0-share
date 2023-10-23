"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "../ui/button";
import ProfileMenu from "./profileMenu";
import Link from "next/link";

export default function AuthButton() {
  const { user } = useUser();

  if (user) {
    return <ProfileMenu />;
  } else {
    return (
      <Button asChild>
        <Link href="/api/auth/login">Login</Link>
      </Button>
    );
  }
}
