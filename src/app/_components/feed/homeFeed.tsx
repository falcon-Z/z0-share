import type { Post } from "@falcon-z/app/_lib/types";
import PostContainer from "./postContainer";

export default async function HomeFeed() {
  const response = await fetch(`${process.env.API_HOST_URI}/posts/`);
  const data = await response.json();
  const posts = data.posts as Post[];

  return (
    <div className="h-full">
      <div
        className={` ${
          posts.length > 0 ? "hidden" : "block"
        } grid place-items-center h-full w-full`}
      >
        <h2 className="text-4xl my-16 text-gray-400">No Posts to Show Yet</h2>
      </div>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <div key={post._id}>
            <PostContainer post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
