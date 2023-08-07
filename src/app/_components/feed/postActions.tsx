"use client";

import { handleLikes } from "@falcon-z/app/actions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cookies } from "next/dist/client/components/headers";
import { experimental_useOptimistic, useEffect, useState } from "react";

export default function PostActions({
  id,
  token,
  title,
  likes,
}: {
  id: string;
  token: string;
  title: string;
  likes: number;
}) {
  const [optimisticLike, addOptimisticLike] = experimental_useOptimistic(
    { likeCount: likes },
    (state, newLikeCount: number) => ({
      ...state,
      likeCount: newLikeCount,
    })
  );

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
      <button
        onClick={async () => {
          addOptimisticLike(optimisticLike.likeCount + 1);
          await handleLikes(id);
        }}
        className={`text-xl flex items-center gap-2 hover:bg-gray-800/50 rounded-3xl px-4 py-2 ${
          token ? "block" : "hidden"
        } `}
      >
        <Icon icon={"mdi:cards-heart-outline"} />
        <div className="text-xl">{optimisticLike.likeCount}</div>
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
