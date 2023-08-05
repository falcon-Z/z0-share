import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl">Home Page</h1>
      <Link href="auth/signin">signin</Link>
    </main>
  );
}
