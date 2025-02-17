'use client';
import { socket } from '../../../../lib/SocketClient'
import ChatForm from '@/app/components/ChatForm'
import ChatMessage from '@/app/components/ChatMessage'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [room, setRoom] = useState("");
    const [joined, setJoined] = useState(false);
    const [messages, setMessages] = useState<{ sender: string; message: string }[]> ([]);
    const [userName, setUserName] = useState("");

    useEffect(()=> {
        socket.on("message", (data)=> {
            setMessages((prev) => [...prev, data]);
        });
        socket.on("user_joined", (message)=> {
            setMessages((prev) => [...prev, { sender: userName, message }]);
        });
        return () => {
            socket.off("user_joined");
            socket.off("message");
        } 
    },[]);

    const handJoinRoom = () => {
        if (room && userName) {
            socket.emit("join-room", {room, username: userName})
            setJoined(true);
        }
    }
    const handleSendMessage = (message: string) => {
        const data = { room, message, sender: userName };
        setMessages((prev) => [...prev, { sender: userName, message }]);
        socket.emit("message",data)
        console.log(message);        
    }

  return (
    <div className='h-screen grid md:grid-cols-6 grid-cols-5 overflow-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen overflow-y-scroll">
            <DashboardHeading />

            <div className="body md:p-10 p-5 pb-0">
                <div className="">
                    {joined ? 
                        (
                            <div className="chatbox border border-[#00000080] rounded-[10px]">
                                <div className="flex justify-between items-center border-b border-[#00000080] md:p-5 p-3">
                                    <div className="profile flex gap-2 items-center">
                                        <div className="img relative w-fit">
                                            <Image className="relative rounded-full" src="/images/Ellipse 169.png" width={50} height={50} alt="profile image" />
                                            <div className="absolute bottom-[2px] right-[2px] md:w-[12px] w-[10px] md:h-[12px] h-[10px] rounded-full bg-[#12FB21] border-2 border-white"></div>
                                        </div>
                                        <div className="dets flex flex-col md:gap-2 gap-1 text-black">
                                            <h4 className='font-bold md:text-lg text-sm md:leading-4 leading-3'>Message {room}</h4>
                                            <small className='md:text-sm text-xs leading-[10px]'>Online . Avg response time 1 hour</small>
                                        </div>
                                    </div>
                                    <Link className='btn border-none bg-[#796FAB] text-white' href="payment">Pay Now</Link>
                                </div>
                                <div className="all-content md:p-5 p-3 py-1">
                                    {messages.map((msg, index) => [
                                        <ChatMessage 
                                            key={index}
                                            sender={msg.sender}
                                            message={msg.message}
                                            isOwnMessage={msg.sender === userName}
                                        />
                                    ])}
                                </div>
                                <ChatForm onSendMessage={handleSendMessage} />
                            </div>
                            // <div className="flex flex-col items-center justify-center italic">No message yet!</div>
                            ) : (
                                <form action="" className='flex flex-col gap-2 w-[300px] mx-auto'>
                                    <input type="text" placeholder='username?' value={userName} onChange={(e) => setUserName(e.target.value)} className='bg-transparent input input-bordered' />
                                    <input type="text" placeholder='roomname?' value={room} onChange={(e) => setRoom(e.target.value)} className='bg-transparent input input-bordered' />
                                    <button onClick={handJoinRoom} className="btn">Message User</button>
                                </form>
                                // null                            
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page