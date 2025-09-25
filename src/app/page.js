"use client";

import State from "./State";
import HomeLayout from '@/component/HomeLayout'

export default function Home() {
  // const addhander = () => {
  //   alert('You are welcome in this page mate!')
  // };

  return (
    <HomeLayout>
      <div className="flex item-center justify-center h-screen w-full">
        this is our home page
      </div>
    </HomeLayout>
  );
}
