"use client";

import SignInForm from "@falcon-z/app/_components/auth/signInForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <h2 className="text-4xl text-center flex items-center justify-center gap-4 flex-col">
        <Icon icon="carbon:login" />
        SignIn
      </h2>
      <SignInForm />

      <div>
        <p className="text-gray-400 text-base">
          Dont have an account yet?{" "}
          <Link
            href={"/auth/signup"}
            className="text-gray-200 hover:underline font-bold"
          >
            Create Account
          </Link>{" "}
        </p>
      </div>
    </>
  );
}
