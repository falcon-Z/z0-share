"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function PostActions({
  id,
  title,
  likes,
}: {
  id: string;
  title: string;
  likes: number;
}) {
  const [canShare, setCanShare] = useState(false);

  const sharePost = async (title: string, url: string) => {
    setCanShare(true);
    if (canShare) {
      await navigator.share({
        title: title,
        url: url,
      });
    }
  };

  return (
    <div className="flex w-full items-center  justify-around p-4 h-full">
      <button className="text-xl flex items-center gap-2 hover:bg-gray-800/50 rounded-3xl px-4 py-2">
        <Icon icon={"mdi:cards-heart-outline"} />
        <div className="text-xl">{likes}</div>
      </button>
      <button
        onClick={() =>
          sharePost(title, `${process.env.NEXT_PUBLIC_HOST_URI}/post/${id}`)
        }
        className="text-xl flex items-center gap-2 hover:bg-gray-800/50 rounded-3xl px-4 py-2"
      >
        <Icon icon={"carbon:share"} />
      </button>
    </div>
  );
}
