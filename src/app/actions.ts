"use server";

import { revalidatePath } from "next/cache";
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

    revalidatePath("/");
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

  if (authData.token) {
    cookies().set("token", authData.token);
    cookies().set("id", authData.user._id);
    cookies().set("email", authData.user.email);
    cookies().set("name", authData.user.name);

    revalidatePath("/");
    redirect("/");
  } else {
    redirect(`/auth/signin/?error=true&message=${authData.message}`);
  }
}

export async function handlePostCreation(data: FormData) {
  const title = data.get("title");
  const imageUri = data.get("image");
  const tags = data.get("tags")?.toString().split(",");

  const token = cookies().get("token");

  const response = await fetch(`${process.env.API_HOST_URI}/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token?.value}`,
    },
    body: JSON.stringify({ title, imageUri, tags }),
  });

  const postData = await response.json();

  if (postData.post._id) {
    revalidatePath("/");
    redirect("/");
  } else {
    redirect(`/?error=false&message=${postData.message}`);
  }
}

export async function handleLikes(id: string) {
  const token = cookies().get("token");

  await fetch(`${process.env.API_HOST_URI}/posts/${id}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token?.value}`,
    },
  });

  revalidatePath("/");
  revalidatePath("/post/[id]");
}

export async function handleLogout() {
  cookies().delete("token");
  revalidatePath("/");
  redirect("/auth/signin");
}
