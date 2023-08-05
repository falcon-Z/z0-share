import { Posts } from "@falcon-z/app/_lib/types";
import Image from "next/image";

export default async function HomeFeed() {
  const data = await fetch(`${process.env.API_HOST_URI}/posts/`);
  const posts: Posts = await data.json();

  return (
    <div>
      <div
        className={` ${
          posts ? "hidden" : "block"
        } grid place-items-center h-full w-full`}
      >
        <h2 className="text-4xl">No Posts Yet</h2>
      </div>
      <div className="">
        {posts.map((post) => (
          <div key={post._id} className="w-full rounded-2xl p-2 flex flex-col">
            <div className="">
              <div>
                <h4>{post.title}</h4>
              </div>
            </div>
            <div>
              <Image src={post.imageUri} height={300} width={200} alt="post" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
