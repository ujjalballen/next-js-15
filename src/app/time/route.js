// only caching work in GET request
// if you're using dynamic functions like headers(), cookies(), or working with the request object in your GET method, caching won't be applied
export const dynamic = "force-static"
export const revalidate = 10

export async function GET(request){
    return Response.json({time: new Date().toLocaleTimeString()})
}