"use client";

import State from "./State";

export default function Home() {
  // const addhander = () => {
  //   alert('You are welcome in this page mate!')
  // };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
      {/* <h1>THis is gonna be a home page</h1>
        <button onClick={addhander}>Click me</button> */}

      {/* </main> */}

      <State />

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>Build with Ujjal B. Allen</span>
      </footer> */}
    </div>
  );
}
