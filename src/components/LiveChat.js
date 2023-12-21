import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API POLLING...");
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px]">
        <div>
          <ChatMessage name="Rajeshdreams" message="Nice video..🚀🚀🚀🚀" />
        </div>
        <div className="p-2 bg-gray-50 ">
          <input type="text" className="border border-black rounded-lg" />
          <button className="px-2 items-center border border-black ml-2 rounded-lg ">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
