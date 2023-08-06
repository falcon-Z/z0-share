import PostDialog from "@falcon-z/app/_components/feed/postDialog";

export default async function PostInterceptPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `${process.env.API_HOST_URI}/posts/${params.id}`
  );

  const post = await response.json();

  return (
    <div className="min-h-screen">
      <PostDialog post={post} />;
    </div>
  );
}
