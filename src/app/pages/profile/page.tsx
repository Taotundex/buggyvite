import BottomBar from '@/app/components/BottomBar'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid md:grid-cols-6 grid-cols-5 overflow-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen md:pb-0 pb-[50px] overflow-y-scroll">
            <DashboardHeading />

            <div className="body md:p-10 p-5 grid grid-cols-3 md:gap-10 gap-5">
                <div className="md:col-span-2 col-span-3">
                    <div className="flex flex-col md:gap-10 gap-5">
                        <div className="flex items-center w-full md:gap-10 gap-5">
                            <Image className='rounded-full' src="/images/Ellipse 177.png" width={200} height={200} alt='profile image' />
                            <div className="profile-details w-full flex flex-col md:gap-4 gap-2">
                                <div className="w-full md:h-[45px] h-[40px] flex items-center px-5 bg-[#796FAB] text-white md:text-xl text-base leading-4 font-bold rounded-[10px]">Damilola Damilola</div>
                                <ul className='md:text-base text-sm font-medium'>
                                    <li>Photographer and Designer</li>
                                    <li>Lagos, Nigeria</li>
                                    <li>10:13pm local time</li>
                                </ul>
                                <Link href="chat" className='w-fit px-5 md:h-[35px] h-[30px] flex place-items-center bg-[#796FAB] text-white rounded-[5px]'>Hire me</Link>
                            </div>
                        </div>
                        <div className="overview">
                            <h4 className='font-bold text-[#282828] md:text-2xl text-lg'>Overview</h4>
                            <div className="divider mt-3 mb-0 px-5"></div>
                            <p className='text-[#282828] font-normal text-basemd:px-10 md:py-5 p-5 leading-[26px]'>onec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum</p>
                        </div>
                        <div className="history">
                            <h4 className='font-bold text-[#282828] md:text-2xl text-lg'>Work  History and Feedback(28)</h4>
                            <div className="divider mt-3 mb-0 px-5"></div>
                            <div className='px-5 md:py-5 py-3 leading-[26px] flex items-center gap-5'>
                                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9998 25.1998C9.3598 25.1998 4.7998 20.6398 4.7998 14.9998C4.7998 9.3598 9.3598 4.7998 14.9998 4.7998C20.6398 4.7998 25.1998 9.3598 25.1998 14.9998C25.1998 20.6398 20.6398 25.1998 14.9998 25.1998ZM14.9998 5.9998C10.0198 5.9998 5.9998 10.0198 5.9998 14.9998C5.9998 19.9798 10.0198 23.9998 14.9998 23.9998C19.9798 23.9998 23.9998 19.9798 23.9998 14.9998C23.9998 10.0198 19.9798 5.9998 14.9998 5.9998Z" fill="#796FAB"/>
                                    <path d="M9.59961 14.4004H20.3996V15.6004H9.59961V14.4004Z" fill="#796FAB"/>
                                    <path d="M14.4004 9.59961H15.6004V20.3996H14.4004V9.59961Z" fill="#796FAB"/>
                                </svg>
                                <p className='text-[#282828] font-normal md:text-xl text-base'><strong>11</strong> Jobs in Progress</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-3">
                    <div className="flex flex-col md:gap-10 gap-5">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2 bg-[#796FAB] h-[45px] px-5 text-white rounded-[10px]">
                                My Services
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.5C5.66304 7.5 6.29893 7.23661 6.76777 6.76777C7.23661 6.29893 7.5 5.66304 7.5 5M5 7.5C4.33696 7.5 3.70107 7.23661 3.23223 6.76777C2.76339 6.29893 2.5 5.66304 2.5 5M5 7.5V10M7.5 5C7.5 4.33696 7.23661 3.70107 6.76777 3.23223C6.29893 2.76339 5.66304 2.5 5 2.5M7.5 5H10M5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5M5 2.5V0M2.5 5H0M1.66667 1.66667L3.33333 3.33333M6.66667 6.66667L8.33333 8.33333M8.33333 1.66667L6.66667 3.33333M3.33333 6.66667L1.66667 8.33333M15 10C15.663 10 16.2989 9.73661 16.7678 9.26777C17.2366 8.79893 17.5 8.16304 17.5 7.5M15 10C14.337 10 13.7011 9.73661 13.2322 9.26777C12.7634 8.79893 12.5 8.16304 12.5 7.5M15 10V12.5M17.5 7.5C17.5 6.83696 17.2366 6.20107 16.7678 5.73223C16.2989 5.26339 15.663 5 15 5M17.5 7.5H20M15 5C14.337 5 13.7011 5.26339 13.2322 5.73223C12.7634 6.20107 12.5 6.83696 12.5 7.5M15 5V2.5M12.5 7.5H10M11.6667 4.16667L13.3333 5.83333M16.6667 9.16667L18.3333 10.8333M18.3333 4.16667L16.6667 5.83333M13.3333 9.16667L11.6667 10.8333M7.5 17.5C8.16304 17.5 8.79893 17.2366 9.26777 16.7678C9.73661 16.2989 10 15.663 10 15M7.5 17.5C6.83696 17.5 6.20107 17.2366 5.73223 16.7678C5.26339 16.2989 5 15.663 5 15M7.5 17.5V20M10 15C10 14.337 9.73661 13.7011 9.26777 13.2322C8.79893 12.7634 8.16304 12.5 7.5 12.5M10 15H12.5M7.5 12.5C6.83696 12.5 6.20107 12.7634 5.73223 13.2322C5.26339 13.7011 5 14.337 5 15M7.5 12.5V10M5 15H2.5M4.16667 11.6667L5.83333 13.3333M9.16667 16.6667L10.8333 18.3333M10.8333 11.6667L9.16667 13.3333M5.83333 16.6667L4.16667 18.3333" stroke="white" strokeWidth="2"/>
                                </svg>
                            </div>
                            <ul className=' md:text-lg text-base font-normal flex flex-col px-5 gap-2'>
                                <li className="flex gap-2 items-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z" fill="#796FAB"/>
                                        <path d="M7.5 2.85693L8.89286 5.67836L12 6.14265L9.75 8.32122L10.2857 11.4284L7.5 9.96408L4.71429 11.4284L5.25 8.32122L3 6.14265L6.10714 5.67836L7.5 2.85693Z" fill="white"/>
                                    </svg>
                                    Illustration
                                </li>
                                <li className="flex gap-3 items-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z" fill="#796FAB"/>
                                        <path d="M7.5 2.85693L8.89286 5.67836L12 6.14265L9.75 8.32122L10.2857 11.4284L7.5 9.96408L4.71429 11.4284L5.25 8.32122L3 6.14265L6.10714 5.67836L7.5 2.85693Z" fill="white"/>
                                    </svg>
                                    Web Design
                                </li>
                                <li className="flex gap-3 items-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z" fill="#796FAB"/>
                                        <path d="M7.5 2.85693L8.89286 5.67836L12 6.14265L9.75 8.32122L10.2857 11.4284L7.5 9.96408L4.71429 11.4284L5.25 8.32122L3 6.14265L6.10714 5.67836L7.5 2.85693Z" fill="white"/>
                                    </svg>
                                    Logo Design
                                </li>
                            </ul>
                        </div>
                        <div className="history">
                            <h4 className='font-bold text-[#282828] md:text-2xl text-lg'>Graphics & multimedia skills</h4>
                            <div className="divider md:mt-3 mt-1 mb-0"></div>
                            <div className="flex flex-col px-5 md:py-5 py-3 gap-2">
                                <div className='leading-[26px] flex items-center justify-between'>
                                    <p className='text-[#282828] font-normal md:text-xl text-base'>After effects</p>
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                                <div className='leading-[26px] flex items-center justify-between'>
                                    <p className='text-[#282828] font-normal md:text-xl text-base'>Framer</p>
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                                <div className='leading-[26px] flex items-center justify-between'>
                                    <p className='text-[#282828] font-normal md:text-xl text-base'>Flash</p>
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                                <div className='leading-[26px] flex items-center justify-between'>
                                    <p className='text-[#282828] font-normal md:text-xl text-base'>Skecth</p>
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                                <div className='leading-[26px] flex items-center justify-between'>
                                    <p className='text-[#282828] font-normal md:text-xl text-base'>Figma</p>
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                                <div className='leading-[26px] flex items-center justify-between'>
                                    <p className='text-[#282828] font-normal md:text-xl text-base'>Photoshop</p>
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history">
                            <h4 className='font-bold text-[#282828] md:text-2xl text-lg'>Work  History</h4>
                            <div className="divider md:mt-3 mt-1 mb-0"></div>
                            <div className='px-5 md:py-5 py-3 leading-[26px] flex flex-col gap-3'>
                                <p className='text-[#282828] font-normal md:text-xl text-base'><strong>90%</strong> Job Success</p>
                                <div className='text-[#282828] flex items-center gap-2 font-normal md:text-xl text-base'><strong>4.91</strong> 
                                    <div className="md:rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFD700]"  />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star bg-[#FFD700]" />
                                    </div>
                                </div>
                                <p className='text-[#282828] font-normal md:text-xl text-base'><strong>119</strong> Hours worked</p>
                                <p className='text-[#282828] font-normal md:text-xl text-base'><strong>31</strong> Jobs</p>
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