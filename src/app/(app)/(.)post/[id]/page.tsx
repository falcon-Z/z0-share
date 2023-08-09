import PostDialog from "@falcon-z/app/_components/feed/postDialog";
import useToken from "@falcon-z/app/_hooks/useToken";
import { cookies } from "next/dist/client/components/headers";

export default async function PostInterceptPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `${process.env.API_HOST_URI}/posts/${params.id}`
  );

  const data = await response.json();
  const post = data.post


  const token = cookies().get("token")?.value;

  return (
    <div className="min-h-screen">
      <PostDialog post={post} />;
    </div>
  );
}
