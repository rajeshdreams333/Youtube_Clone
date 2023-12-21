import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        class="h-8"
        alt="user-log"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
}
export default ChatMessage;
