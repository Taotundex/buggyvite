'use client';
import { socket } from '../../../../lib/SocketClient'
import ChatForm from '@/app/components/ChatForm'
import ChatMessage from '@/app/components/ChatMessage'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ClientChatList from './chatComponents/clientChatList';
import { FaArrowLeftLong, FaRegMessage } from 'react-icons/fa6';
import { FaEllipsisV, FaUserFriends } from 'react-icons/fa';
import BottomBar from '@/app/components/BottomBar';

interface ChatProps {
    id: number;
    name: string;
    roomname: string;
    lastMessage: string;
}

const Page = () => {
    const [room, setRoom] = useState("");
    const [userName, setUserName] = useState("");
    const [joined, setJoined] = useState(false);
    const [messages, setMessages] = useState<{ sender: string; message: string }[]> ([]);

    const [selectedChat, setSelectedChat] = useState<ChatProps | null>(null)

    useEffect(() => {
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
            console.log(room, userName)
            socket.emit("join-room", {room, username: userName})
            setJoined(true);
        }
    }

    // useEffect(() => {
    //     handJoinRoom()
    // }, [setRoom, setUserName])
    
    const handleSendMessage = (message: string) => {
        const data = { room, message, sender: userName };
        setMessages((prev) => [...prev, { sender: userName, message }]);
        socket.emit("message",data)
        console.log(message);        
    }

    const recentChats: ChatProps[] = [
        {
            id: 1,
            name: "John Doe",
            roomname: "DamilolaJohn",
            lastMessage: "Hey Hey"
        },
        {
            id: 2,
            name: "Jane Smith",
            roomname: "DamilolaJane",
            lastMessage: "Hey there"
        },   
        {
            id: 3,
            name: "John Doe",
            roomname: "DamilolaDoe",
            lastMessage: "Hey Hey"
        },
        {
            id: 4,
            name: "Jane Smith",
            roomname: "DamilolaSmith",
            lastMessage: "Hey there"
        },   
        {
            id: 5,
            name: "Adeleke Oluwamayokun",
            roomname: "DamilolaAdeleke",
            lastMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Namisd adipisci"
        },
    ]

    const handleChatSelect = (chat: ChatProps) => {
        setSelectedChat(chat);
        setUserName(chat.name);
        setRoom(chat.roomname);
        handJoinRoom();
    };
    
    const handleChatClose = () => {
        setSelectedChat(null);
    }

  return (
    <div className='h-screen grid lg:grid-cols-6 grid-cols-5 overflow-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen overflow-y-scroll">
            <DashboardHeading />

            {/* <div className="body md:px-10 px-5 mb-5 h-[83vh] flex md:flex-row gap-3 flex-col overflow-hidden">
                <div className="chat-list md:w-2/6 w-full h-full border-r-4 overflow-y-auto bg-[#eff6f8] p-5 pe-2">
                    {
                        recentChats.map((recentChat) => (
                            <ClientChatList 
                                key={recentChat.id} 
                                name={recentChat.name} 
                                lastMesage={recentChat.lastMessage} 
                                action={() => handleChatSelect(recentChat)} 
                            />
                        ))
                    }
                </div>
                <div className="chat-body md:w-4/6 w-full h-full">
                    <div className="h-full">
                        {
                            joined 
                            ? 
                            (
                                <div className="chatbox h-full overflow-hidden">
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
                                    <div className="all-content h-[75%] md:p-5 py-1 overflow-y-scroll">
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
            </div> */}
            {
                !(recentChats.length > 0) ? (
                    <div className="w-full h-full p-5 flex flex-col gap-3 justify-center items-center text-purple">
                        <FaRegMessage className='md:size-56 size-36' />
                        <h3 className='lg:text-4xl md:text-2xl text-lg font-bold drop-shadow-xl lg:w-3/4 md:w-4/5 w-full text-center mx-auto leading-tight'>
                            Send your first message right away on <br />
                            BugGyViTe <br />
                            by 
                            <span className='italic'> hiring a service!.</span>
                        </h3>
                        <Link className='btn border-none bg-[#796FAB] text-white mt-3 md:w-1/3 w-1/2' href={"marketplace"} title='Hire A Service'>Hire A Service</Link>
                    </div>
                ) : (
                    <div className="h-full overflow-y-scroll flex flex-col md:flex-row gap-3 justify-between md:px-10 px-5 md:p-0 pb-20 relative">
                        <div className={`w-full md:w-1/3 overflow-y-auto md:pe-2 md:border-r-4 border-black/10 ${selectedChat ? "hidden md:block" : "block"}`}>
                            {
                                recentChats.map((recentChat) => (
                                    <ClientChatList 
                                        key={recentChat.id} 
                                        id={recentChat.id} 
                                        activeChatId={selectedChat?.id} 
                                        name={recentChat.name} 
                                        lastMesage={recentChat.lastMessage}
                                        action={() => handleChatSelect(recentChat)} 
                                    />
                                ))
                            }
                        </div>
                        <div className={`w-full md:w-2/3 md:h-auto h-full sticky top-0 ${selectedChat ? "block" : "hidden md:block" }`}>
                            <div className="h-full">
                                {
                                    selectedChat && joined
                                    ? 
                                    (
                                        <div className="chatbox h-full overflow-hidden">
                                            <div className="flex justify-between items-center border-b border-[#00000080] md:p-5 p-3 ps-0">
                                                <div className="profile flex gap-2 items-center">
                                                    <button
                                                        className="md:hidden p-3 -me-4 bg-transparent"
                                                        onClick={() => handleChatClose()}
                                                    >
                                                        <FaArrowLeftLong className='size-6' />
                                                    </button>
                                                    <Link href={`profile?email=`} className="profile flex gap-2 items-center">
                                                        <div className="img relative w-fit">
                                                            <Image className="relative rounded-full" src="/images/Ellipse 169.png" width={50} height={50} alt="profile image" />
                                                            <div className="absolute bottom-[2px] right-[2px] md:w-[12px] w-[10px] md:h-[12px] h-[10px] rounded-full bg-[#12FB21] border-2 border-white"></div>
                                                        </div>
                                                        <div className="dets flex flex-col md:gap-2 gap-1 text-black">
                                                            <h4 className='font-bold md:text-lg text-sm md:leading-4 leading-3'>Message {room}</h4>
                                                            <small className='md:text-sm text-xs leading-[10px]'>Online . Avg response time 1 hour</small>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <details className='bg-purple text-background rounded-lg drop-shadow-xl p-2 relative md:hidden inline-flex'>
                                                    <summary className='list-none'><FaEllipsisV className='size-4' /></summary>
                                                    <div className='absolute z-[99999999] top-[45px] right-0 w-max bg-white p-3 rounded-md flex flex-col gap-2'>
                                                        <Link className='btn border-none px-6 bg-[#796FAB] text-white' href="payment">Pay Now</Link>
                                                        <Link className='btn border-none px-6 bg-[#796FAB] text-white' href={`profile?email=`}>View Profile</Link>
                                                    </div>
                                                </details>
                                                <Link className='btn border-none bg-[#796FAB] text-white md:inline-flex hidden' href="payment">Pay Now</Link>
                                            </div>
                                            <div className="all-content h-[75%] md:p-5 py-1 overflow-y-scroll">
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
                                    ) : (
                                        // <form action="" className='flex flex-col gap-2 w-[300px] mx-auto'>
                                        //     <input type="text" placeholder='username?' value={userName} onChange={(e) => setUserName(e.target.value)} className='bg-transparent input input-bordered' />
                                        //     <input type="text" placeholder='roomname?' value={room} onChange={(e) => setRoom(e.target.value)} className='bg-transparent input input-bordered' />
                                        //     <button type='button' onClick={handJoinRoom} className="btn">Message User</button>
                                        // </form>
                                        <div className={`w-full h-full sticky top-0 flex flex-col gap-3 justify-center items-center text-purple`}>
                                            <FaUserFriends className='md:size-56 size-36' />
                                            <h3 className='lg:text-4xl md:text-2xl text-lg font-bold drop-shadow-xl lg:w-3/4 md:w-4/5 w-full text-center mx-auto leading-tight'>Continue your conversaton or begin another!.</h3>
                                            <Link className='btn border-none bg-[#796FAB] text-white mt-3 md:w-1/3 w-1/2' href={"marketplace"} title='Hire A Service'>Hire A Service</Link>
                                        </div>                     
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <BottomBar />
    </div>
  )
}

export default Page