import React from "react";
import TypeMessageBox from "./TypeMessageBox";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";

const MessageLog = () => {
  return (
    <div className="flex-grow  flex flex-col mt-[120px]">
      <div className="w-full flex-grow bg-gray-900  p-2 overflow-y-auto">
        <MessageSent message={"hellodfaklsjef"} time={"1 day ago"} />
        <MessageRecieved message={"hellodfaklsjef"} time={"1 day ago"} />
        <MessageSent message={"hellodfaklsjef"} time={"1 day ago"} />
        <MessageRecieved message={"hellodfaklsjef"} time={"1 day ago"} />
      </div>
    </div>
  );
};

export default MessageLog;
