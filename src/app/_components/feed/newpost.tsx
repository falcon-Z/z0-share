"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import * as Dialog from "@radix-ui/react-dialog";
import NewPostForm from "./newPostForm";

export default function NewPost() {
  return (
    <div className="w-full rounded-2xl border-dashed border-2 border-gray-700 p-8 gap-4 grid place-items-center">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="w-full h-full text-gray-400 text-5xl grid place-items-center gap-4">
            <div className="text-2xl">Create New Post</div>
            <Icon icon={"carbon:cloud-upload"} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 backdrop-blur" />
          <Dialog.Content className="fixed top-[25%] left-[50%] -translate-x-1/2 max-w-2xl w-full  bg-gray-950/90 rounded-2xl p-4 border-2 border-gray-800/50  flex flex-col justify-between">
            <Dialog.Title className="mb-4">
              <h3 className="text-3xl">Post a new Image</h3>
            </Dialog.Title>
            <div>
              <NewPostForm />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
