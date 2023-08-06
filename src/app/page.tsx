import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import NewPost from "./_components/feed/newpost";
import HomeFeed from "./_components/feed/homeFeed";

export default function Home() {
  const token = cookies().get("token");

  if (!token) {
    redirect("/auth/signin");
  }

  return (
    <main className=" min-h-screen h-full w-full p-2 grid place-items-center gap-8">
      <section className="container h-full w-full lg:border-2 border-gray-700 rounded-3xl p-8 mt-24 lg:max-w-2xl ">
        <section className="mb-8">
          <NewPost />
        </section>
        <section>
          <HomeFeed />
        </section>
      </section>
    </main>
  );
}
