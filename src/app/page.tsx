import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const token = cookies().get("token");

  if (!token) {
    redirect("/auth/signin");
  }

  return (
    <main className="">
      <h1 className="text-4xl">Home Page</h1>
      <Link href="auth/signin">signin</Link>
    </main>
  );
}
