"use client";

import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function DogPage() {
  const { id } = useParams();

  const searchParams = useSearchParams(); // or searchParams.get('query name')
  console.log(searchParams);

  return (
    <div>
      This is dog page
      <div>Page no: {id}</div>
      {searchParams && (
        <>
          <div>here is the value: {searchParams.get("value") || ''}</div>
          <div>here is tha passowrd: {searchParams.get("password") || ''}</div>
        </>
      )}
    </div>
  );
}
