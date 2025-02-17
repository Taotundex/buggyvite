'use client'
import React from 'react'

const ChatForm = ({
    onSendMessage,
}: {
    onSendMessage: (message: string) => void
}) => {
    const [message, setMessage] = React.useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage("")
        }
    }
  return (
        <form onSubmit={handleSubmit} className='sticky bottom-0 left-0 flex justify-between items-center border-t border-[#00000080] rounded-b-[10px] bg-[#EFF6F8] md:p-5 p-3'>
            <label htmlFor="" className="input input-bordered p-0 bg-transparent flex items-center h-[50px] w-full border border-[#D9D9D9] rounded-[5px]">
                <div className="relative">
                    <input onChange={(e) => setMessage(e.target.value)} className='relative z-10 opacity-[0.000000001] h-full w-[50px] bg-transparent' type="file" name="file" id="file" />
                    <div className="h-full z-[-1] w-[50px] absolute top-0 left-0 flex items-center justify-center">
                        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 5V15.5C11 16.9587 10.4205 18.3576 9.38909 19.3891C8.35764 20.4205 6.95869 21 5.5 21C4.04131 21 2.64236 20.4205 1.61091 19.3891C0.579463 18.3576 0 16.9587 0 15.5V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0C5.06087 0 6.07828 0.421427 6.82843 1.17157C7.57857 1.92172 8 2.93913 8 4V14.5C8 15.163 7.73661 15.7989 7.26777 16.2678C6.79893 16.7366 6.16304 17 5.5 17C4.83696 17 4.20107 16.7366 3.73223 16.2678C3.26339 15.7989 3 15.163 3 14.5V5H4V14.5C4 14.8978 4.15804 15.2794 4.43934 15.5607C4.72064 15.842 5.10218 16 5.5 16C5.89782 16 6.27936 15.842 6.56066 15.5607C6.84196 15.2794 7 14.8978 7 14.5V4C7 3.20435 6.68393 2.44129 6.12132 1.87868C5.55871 1.31607 4.79565 1 4 1C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V15.5C1 18 3 20 5.5 20C8 20 10 18 10 15.5V5H11Z" fill="#796FAB" fillOpacity="0.5"/>
                        </svg>
                    </div>
                </div>
                <textarea onChange={(e) => setMessage(e.target.value)} className='w-full h-full px-[15px] bg-transparent border-y-none border-x border-x-[#D9D9D9] outline-none pt-3 resize-none' name="message" id="message" placeholder='Type your message...' required ></textarea>
                {/* <input className='w-full h-full px-[15px] bg-transparent border-y-none border-x border-x-[#D9D9D9] outline-none' type="text" name="message" id="message" placeholder='Type your message...' required /> */}
                <button className='w-[50px] h-full flex justify-center items-center' type="submit">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6657 7.33335L8.16574 9.83335M15.9057 1.52585C15.9848 1.49857 16.07 1.49407 16.1515 1.51289C16.233 1.53171 16.3076 1.57308 16.3667 1.63228C16.4258 1.69147 16.467 1.7661 16.4857 1.84763C16.5044 1.92917 16.4998 2.01432 16.4724 2.09335L11.5357 16.2017C11.5062 16.286 11.452 16.3595 11.3802 16.4127C11.3083 16.4658 11.2222 16.4962 11.1329 16.4998C11.0436 16.5034 10.9553 16.48 10.8794 16.4328C10.8036 16.3856 10.7436 16.3167 10.7074 16.235L8.02491 10.2C7.97977 10.0997 7.89943 10.0193 7.79907 9.97419L1.76407 7.29085C1.68265 7.2545 1.614 7.19457 1.56699 7.1188C1.51998 7.04303 1.49677 6.9549 1.50036 6.86581C1.50395 6.77671 1.53417 6.69074 1.58712 6.619C1.64008 6.54726 1.71332 6.49304 1.79741 6.46335L15.9057 1.52585Z" stroke="#796FAB" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </label>
        </form>
  )
}

export default ChatForm