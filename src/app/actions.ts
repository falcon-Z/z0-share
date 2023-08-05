"use server";

import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export async function handleLogin(data: FormData) {
  const email = data.get("email");
  const password = data.get("password");

  const response = await fetch(`${process.env.API_HOST_URI}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const authData = await response.json();
  if (authData.token) {
    cookies().set("token", authData.token);
    redirect("/");
  } else {
    redirect(`/auth/signin/?error=true&message=${authData.message}`);
  }
}

export async function handleRegistration(data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");

  const response = await fetch(`${process.env.API_HOST_URI}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const authData = await response.json();

  console.log(authData);

  if (authData.token) {
    cookies().set("token", authData.token);
    redirect("/");
  } else {
    redirect(`/auth/signin/?error=true&message=${authData.message}`);
  }
}
