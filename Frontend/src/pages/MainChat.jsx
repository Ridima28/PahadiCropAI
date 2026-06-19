import React from "react";
import { SideBar } from "../components/SideBar";
import { ChatBox } from "../components/ChatBox";

export default function MainChat() {
  return (
    <div className="flex h-screen w-full">
      <SideBar />
      <ChatBox />
    </div>
  );
}   