"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import * as Dialog from "@radix-ui/react-dialog";
import NewPostForm from "./newPostForm";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function NewPost() {
  const searchparams = useSearchParams();

  return (
    <Dialog.Root>
      <div className="w-full rounded-2xl border-dashed border-2 border-gray-700/75 p-8 gap-4 grid place-items-center">
        <Dialog.Trigger>
          <button className="w-full h-full text-gray-400 text-5xl grid place-items-center gap-4">
            <div className="text-2xl">Create New Post</div>
            <Icon icon={"carbon:cloud-upload"} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 backdrop-blur" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl rounded-2xl p-4 bg-gray-950/90 shadow-lg flex flex-col gap-8">
            <Dialog.Title className="text-4xl">Create New Post</Dialog.Title>
            <NewPostForm />
          </Dialog.Content>
        </Dialog.Portal>
      </div>
    </Dialog.Root>
  );
}
