import React from "react";

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
  console.log(id);

  return (
    <div>
      <h2>Matches Page</h2>
    </div>
  );
};

export default MatchPage;
