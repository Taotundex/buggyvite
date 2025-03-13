import Image from "next/image"
import React from "react"

interface ClientChatListProps {
    name: string;
    lastMesage: string;
    chatOpen?: boolean;
	action?: () => void;
}

const ClientChatList: React.FC<ClientChatListProps> = ({ name, lastMesage, chatOpen, action }) => {

    return(

        <div 
            className={`border-b border-black/50 p-3 flex gap-3 items-center justify-between cursor-pointer hover:bg-[#786FAB]/30 transition-all hover:rounded-xl ${chatOpen ? "bg-[#786FAB]/20" : null}`} 
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