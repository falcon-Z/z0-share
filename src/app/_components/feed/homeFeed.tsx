import type { Post } from "@falcon-z/app/_lib/types";
import PostContainer from "./postContainer";

export default async function HomeFeed() {
  const data = await fetch(`${process.env.API_HOST_URI}/posts/`);
  const posts: Post[] = await data.json();

  return (
    <div className="h-full">
      <div
        className={` ${
          posts ? "hidden" : "block"
        } grid place-items-center h-full w-full`}
      >
        <h2 className="text-4xl">No Posts Yet</h2>
      </div>
      <section className="flex flex-col gap-8">
        {posts.map((post) => (
          <div key={post._id}>
            <PostContainer post={post} />
          </div>
        ))}
      </section>
    </div>
  );
}
