import { redirect, RedirectType } from "next/navigation";

// const user = false

// const num = 1;

export default async function OrderDynamicPage({ params }) {
  // if(!user){
  //     redirect('/')
  // }

  const { id } = await params;

  // if(num !== Number(id)){
  //     throw new Error('error handling review')
  // }

  //   const res = await fetch("https://wrong-api-url.com/data");
  //   if (!res.ok) throw new Error("Failed to fetch data");

  //   return (
  //     <div>
  //       <div>Dynamic page for order: {id};</div>
  //     </div>
  //   );

  const res = await fetch("https://wrong-api-url.com/data");
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();

  return <div>
    <div>Dynamic Page for Order: {id}</div>
    <div>Data Loaded: {data.title}</div>
  </div>;
}
