import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' h-screen overflow-y-scroll'>
        <div className="container py-[50px] flex flex-col gap-[50px]">
            <Link href="dashboard" className="logo">
                <Image src="/images/BV 1 Logo 4.png" width={150} height={50} alt="logo 1" />
            </Link>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-10">
                <div className="md:col-span-2 col-span-1">
                    <Image src="/images/woman talking with chatbot.png" width={1000} height={300} alt='woman talking with chatbot' />
                </div>
                <div className="text-[#282828] md:col-span-3 col-span-1 flex flex-col gap-3">
                    <h2 className='text-[40px] font-bold leading-[40px]'>Need help?</h2>
                    <p className="italic font-normal text-xl">Don’t hesitate to contact us, we’re  just a message away!</p>
                    <label htmlFor="search" className='input input-bordered bg-transparent w-full flex flex-row-reverse items-center gap-1 border border-[#796FAB] px-3 rounded-[10px] h-[50px] mr-5 lg:w-[500px]'>
                        <input type="search" name="search" id="search" placeholder='Search' className='px-3 bg-transparent w-full outline-none border-none' />
                        <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2503 24.2498L18.8215 18.821M18.8215 18.821C19.7501 17.8924 20.4867 16.79 20.9893 15.5767C21.4918 14.3634 21.7505 13.063 21.7505 11.7498C21.7505 10.4365 21.4919 9.13612 20.9893 7.92284C20.4867 6.70955 19.7501 5.60713 18.8215 4.67852C17.8929 3.74991 16.7905 3.0133 15.5772 2.51074C14.3639 2.00818 13.0635 1.74951 11.7503 1.74951C10.437 1.74951 9.13661 2.00818 7.92332 2.51074C6.71004 3.0133 5.60762 3.74991 4.67901 4.67852C2.8036 6.55393 1.75 9.09754 1.75 11.7498C1.75 14.402 2.8036 16.9456 4.67901 18.821C6.55442 20.6964 9.09802 21.75 11.7503 21.75C14.4025 21.75 16.9461 20.6964 18.8215 18.821Z" stroke="#796FAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
                <div className="flex flex-col items-center md:gap-3 gap-1 rounded-[10px] bg-[#796FAB] text-center lg:p-10 md:p-5 p-3 text-[#EFF6F8]">
                    <Image src="/images/Password Window.png" width={40} height={40} alt="Password Window" />
                    <h4 className='font-bold md:text-xl text-base'>Getting Started</h4>
                    <p className='font-normal md:text-base text-sm italic'>Sign up or log in to access personalized features and services</p>
                </div>
                <div className="flex flex-col items-center md:gap-3 gap-1 rounded-[10px] bg-[#796FAB] text-center lg:p-10 md:p-5 p-3 text-[#EFF6F8]">
                    <Image src="/images/Slider.png" width={40} height={40} alt="Slider" />
                    <h4 className='font-bold md:text-xl text-base'>Set Up Your Profile</h4>
                    <p className='font-normal md:text-base text-sm italic'>Customize your experience by updating your preferences</p>
                </div>
                <div className="flex flex-col items-center md:gap-3 gap-1 rounded-[10px] bg-[#796FAB] text-center lg:p-10 md:p-5 p-3 text-[#EFF6F8]">
                    <Image src="/images/System Information.png" width={40} height={40} alt="System Information" />
                    <h4 className='font-bold md:text-xl text-base'>Popular Resources</h4>
                    <p className='font-normal md:text-base text-sm italic'>Explore our top guides, everything you need is just a click away</p>
                </div>
                <div className="flex flex-col items-center md:gap-3 gap-1 rounded-[10px] bg-[#796FAB] text-center lg:p-10 md:p-5 p-3 text-[#EFF6F8]">
                    <Image src="/images/FAQ.png" width={40} height={40} alt="FAQ" />
                    <h4 className='font-bold md:text-xl text-base'>Explore Our Resources</h4>
                    <p className='font-normal md:text-base text-sm italic'>Check out our guides and FAQs for quick answers and detailed instructions</p>
                </div>
                <div className="flex flex-col items-center md:gap-3 gap-1 rounded-[10px] bg-[#796FAB] text-center lg:p-10 md:p-5 p-3 text-[#EFF6F8]">
                    <Image src="/images/Team.png" width={40} height={40} alt="Team" />
                    <h4 className='font-bold md:text-xl text-base'>Contact Support</h4>
                    <p className='font-normal md:text-base text-sm italic'>Reach out to our team for assistance with setup or trouble shooting</p>
                </div>
                <div className="flex flex-col items-center md:gap-3 gap-1 rounded-[10px] bg-[#796FAB] text-center lg:p-10 md:p-5 p-3 text-[#EFF6F8]">
                    <Image src="/images/Network.png" width={40} height={40} alt="Network" />
                    <h4 className='font-bold md:text-xl text-base'>Join the Community</h4>
                    <p className='font-normal md:text-base text-sm italic'>Engage with others, share experiences and learn from our user network</p>
                </div>
            </div>
            <div className="flex items-center justify-end mt-[-20px] gap-2">
                <span className='font-medium md:text-[16px] text-xs'>Can’t find what you are looking for?</span>
                <Link href="contact" className='flex items-center justify-center md:gap-3 gap-2 md:w-[175px] w-[130px] h-[40px] font-medium text-[#796FAB] md:text-base text-sm border border-[#796FAB] rounded-[10px]'>
                    <Image className='hover:-rotate-[30deg] transition-all' src="/images/Phone Bubble.png" width={25} height={25} alt="Phone Bubble" />
                    Contact Us
                </Link>
            </div>
        </div>
    </div>
  )
}

export default page
