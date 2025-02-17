import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-[#eff6f8] overflow-y-scroll'>
      <div className="container md:py-[50px] py-5 flex flex-col md:gap-[50px] gap-5">
        <div className="logo">
          <Image src="/images/BV 1 Logo 4.png" width={150} height={40} alt="logo 1" />
        </div>
        <div className="body md:text-center text-left bg-[#796FAB] rounded-[10px] py-[50px] px-[20px] text-[#EFF6F8] lg:h-[595px] md:h-[675px] h-[550px] w-full mx-auto flex flex-col gap-[20px]">
          <h2 className='md:text-[80px] text-[50px] leading-[50px] font-extrabold italic md:leading-[80px]'>Join the Movement</h2>
          <p className='md:text-[22px] text-[18px] font-semibold leading-[28px]'>Become part of a thriving community of ambitious students.<br />Work, sell and earn.</p>
          <Link href="signup" className='btn border-[#EFF6F8] hover:text-white hover:bg-transparent shadow-xl shadow-[#00000040] md:mx-auto text-[16px] font-semibold w-[175px] h-[50px] rounded-[10px] bg-[#EFF6F8] text-[#282828] hover:border hover:border-[#EFF6F8] flex justify-center items-center'>Explore</Link>
          <Image className='md:pt-[20px] pt-[40px] mx-auto' src="/images/colleagues discussing team project.png" width={500} height={350} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default page