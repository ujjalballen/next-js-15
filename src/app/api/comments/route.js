import { comments } from "@/comments/data";

// export async function GET(){
// return Response.json(comments)
// }

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filteredComments);
}

export async function POST(request) {
  const getData = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: getData.text,
  };

  comments.push(newComment);

  return new Response(
    JSON.stringify({ message: "Comment Created:", newComment }),
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    }
  );
}
