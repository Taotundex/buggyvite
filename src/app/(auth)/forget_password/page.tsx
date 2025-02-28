import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen'>
            <div className="container grid lg:grid-cols-2 grid-cols-1 gap-[75px] h-full items-center">
                <div className="flex flex-col gap-5 w-full md:col-span-1 col-span-2">
                    <Image className='mx-auto' src="/images/BV 1 Logo 1.png" width={200} height={50} alt="logo 1" />
                    {/* <Image className='mx-auto' src="/images/Male User.png" width={50} height={50} alt="logo 1" /> */}
                    <h3 className='text-[36px] text-center font-bold'>Forgotten Password</h3>
                    {/* <p className='font-medium text-[18px]'>Enter your email and password access your dashboard</p> */}
                    <form action="" method="post" className='font-medium text-[16px] pt-10 pb-5 flex flex-col gap-[20px]'>
                        <label className="form-control flex flex-col gap-1 w-full">Email
                            <input type="email" placeholder="e. g. johndoe@gmail.com" name="email" className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" />
                        </label>
                        <button className="btn col-span-2 w-full bg-[#796FAB] border-none text-[#D9D9D9]">Recover Password</button>
                    </form>
                    <center className="text-[16px] font-medium">Go back to? <Link href="login" className='text-[#796FAB] underline underline-offset-2'>Login</Link></center>
                </div>
                <div className="img bg-[#796fab1c] shadow-2xl shadow-[#796fab1c] h-[90vh] backdrop-blur-[20px] rounded-[10px] lg:flex hidden items-center">
                    <Image className='mx-auto' src="/images/Boy studying remotely with tutor.png" width={525} height={100} alt="logo 1" />
                </div>
            </div>
        </div>
    )
}

export default page
