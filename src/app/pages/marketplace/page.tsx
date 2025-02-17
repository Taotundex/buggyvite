import BottomBar from '@/app/components/BottomBar'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid lg:grid-cols-6 grid-cols-5 overflow-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen md:pb-0 pb-[50px] overflow-y-scroll">
            <DashboardHeading />

            <div className="body md:p-10 p-5 flex flex-col md:gap-10 gap-5">
                <div className="text-[#282828] flex flex-col gap-3">
                    <h2 className="font-extrabold text-2xl">Hotpicks</h2>
                    <h3 className="text-base font-medium">Top buys today</h3>
                    <div className="my-carousel w-full h-[300px]">

                    </div>
                </div>
                <div className="text-[#282828] flex flex-col gap-3">
                    <h2 className="font-extrabold text-2xl">Categories</h2>
                    <div className="relative border-2 flex items-center justify-center md:py-10 p-5 border-[#282828] rounded-[20px] w-full">
                        <h3 className="absolute -top-[15px] w-fit px-2 bg-[#EFF6F8] left-[5px] text-base font-medium">Top buys today</h3>
                        <div className="imgs flex details gap-5 overflow-x-scroll">
                            <div className="users w-[450px] flex flex-col gap-2">
                                <Image className='rounded-[10px] w-full' src="/images/Rectangle 39.png" width={400} height={300} alt='logo' />
                                <div className="flex flex-col gap-0 text-[#282828]">
                                    <h4 className='md:text-lg text-sm font-semibold md:w-full w-[200px]'>Damilola Damilola</h4>
                                    <p className='md:text-sm text-xs'>Content Writer</p>
                                </div>
                            </div>
                            <div className="users w-[450px] flex flex-col gap-2">
                                <Image className='rounded-[10px] w-full' src="/images/Rectangle 39.png" width={400} height={300} alt='logo' />
                                <div className="flex flex-col gap-0 text-[#282828]">
                                    <h4 className='md:text-lg text-sm font-semibold md:w-full w-[200px]'>Damilola</h4>
                                    <p className='md:text-sm text-xs'>Content Writer</p>
                                </div>
                            </div>
                            <div className="users w-[450px] flex flex-col gap-2">
                                <Image className='rounded-[10px] w-full' src="/images/Rectangle 50.png" width={400} height={300} alt='logo' />
                                <div className="flex flex-col gap-0 text-[#282828]">
                                    <h4 className='md:text-lg text-sm font-semibold md:w-full w-[200px]'>Damilola</h4>
                                    <p className='md:text-sm text-xs'>Content Writer</p>
                                </div>
                            </div>
                            <div className="users w-[450px] flex flex-col gap-2">
                                <Image className='rounded-[10px] w-full' src="/images/Rectangle 50.png" width={400} height={300} alt='logo' />
                                <div className="flex flex-col gap-0 text-[#282828]">
                                    <h4 className='md:text-lg text-sm font-semibold md:w-full w-[200px]'>Damilola</h4>
                                    <p className='md:text-sm text-xs'>Content Writer</p>
                                </div>
                            </div>
                            <div className="users w-[450px] flex flex-col gap-2">
                                <Image className='rounded-[10px] w-full' src="/images/Rectangle 50.png" width={400} height={300} alt='logo' />
                                <div className="flex flex-col gap-0 text-[#282828]">
                                    <h4 className='md:text-lg text-sm font-semibold md:w-full w-[200px]'>Damilola</h4>
                                    <p className='md:text-sm text-xs'>Content Writer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomBar />
    </div>
  )
}

export default page