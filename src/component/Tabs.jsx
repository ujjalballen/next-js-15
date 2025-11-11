"use client";

import { useState } from "react";

export default function Tabs({ children }) {
  const [tab, setTab] = useState("info");

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={() => setTab("info")}
          className="border border-white cursor-pointer px-4 py-2 mr-1"
        >
          Info
        </button>
        <button
          onClick={() => setTab("settings")}
          className="border border-white cursor-pointer px-4 py-2"
        >
          Settings
        </button>
      </div>
      <div>{tab === "info" ? children : <p>setting content is here...</p>}</div>
    </div>
  );
}
