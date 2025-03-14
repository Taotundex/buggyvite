import Image from "next/image"
import React from "react"

interface ClientChatListProps {
    id: number;
    name: string;
    lastMesage: string;
    activeChatId: number | undefined;
	action: () => void;
}

const ClientChatList: React.FC<ClientChatListProps> = ({ id, activeChatId, name, lastMesage, action }) => {

    return(

        <div 
            className={`border-b-2 border-black/10 p-3 flex gap-3 items-center justify-between cursor-pointer hover:bg-[#786FAB]/30 transition-all ${id == activeChatId ? "bg-[#786FAB]/20" : "bg-transparent"}`} 
            onClick={action}
        >
            <div className="img relative w-fit">
                <Image className="relative rounded-full" src="/images/Ellipse 169.png" width={60} height={60} alt="profile image" />
                <div className="absolute bottom-[2px] right-[2px] md:w-[12px] w-[10px] md:h-[12px] h-[10px] rounded-full bg-[#12FB21] border-2 border-white"></div>
            </div>
            <div className="w-4/5">
                <h3 className="line-clamp-1 font-semibold text-base">{name}</h3>
                <small className="line-clamp-1 text-[10px] text-ellipsis">{lastMesage}</small>
            </div>
        </div>

    )

}

export default ClientChatList