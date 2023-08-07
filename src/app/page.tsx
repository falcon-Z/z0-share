import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import NewPost from "./_components/feed/newpost";
import HomeFeed from "./_components/feed/homeFeed";
import AppBar from "./_components/appBar";
import LogoutButton from "./_components/auth/logoutButton";

export default function Home() {
  const token = cookies().get("token")?.value;

  return (
    <main className=" min-h-screen h-full w-full p-2 grid place-items-center gap-8">
      <header className="w-full mb-16 ">
        <AppBar />
      </header>

      <section className="container h-full w-full lg:border-2 border-gray-700/25 rounded-3xl p-8 mt-24 lg:max-w-2xl ">
        <div className="flex  justify-end items-center p-4">
          <LogoutButton token={token ? token : null} />
        </div>
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
