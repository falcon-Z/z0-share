"use client";

import SignInForm from "@falcon-z/app/_components/auth/signInForm";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SignIn() {
  return (
    <>
      <h2 className="text-4xl text-center flex items-center justify-center gap-4 flex-col">
        <Icon icon="carbon:login" />
        SignIn
      </h2>
      <SignInForm />
    </>
  );
}
