// import Image from 'next/image';
import React from 'react';


interface ChatMessageProps {
    sender: string;
    message: string;
    isOwnMessage: boolean;
}
const ChatMessage = ({ sender, message, isOwnMessage }: ChatMessageProps) => {
    const isSystemMessage = sender === "system";
  return (
    <div className="">
        <div className={`chat ${isOwnMessage ? "chat-end" : isSystemMessage ? "chat-end" : "chat-start"}`}>
            {!isSystemMessage && !isOwnMessage && <div className='chat-header text-xs'>{sender}</div>}
            <div className={`chat-bubble rounded-[10px] h-full min-h-full md:text-base text-sm ${isSystemMessage ? "bg-[#D9D9D9] text-[#282828] rounded-[0px]" : isOwnMessage ? "bg-[#796FAB] text-white" : "bg-[#D9D9D9] text-[#282828]"}`}>{message}</div>
            <div className="chat-footer opacity-50 text-xs mt-1">Sent at 12:45</div> 
        </div>
    </div>
  )
}

export default ChatMessage