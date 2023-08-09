"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function NewPostButton() {
  return (
    <>
      <Link href={"post"}>
        <div className="w-full rounded-2xl border-dashed border-2 border-gray-700/75 p-8 gap-4 grid place-items-center">
          <div className="w-full h-full text-gray-400 text-5xl grid place-items-center gap-4">
            <div className="text-2xl">Create New Post</div>
            <Icon icon={"carbon:cloud-upload"} />
          </div>
        </div>
      </Link>
    </>
  );
}
