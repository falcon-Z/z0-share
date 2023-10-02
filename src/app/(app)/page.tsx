import HomeFeed from "../_components/feed/homeFeed";
import CreateNewPostButton from "../_components/posts/createNewPostButton";
import { Button } from "../_components/ui/button";

export default function Home() {
  return (
    <>
      <section className="h-full container lg:rounded-2xl lg:border border-border py-16 px-2 lg:px-4 max-w-4xl">
        <CreateNewPostButton />
        <div className="mt-8 h-full w-full ">
          <HomeFeed />
        </div>
      </section>
    </>
  );
}
