"use client";

import { Post } from "@falcon-z/app/_lib/types";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import PostActions from "./postActions";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PostDialog({ post }: { post: Post }) {
  return (
    <>
      <Dialog.Root open>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 backdrop-blur bg-gradient-to-br from-purple-950/25 to-transparent" />
          <Dialog.Content className="fixed top-2 left-[50%] -translate-x-1/2 w-full max-h-screen flex flex-col justify-between h-full  gap-16 p-4 max-w-screen-xl re;atove">

            <Dialog.Title className="flex flex-col gap-8 items-start justify-center">
              <div className="flex items-center gap-4">
                <Image
                  src={`https://ui-avatars.com/api/?name=${post.createdBy?.name}&background=random`}
                  height={64}
                  width={64}
                  alt=""
                  className=" object-center object-cover rounded-full"
                />
                <div>
                  <div className="text-2xl font-semibold text-gray-300">
                    {post.createdBy?.name}
                  </div>
                  <h4 className="text-lg">{post.title}</h4>
                </div>
              </div>
              <Link href={'/'} className="text-5xl absolute right-2 top-2">
                <Icon icon="carbon:close" />
              </Link>
            </Dialog.Title>
            <div className="rounded-2xl">
              <Image
                src={post.imageUri}
                height={400}
                width={300}
                alt=""
                className="object-center  h-auto  w-full mx-auto object-contain max-h-[50vh] "
              />
            </div>

            <div className=" max-w-xs mx-auto w-full px-4 rounded-full  bg-gray-950/75 shadow-lg border border-gray-950/25 ">
              <PostActions post={post} />
            </div>


          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root >
    </>
  );
}
