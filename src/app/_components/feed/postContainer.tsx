import type { Post } from "@falcon-z/app/_lib/types";
import Image from "next/image";

export default function PostContainer({ post }: { post: Post }) {
  return (
    <div className="w-full  p-4 flex flex-col gap-4 my-4 rounded-2xl border-2 border-gray-700">
      <div className="flex flex-col gap-4 text-xl">
        <div className="flex items-center  gap-4">
          <Image
            src={`https://ui-avatars.com/api/?name=${post.createdBy.name}&background=random`}
            height={64}
            width={64}
            alt=""
            className=" object-center object-cover rounded-full"
          />
          <div>
            <div className="text-2xl font-semibold text-gray-300">
              {post.createdBy.name}
            </div>
            <h4 className="text-lg">{post.title}</h4>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={post.imageUri}
          height={400}
          width={300}
          alt=""
          className="object-center object-cover h-auto   aspect-auto w-full rounded-2xl"
        />
      </div>
      <div className="">
        <ul className="flex justify-start items-center gap-2">
          {post.tags.map((tag, i) => (
            <li
              key={i}
              className="px-4 py-1 rounded-full bg-gray-800 before:content-['#']"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button>Like</button>
      </div>
    </div>
  );
}
