"use client";

import { Post } from "@falcon-z/app/_lib/types";
import * as Dialog from "@radix-ui/react-dialog";
import PostContainer from "./postContainer";

export default function PostDialog({ post }: { post: Post }) {
  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 backdrop-blur" />
        <Dialog.Content className="fixed top-[25%] left-[50%] -translate-x-1/2 max-w-4xl w-full max-h-screen flex flex-col justify-between">
          <PostContainer post={post} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
