import React from "react";

interface ChatProps {
    id: number;
    name: string;
    lastMessage: string;
}

interface ChatDetailsProps {
    chat: ChatProps | null;
    onBack: () => void;
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

const TheChatDetails: React.FC<ChatDetailsProps> = ({ chat, onBack }) => {

    if (!chat) return null

    return(

        <div className="p-4">
            <button
                className="md:hidden mb-2 px-3 py-1 bg-gray-300 rounded"
                onClick={onBack}
            >
               -Back-
            </button>

            <h3 className="font-bold text-xl">{chat.name}</h3>
            <p className="text-sm text-gray-500">Chat details will appear here...</p>
        </div>

    )

}

export default TheChatDetails