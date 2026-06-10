import React, { Suspense } from "react";
import VideoPlayer from "@/app/_components/VideoPlayer";

interface MatchPageProps {
  params: {
    id: string[]; // Array of path segments
  };
}

/*
Can keep SSR component by making an async Page that awaits the params props.
Read more about that here:
https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional

https://nextjs.org/docs/messages/sync-dynamic-apis#possible-ways-to-fix-it
*/
const MatchPage = async ({ params }: MatchPageProps) => {
  const { id } = await params;

  // TODO: get match info from data already fetched from search page

  console.log(id);

  return (
    <section>
      <h2>Matches Page</h2>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoPlayer
          url="https://www.youtube.com/embed/GkCzsXrZyQA"
          type="youtube"
          timestamp={2386}
        />
      </Suspense>
    </section>
  );
};

export default MatchPage;
