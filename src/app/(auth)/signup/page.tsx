import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen'>
            <div className="container grid lg:grid-cols-2 grid-cols-1 gap-[75px] h-full items-center">
                <div className="flex flex-col gap-[10px] w-full">
                    <Image className='mx-auto' src="/images/BV 1 Logo 1.png" width={200} height={50} alt="logo 1" />
                    <h3 className='text-[36px] text-center font-bold'>Sign up your account</h3>
                    <p className='font-medium text-[18px]'>Enter your personal data to create an account</p>
                    <form action="/pages/dashboard" method="post" className='grid grid-cols-2 gap-x-[50px] gap-y-[20px] font-medium text-[16px] pt-10 pb-5'>
                        <label className="form-control flex flex-col gap-1 w-full col-span-1">First name
                            <input type="text" placeholder="e. g. John" name="firstname" className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" />
                        </label>
                        <label className="form-control flex flex-col gap-1 w-full col-span-1">Last name
                            <input type="text" placeholder="e. g. Doe" name="lastname" className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" />
                        </label>
                        <label className="form-control flex flex-col gap-1 w-full col-span-2">Email
                            <input type="email" placeholder="e. g. johndoe@gmail.com" name="email" className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" />
                        </label>
                        <label className="form-control flex flex-col gap-1 w-full col-span-2">Password
                            <input type="password" placeholder="********" minLength={8} name="password" className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" />
                            <small className='text-[12px]'>Must be at least 8 characters</small>
                        </label>
                        <div className="flex flex-col col-span-2 gap-2">
                            <div className="flex items-center gap-3">
                                <Image src="/images/Group.png" width={20} height={20} alt='privacy image' />
                                <span className='text-[#8E8E8E] text-sm w-full'>By signing up, you agree to the <Link href="" className='text-black underline underline-offset-2'>Terms of Service</Link> and <Link href="" className='text-black underline underline-offset-2'>Privacy Policy</Link></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src="/images/Group (1).png" width={20} height={20} alt='privacy image' />
                                <span className='text-[#8E8E8E] text-sm w-full'>This form is protected by feCAPTCHA and the Google <Link href="" className='text-black underline underline-offset-2'>Privacy Policy</Link> and <Link href="" className='text-black underline underline-offset-2'>Terms of Service</Link> apply</span>
                            </div>
                        </div>
                        <button className="btn col-span-2 w-full bg-[#796FAB] border-none text-[#D9D9D9]">Sign up</button>
                    </form>
                    <center className="text-[16px] font-medium">Have an account? <Link href="login" className='text-[#796FAB] underline underline-offset-2'>Log in</Link></center>
                </div>
                <div className="img bg-[#796fab1c] shadow-2xl shadow-[#796fab1c] h-[90vh] backdrop-blur-[20px] rounded-[10px] lg:flex  hidden items-center">
                    <Image className='mx-auto' src="/images/Boy studying remotely with tutor.png" width={525} height={100} alt="logo 1" />
                </div>
            </div>
        </div>
    )
}

export default page
