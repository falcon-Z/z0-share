import { cookies } from "next/dist/client/components/headers";
import NewPost from "./_components/feed/newPostButton";
import HomeFeed from "./_components/feed/homeFeed";
import LogoutButton from "./_components/auth/logoutButton";
import useToken from "./_hooks/useToken";
import { revalidatePath } from "next/cache";
import NewPostButton from "./_components/feed/newPostButton";

export default function Home() {
  const token = cookies().get("token")?.value;

  const { setToken } = useToken();

  if (token) {
    setToken(token);
  }

  revalidatePath("/");


  return (
    <div className=" min-h-screen h-full w-full p-2 grid place-items-center gap-8">
      <div className="container h-full w-full lg:border-2 border-gray-700/25 rounded-3xl p-8 mt-24 lg:max-w-2xl ">
        <div className="flex  justify-end items-center p-4">
          <LogoutButton token={token ? token : null} />
        </div>
        <div className={token ? "block mb-8" : "hidden"}>
          <NewPostButton />
        </div>
        <div>
          <HomeFeed />
        </div>
      </div>
    </div>
  );
}
