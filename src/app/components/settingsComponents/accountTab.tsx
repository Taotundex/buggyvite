import Link from 'next/link'
import React from 'react'

const AccountTab = () => {

    return(
        <div className="md:px-10 md:py-8 p-5 border border-[#282828] rounded-[10px]">
            <div className="flex flex-col md:gap-10 gap-3">
                <div className="text-[#282828] font-bold md:text-lg text-base text-right w-full">Need to view your public profile? <Link href="profile" className='text-[#796FAB]'>Go to My profile</Link></div>
                <form action="" method="post" className='flex flex-col md:gap-5 gap-6 md:py-10 py-5 border-y border-[#282828]'>
                    <label htmlFor="" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span>Full Name</span>
                        <input type="text" name="fullname" id="fullname" placeholder='John Doe' className='input input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <span>Email</span>
                        <input type="email" name="email" id="email" placeholder='johndoe@gmail.com' className='input input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB]' />
                    </label>
                    <label htmlFor="" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-[#282828] md:text-lg text-base'>
                        <div className="flex flex-col gap-1">
                            Online status 
                            <small className='md:text-sm text-xs md:leading-[15px] leading-3 font-normal'>When online, your Gigs are visible <br />under the Online search filter.</small>
                        </div>
                        {/* <span>Old Password</span> */}
                        <select name="active_status" id="active_status" className='select select-bordered bg-transparent border border-[#796FAB] md:w-[500px] w-full'>
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
    )

}

export default AccountTab