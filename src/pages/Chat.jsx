import React from "react";
import Conversation from "../components/Conversation";
import MessageLog from "../components/MessageLog";
import NavbarChat from "../components/NavbarChat";
import TypeMessageBox from "../components/TypeMessageBox";

const Chat = () => {
  return (
    <div className="h-full">
      <NavbarChat />
      <div className="flex flex-col h-full ">
        <MessageLog />
        <TypeMessageBox />
      </div>
    </div>
  );
};

export default Chat;
