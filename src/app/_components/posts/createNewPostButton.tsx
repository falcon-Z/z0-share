import Link from "next/link";

import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function CreateNewPostButton() {
  return (
    <Link
      href="/posts/new"
      className="w-full border-dashed border-border border-2 rounded-2xl grid place-items-center p-8"
    >
      <PlusCircledIcon className="w-16 h-16  " />
      <span className="text-center  text-2xl my-4">Create New Post</span>
    </Link>
  );
}
