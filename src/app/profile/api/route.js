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

import { headers, cookies } from 'next/headers'


export async function GET(request) {
  const headersList = await  headers();
  const authorization = headersList.get("authorization");
  console.log("authorization: ", authorization);

  // 1st methode to get the cookies from request
  const theme = request.cookies.get('theme');
  console.log("Theme Cookies: ", theme)

  // 2nd build in Method
  const cookieStore = await cookies();
  cookieStore.set("snigdha", "Ujjal B. Allen")

  const getSn = cookieStore.get("snigdha");
  console.log("getSN: ", getSn)


  return new Response("<h1>user Api Profile</h1>", {
    headers: {"Content-Type": "text/html", "Set-Cookie": "theme=dark"}
  });
}
