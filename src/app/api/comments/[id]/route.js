import { comments } from "@/comments/data";

export async function GET(request, {params}){
    const { id} = await params;
    const getComment = comments.find((comment) => comment.id === parseInt(id))

    return Response.json(getComment)
}