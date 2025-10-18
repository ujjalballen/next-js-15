// export async function GET(){
//     return new Response("user api profile")
// }

// ===>  Method 01: Get a Headers from the request

// export async function GET(request){
//     const requestHeaders = new Headers(request.headers)
//     console.log("RequestHeaders: ", requestHeaders)
//     const getHeader = requestHeaders.get('authorization');
//     console.log(getHeader)

//     return new Response("User API Profile")
// }

// ===>  Method 02: Get a Headers from the Next.js Headers

import { headers } from 'next/headers'


export async function GET(request) {
  const headersList = await  headers();
  const authorization = headersList.get("authorization");
  console.log("authorization: ", authorization);

  return new Response("<h1>user Api Profile</h1>", {
    headers: {"Content-Type": "text/html"}
  });
}
