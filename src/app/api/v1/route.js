import { comments } from "@/comments/data";
import { redirect } from 'next/navigation'

export async function GET(request){
    redirect('/api/v2')
    return Response.json(comments)
}