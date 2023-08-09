import NewPostForm from "@falcon-z/app/_components/feed/newPostForm";
import IconWrapper from "@falcon-z/app/_components/wrappers/iconWrapper";
import Link from "next/link";

export default function NewPostPage() {
  return (
    <div className="h-full w-full grid place-items-center max-w-5xl m-2 p-4">
      <div className="w-full rounded-2xl border-2 border-gray-700/25 p-4 flex flex-col gap-8 ">
        <div className="flex items-center gap-4">
          <Link href={'/'} className="text-3xl ">
            <IconWrapper icon="carbon:arrow-left" />
          </Link>
          <h2 >Create New Post</h2>
        </div>
        <NewPostForm />
      </div>
    </div>
  );
}
