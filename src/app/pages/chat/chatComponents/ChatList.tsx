import React from "react";

interface ChatProps {
    id: number;
    name: string;
    lastMessage: string;
}

interface ChatList {
    onSelectChat: (chat: ChatProps) => void
}

const chats: ChatProps[] = [
    { 
        id: 1,
        name: "John Doe",
        lastMessage: "Hey Hey"
    },
    { 
        id: 2,
        name: "Jane Smith",
        lastMessage: "Hey there"
    },
]

const TheChatList: React.FC<ChatList> = ({ onSelectChat }) => {

    return(

        <div className="p-4">
            {
                chats.map((chat) => (
                    <div 
                        key={chat.id}
                        onClick={() => onSelectChat(chat)}
                        className="p-4 border-b cursor-pointer hover:bg-gray-100"
                    >
                        <h3 className="font-semibold">{chat.name}</h3>
                        <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                    </div>
                ))
            }
        </div>

    )

}

export default TheChatList