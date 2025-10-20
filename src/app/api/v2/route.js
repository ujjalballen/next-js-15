import { commentsTWO } from "@/comments/dataTwo";

export async function GET(request){
    return Response.json(commentsTWO)
}