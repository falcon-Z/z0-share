import PostContainer from "@falcon-z/app/_components/feed/postContainer";

export default async function PostPage({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.API_HOST_URI}/posts/${params.id}`
  );

  const data = await response.json();

  const post = await data.post

  return (
    <div className=" mt-8 grid max-h-screen place-items-center h-full w-full ">
      <div className="w-full  max-w-4xl">
        <PostContainer post={post} />
      </div>
    </div>
  );
}
