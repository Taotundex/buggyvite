import OTPInput from '@/app/components/OTPInput'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen'>
            <div className="container py-[50px] flex flex-col gap-[50px]">
                <div className="logo">
                    <Image src="/images/BV 1 Logo 4.png" width={150} height={40} alt="logo 1" />
                </div>
                <form action="" method='post' className="text-[#796FAB] bg-[#EFF6F8] md:w-[475px] w-full shadow-lg shadow-[#D9D9D9] md:p-[45px] py-[45px] px-[25px] rounded-[10px] mx-auto flex flex-col gap-[20px] border border-[#D9D9D9]">
                    <h2 className='text-[30px] font-bold'>OTP Verification </h2>
                    <p className='text-[16px] font-medium leading-[30px]'>To ensure the security of your account, we have generated a One-Time Password (OTP) for your recent request registered e-mail</p>
                    <OTPInput />
                    <div className="font-medium">
                        <p>Remaining time : <strong>04:59</strong></p>
                        <p>Didn’t get the code ? <strong><Link href="">Re-send</Link></strong></p>
                    </div>
                    <div className="btns mt-5 flex flex-col gap-5">
                        <button type='submit' className='btn font-semibold w-full rounded-[10px] border-none bg-[#796fab] text-white flex justify-center items-center'>Verify</button>
                        <button type='reset' className='btn font-semibold w-full rounded-[10px] border-[#796fab] hover:text-white bg-transparent text-[#796fab] flex justify-center items-center'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page