import React from "react";
import { SideBar } from "../components/SideBar";
import { ChatBox } from "../components/ChatBox";

export default function MainChat() {
  return (
<div className="flex h-screen w-screen overflow-hidden">
  <SideBar />

  <div className="flex-1 min-w-0 overflow-hidden">
    <ChatBox />
  </div>
</div>
  );
}   