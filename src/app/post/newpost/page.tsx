import NewPostForm from "@falcon-z/app/_components/feed/newPostForm";
import * as Dialog from "@radix-ui/react-dialog";

export default function NewPostPage() {
  return (
    <div className="min-h-screen h-full w-full grid place-items-center">
      <div className="rounded-2xl max-w-3xl w-full border-2 border-gray-700/25 p-4 flex flex-col gap-4">
        <h3 className="text-4xl"> Create New Post</h3>
        <NewPostForm />
      </div>
    </div>
  );
}
