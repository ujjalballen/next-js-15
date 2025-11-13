import { Suspense } from "react";
import { Author } from "./author";

export default async function PostSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await response.json();

  const filtersPosts = results.filter((result) => result.id % 10 === 1);

  return (
    <div className="p-2">
      <h1>Blog Posts</h1>
      <div>
        {filtersPosts.map((post, index) => (
          <div key={post.id} className="border border-white mb-1">
            <p>{post.title}</p>
            <p>{post.body}</p>

            <div>
              <Suspense fallback={<div>Loading Author...</div>}>
                <Author userId={post.userId} />
              </Suspense>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
