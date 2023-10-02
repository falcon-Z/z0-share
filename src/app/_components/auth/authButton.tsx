"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import ProfileMenu from "./profileMenu";

export default function AuthButton() {
  const { status } = useSession();

  if (status === "authenticated") {
    return <ProfileMenu />;
  } else {
    return <Button onClick={() => signIn()}>Sign In</Button>;
  }
}
