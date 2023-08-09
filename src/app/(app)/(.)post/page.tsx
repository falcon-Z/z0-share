'use client';

import NewPostForm from "@falcon-z/app/_components/feed/newPostForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export default function NewPostModel() {
    return (
        <>
            <Dialog.Root open>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />
                    <Dialog.Content className="fixed top-[25%] left-[50%] -translate-x-1/2 max-w-4xl w-full max-h-screen flex flex-col justify-between gap-8 bg-gray-950/80 border-2 border-gray-700/25 rounded-2xl p-4">
                        <Dialog.Title className="flex items-center gap-4 text-3xl">
                            <Link href={'/'}>
                                <Icon icon="carbon:arrow-left" />
                            </Link>
                            <h2 >Create New Post</h2>
                        </Dialog.Title>
                        <div>
                            <NewPostForm />
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}