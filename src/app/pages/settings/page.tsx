import BottomBar from '@/app/components/BottomBar'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid md:grid-cols-6 grid-cols-5 overflow-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen md:pb-0 pb-[50px] overflow-y-scroll">
            <DashboardHeading />

            <div className="body py-10 flex flex-col md:gap-10 gap-0">
                <div className="flex md:px-10 px-5 items-center justify-between text-center border-y border-[#282828] text-[#565454] font-semibold md:text-base text-sm">
                    <div className="w-max md:px-10 px-2 h-[45px] flex items-center justify-center">Account</div>
                    <div className="w-max md:px-10 px-2 h-[45px] flex items-center justify-center">Security</div>
                    <div className="w-max md:px-10 px-2 h-[45px] flex items-center justify-center">Notification</div>
                    <div className="w-max md:px-10 px-2 h-[45px] flex items-center justify-center">Business Information</div>
                </div>
                <div className="md:px-10 p-5">
                    <div className="md:px-10 md:py-8 p-5 border border-[#282828] rounded-[10px]">
                        <div className="flex flex-col md:gap-10 gap-3">
                            <div className="text-[#282828] font-bold md:text-lg text-base text-right w-full">Need to update your public profile? <Link href="profile" className='text-[#796FAB]'>Go to My profile</Link></div>
                            <form action="" method="post" className='flex flex-col md:gap-5 gap-3 md:py-10 py-5 border-y border-[#282828]'>
                                <label htmlFor="" className='flex justify-between gap-3 items-center font-medium text-[#282828] md:text-lg text-base'>
                                    Full Name
                                    <input type="text" name="fullname" id="fullname" placeholder='John Doe' className='input input-bordered md:w-[500px] w-[200px] bg-transparent border border-[#796FAB]' />
                                </label>
                                <label htmlFor="" className='flex justify-between gap-3 items-center font-medium text-[#282828] md:text-lg text-base'>
                                    Email
                                    <input type="email" name="email" id="email" placeholder='johndoe@gmail.com' className='input input-bordered md:w-[500px] w-[200px] bg-transparent border border-[#796FAB]' />
                                </label>
                                <label htmlFor="" className='flex justify-between gap-3 items-center font-medium text-[#282828] md:text-lg text-base'>
                                    <div className="flex flex-col gap-1">
                                        Online status 
                                        <small className='md:text-sm text-xs md:leading-[15px] leading-3 font-normal'>When online, your Gigs are visible <br />under the Online search filter.</small>
                                    </div>
                                    <select name="active_status" id="active_status" className='select select-bordered bg-transparent border border-[#796FAB] md:w-[500px] w-[200px]'>
                                        <option value="Offline">Offline</option>
                                        <option value="Offline">Online</option>
                                    </select>
                                </label>
                            </form>
                            <div className='flex flex-col w-full md:gap-5 gap-3'>
                                <h3 className='font-bold md:text-2xl text-xl'>Account Deactivation</h3>
                                <div className="w-full flex justify-end">
                                    <div className="flex flex-col gap-2 w-fit">
                                        <h4 className='font-semibold md:text-xl text-base leading-5'>What happens when you deactivate your account?</h4>
                                        <ul className='px-5 font-medium md:text-lg text-sm leading-[16px] flex flex-col gap-2'>
                                            <li className='list-disc'>Your profile and Gigs won&apos;t be shown on BugGy Vite anymore.</li>
                                            <li className='list-disc'>Active orders will be cancelled</li>
                                            <li className='list-disc'>You won&apos;t be able to re-activate your Gigs.</li>
                                        </ul>
                                    </div>
                                </div>
                                <form action="" method="post" className='w-full flex flex-col gap-10'>
                                    <label htmlFor="" className='flex items-center md:gap-5 gap-3'>
                                        <div className="md:w-[300px] w-[125px] md:text-base text-sm font-medium">I&apos;m leaving because...</div>
                                        <select name="accout_deactivation" id="accout_deactivation" className='select select-bordered bg-transparent border border-[#796FAB] w-full'>
                                            <option value="" disabled >Choose a reason</option>
                                        </select>
                                    </label>
                                    <button className='btn md:w-fit w-full px-10 h-[50px] border-none bg-[#796FAB] text-white rounded-[5px] ml-auto'>Deactivate Account</button>
                                </form>
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
