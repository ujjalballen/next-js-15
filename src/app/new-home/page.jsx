'use client'

import Body from "@/component/Body";
import NewNav from "@/component/NewNav";
import { useState } from "react";

export default function NewHome() {
  const [name, setName] = useState("");

  return (
    <div>
      <NewNav />
      <div>
        <Body />
      </div>
    </div>
  );
}
