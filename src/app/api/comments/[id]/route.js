import { comments } from "@/comments/data";

export async function GET(request, {params}){
    const { id} = await params;
    const getComment = comments.find((comment) => comment.id === parseInt(id))

    return Response.json(getComment)
};

export async function PATCH(request, {params}){
    const {id} = await params;
    const body = await request.json();
    const {text} = body

    const index = comments.findIndex(comment => comment.id === parseInt(id));
    comments[index].text = text;

    return Response.json(comments[index])
};


export async function DELETE(request, {params}){
    const {id} = await params;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    const deletedComment = comments[index]
    comments.splice(index, 1);

    return Response.json(deletedComment)
}
