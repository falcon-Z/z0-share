"use client";

import SignUpForm from "@falcon-z/app/_components/auth/signUpFOrm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <h2 className="text-4xl text-center flex items-center justify-center gap-4 flex-col">
        <Icon icon="carbon:user-profile" />
        Sign Up
      </h2>
      <SignUpForm />

      <div>
        <p className="text-gray-400 text-base">
          Already have an account?{" "}
          <Link
            href={"/auth/signin"}
            className="text-gray-200 hover:underline font-bold"
          >
            Sign In
          </Link>{" "}
        </p>
      </div>
    </>
  );
}
