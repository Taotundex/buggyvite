import BottomBar from '@/app/components/BottomBar'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid lg:grid-cols-6 grid-cols-5 overflow-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen overflow-y-scroll md:pb-0 pb-[50px]">
            <DashboardHeading />

            <div className="md:h-full h-auto md:p-10 p-5 grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                <div className="flex flex-col gap-3">
                    <h5 className='text-[#796FAB] text-xl font-extrabold'>How it Started</h5>
                    <h2 className='italic font-extrabold text-[#282828] md:text-[50px] text-4xl md:leading-[50px] leading-[36px] w-full md:w-[550px]'>Empowering You to Work, Sell and Earn Seamlessly</h2>
                    <p className='md:text-lg text-sm font-normal text-black'>Welcome to BugGy ViTe, the platform designed to help you unlock new opportunities with ease and simplicity. Whether you’re starting your first hustle, growing your business, or just looking for a way to earn while working smarter, we’re here to make it happen. At BugGy ViTe, we believe that success should be accessible to everyone. That’s why we’ve created a space where you can easily set up, connect, and thrive, all in one place.</p>
                </div>
                <Image className='mx-auto' src="/images/young people working at the desk.png" width={600} height={460} alt='young people working at the desk' />
            </div>
        </div>
        <BottomBar />
    </div>
  )
}

export default page