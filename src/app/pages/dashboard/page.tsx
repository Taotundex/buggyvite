import BottomBar from '@/app/components/BottomBar'
import DashboardHeading from '@/app/components/DashboardHeading'
import Rating from '@/app/components/Rating'
import Sidebar from '@/app/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid lg:grid-cols-6 grid-cols-5 overflow-y-hidden'>
        <Sidebar />
        <div className="main-body col-span-5 h-screen overflow-y-scroll md:pb-0 pb-[50px]">
            <DashboardHeading />

            <div className="body md:p-10 p-5">
                <Link className='w-full text-[12px] flex justify-end text-[#796FAB] mb-1' href="">View all</Link>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    <div className="balance bg-white lg:col-span-1 md:col-span-2 col-span-1 rounded-[10px] flex flex-col justify-between md:p-8 p-5 md:gap-5 gap-2">
                        <h4 className='text-xl font-bold'>Balance</h4>
                        <div className="details flex flex-col gap-1">
                            <span className='text-2xl flex items-baseline'>#<h1 className='md:text-[60px] text-[45px] font-semibold'>10,000,000</h1></span>
                            <small className="text-xs text-[#2828288A]">Updated 3 days ago</small>
                            <Link className='btn border-none w-full text-white bg-[#796FAB] md:mt-5 mt-3' href="withdraw">Withdraw</Link>
                        </div>
                    </div>
                    <div className="rating bg-white rounded-[10px] flex flex-col justify-between md:p-8 p-5 md:gap-5 gap-2">
                        <h4 className='text-xl font-bold'>Rating</h4>
                        <div className="details flex flex-col md:gap-3 gap-0">
                            <Rating />
                            <Rating />
                            <Rating />
                            <Rating />
                            <Rating />
                        </div>
                    </div>
                    <div className="clients bg-white rounded-[10px] flex flex-col justify-between md:p-8 p-5 md:gap-5 gap-2">
                        <h4 className='text-xl font-bold'>Clients (<span>8</span>)</h4>
                        <div className="flex w-full flex-col">
                            <div className="card bg-transparent flex-row items-center gap-2">
                                <Image className='rounded-full' src="/images/Ellipse 177.png" width={40} height={40} alt='profile image' />
                                <div className="names">
                                    <h5 className='text-[16px] text-[#282828] font-semibold leading-[20px]'>MathryBite</h5>
                                    <p className="text-xs leading-[14px]">Content writer for pastry business</p>
                                </div>
                            </div>
                            <div className="divider md:my-2 my-0"></div>
                            <div className="card bg-transparent flex-row items-center gap-2">
                                <Image className='rounded-full' src="/images/Ellipse 177.png" width={40} height={40} alt='profile image' />
                                <div className="names">
                                    <h5 className='text-[16px] text-[#282828] font-semibold leading-[20px]'>MathryBite</h5>
                                    <p className="text-xs leading-[14px]">Content writer for pastry business</p>
                                </div>
                            </div>
                            <div className="divider md:my-2 my-0"></div>
                            <div className="card bg-transparent flex-row items-center gap-2">
                                <Image className='rounded-full' src="/images/Ellipse 177.png" width={40} height={40} alt='profile image' />
                                <div className="names">
                                    <h5 className='text-[16px] text-[#282828] font-semibold leading-[20px]'>MathryBite</h5>
                                    <p className="text-xs leading-[14px]">Content writer for pastry business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <Link className='w-full text-[12px] flex justify-end text-[#796FAB] mb-1' href="">View all</Link>
                    <div className="grid md:grid-cols-5 grid-cols-1 gap-3">
                        <div className="deadlines md:col-span-2 bg-white rounded-[10px] flex flex-col justify-between md:p-8 p-5 md:gap-5 gap-1">
                            <h4 className='text-xl font-bold'>Deadlines</h4>
                            <div className="details flex md:flex-col w-full md:h-[250px] md:overflow-y-scroll overflow-y-hidden md:overflow-x-hidden overflow-x-scroll gap-3">
                                <div className="card bg-[#796FAB] text-[#EFF6F8] w-full shadow-xl rounded-[10px]">
                                    <div className="card-body gap-0 px-5 py-3">
                                        <div className="card-actions justify-end">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.7475 13.25C6.09417 13.25 6.38958 13.1287 6.63375 12.8862C6.87792 12.6437 7 12.3492 7 12.0025C7 11.6558 6.87875 11.3604 6.63625 11.1163C6.39375 10.8721 6.09917 10.75 5.7525 10.75C5.40583 10.75 5.11042 10.8713 4.86625 11.1138C4.62208 11.3563 4.5 11.6508 4.5 11.9975C4.5 12.3442 4.62125 12.6396 4.86375 12.8837C5.10625 13.1279 5.40083 13.25 5.7475 13.25ZM11.9975 13.25C12.3442 13.25 12.6396 13.1287 12.8837 12.8862C13.1279 12.6437 13.25 12.3492 13.25 12.0025C13.25 11.6558 13.1287 11.3604 12.8862 11.1163C12.6437 10.8721 12.3492 10.75 12.0025 10.75C11.6558 10.75 11.3604 10.8713 11.1163 11.1138C10.8721 11.3563 10.75 11.6508 10.75 11.9975C10.75 12.3442 10.8713 12.6396 11.1138 12.8837C11.3563 13.1279 11.6508 13.25 11.9975 13.25ZM18.2475 13.25C18.5942 13.25 18.8896 13.1287 19.1338 12.8862C19.3779 12.6437 19.5 12.3492 19.5 12.0025C19.5 11.6558 19.3787 11.3604 19.1362 11.1163C18.8937 10.8721 18.5992 10.75 18.2525 10.75C17.9058 10.75 17.6104 10.8713 17.3662 11.1138C17.1221 11.3563 17 11.6508 17 11.9975C17 12.3442 17.1213 12.6396 17.3638 12.8837C17.6063 13.1279 17.9008 13.25 18.2475 13.25ZM12.0037 23.25C10.4488 23.25 8.98625 22.955 7.61625 22.365C6.24708 21.7742 5.05583 20.9725 4.0425 19.96C3.02917 18.9475 2.22708 17.7575 1.63625 16.39C1.04542 15.0225 0.75 13.5604 0.75 12.0037C0.75 10.4471 1.04542 8.98458 1.63625 7.61625C2.22625 6.24708 3.02667 5.05583 4.0375 4.0425C5.04833 3.02917 6.23875 2.22708 7.60875 1.63625C8.97875 1.04542 10.4412 0.75 11.9963 0.75C13.5512 0.75 15.0138 1.04542 16.3837 1.63625C17.7529 2.22625 18.9442 3.02708 19.9575 4.03875C20.9708 5.05042 21.7729 6.24083 22.3638 7.61C22.9546 8.97917 23.25 10.4412 23.25 11.9963C23.25 13.5512 22.955 15.0138 22.365 16.3837C21.775 17.7537 20.9733 18.945 19.96 19.9575C18.9467 20.97 17.7567 21.7721 16.39 22.3638C15.0233 22.9554 13.5613 23.2508 12.0037 23.25ZM12 22C14.7917 22 17.1562 21.0312 19.0938 19.0938C21.0312 17.1562 22 14.7917 22 12C22 9.20833 21.0312 6.84375 19.0938 4.90625C17.1562 2.96875 14.7917 2 12 2C9.20833 2 6.84375 2.96875 4.90625 4.90625C2.96875 6.84375 2 9.20833 2 12C2 14.7917 2.96875 17.1562 4.90625 19.0938C6.84375 21.0312 9.20833 22 12 22Z" fill="#EFF6F8"/>
                                            </svg>
                                        </div>
                                        <h2 className='md:text-[24px] text-lg font-semibold md:w-fit w-[225px]'>Buggy ViTe Landing Page</h2>
                                        <div className="flex gap-2 items-center mt-2">
                                            <Image className='rounded-full' src="/images/Historical.png" width={22} height={22} alt='hist' />
                                            <small className='md:text-[14px] text-xs font-normal'>5days,4hours,15 minutes</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-[#796FAB] text-[#EFF6F8] w-full shadow-xl rounded-[10px]">
                                    <div className="card-body gap-0 px-5 py-3">
                                        <div className="card-actions justify-end">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.7475 13.25C6.09417 13.25 6.38958 13.1287 6.63375 12.8862C6.87792 12.6437 7 12.3492 7 12.0025C7 11.6558 6.87875 11.3604 6.63625 11.1163C6.39375 10.8721 6.09917 10.75 5.7525 10.75C5.40583 10.75 5.11042 10.8713 4.86625 11.1138C4.62208 11.3563 4.5 11.6508 4.5 11.9975C4.5 12.3442 4.62125 12.6396 4.86375 12.8837C5.10625 13.1279 5.40083 13.25 5.7475 13.25ZM11.9975 13.25C12.3442 13.25 12.6396 13.1287 12.8837 12.8862C13.1279 12.6437 13.25 12.3492 13.25 12.0025C13.25 11.6558 13.1287 11.3604 12.8862 11.1163C12.6437 10.8721 12.3492 10.75 12.0025 10.75C11.6558 10.75 11.3604 10.8713 11.1163 11.1138C10.8721 11.3563 10.75 11.6508 10.75 11.9975C10.75 12.3442 10.8713 12.6396 11.1138 12.8837C11.3563 13.1279 11.6508 13.25 11.9975 13.25ZM18.2475 13.25C18.5942 13.25 18.8896 13.1287 19.1338 12.8862C19.3779 12.6437 19.5 12.3492 19.5 12.0025C19.5 11.6558 19.3787 11.3604 19.1362 11.1163C18.8937 10.8721 18.5992 10.75 18.2525 10.75C17.9058 10.75 17.6104 10.8713 17.3662 11.1138C17.1221 11.3563 17 11.6508 17 11.9975C17 12.3442 17.1213 12.6396 17.3638 12.8837C17.6063 13.1279 17.9008 13.25 18.2475 13.25ZM12.0037 23.25C10.4488 23.25 8.98625 22.955 7.61625 22.365C6.24708 21.7742 5.05583 20.9725 4.0425 19.96C3.02917 18.9475 2.22708 17.7575 1.63625 16.39C1.04542 15.0225 0.75 13.5604 0.75 12.0037C0.75 10.4471 1.04542 8.98458 1.63625 7.61625C2.22625 6.24708 3.02667 5.05583 4.0375 4.0425C5.04833 3.02917 6.23875 2.22708 7.60875 1.63625C8.97875 1.04542 10.4412 0.75 11.9963 0.75C13.5512 0.75 15.0138 1.04542 16.3837 1.63625C17.7529 2.22625 18.9442 3.02708 19.9575 4.03875C20.9708 5.05042 21.7729 6.24083 22.3638 7.61C22.9546 8.97917 23.25 10.4412 23.25 11.9963C23.25 13.5512 22.955 15.0138 22.365 16.3837C21.775 17.7537 20.9733 18.945 19.96 19.9575C18.9467 20.97 17.7567 21.7721 16.39 22.3638C15.0233 22.9554 13.5613 23.2508 12.0037 23.25ZM12 22C14.7917 22 17.1562 21.0312 19.0938 19.0938C21.0312 17.1562 22 14.7917 22 12C22 9.20833 21.0312 6.84375 19.0938 4.90625C17.1562 2.96875 14.7917 2 12 2C9.20833 2 6.84375 2.96875 4.90625 4.90625C2.96875 6.84375 2 9.20833 2 12C2 14.7917 2.96875 17.1562 4.90625 19.0938C6.84375 21.0312 9.20833 22 12 22Z" fill="#EFF6F8"/>
                                            </svg>
                                        </div>
                                        <h2 className='md:text-[24px] text-lg font-semibold md:w-fit w-[225px]'>Buggy ViTe Landing Page</h2>
                                        <div className="flex gap-2 items-center mt-2">
                                            <Image className='rounded-full' src="/images/Historical.png" width={22} height={22} alt='hist' />
                                            <small className='md:text-[14px] text-xs font-normal'>5days,4hours,15 minutes</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-[#796FAB] text-[#EFF6F8] w-full shadow-xl rounded-[10px]">
                                    <div className="card-body gap-0 px-5 py-3">
                                        <div className="card-actions justify-end">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.7475 13.25C6.09417 13.25 6.38958 13.1287 6.63375 12.8862C6.87792 12.6437 7 12.3492 7 12.0025C7 11.6558 6.87875 11.3604 6.63625 11.1163C6.39375 10.8721 6.09917 10.75 5.7525 10.75C5.40583 10.75 5.11042 10.8713 4.86625 11.1138C4.62208 11.3563 4.5 11.6508 4.5 11.9975C4.5 12.3442 4.62125 12.6396 4.86375 12.8837C5.10625 13.1279 5.40083 13.25 5.7475 13.25ZM11.9975 13.25C12.3442 13.25 12.6396 13.1287 12.8837 12.8862C13.1279 12.6437 13.25 12.3492 13.25 12.0025C13.25 11.6558 13.1287 11.3604 12.8862 11.1163C12.6437 10.8721 12.3492 10.75 12.0025 10.75C11.6558 10.75 11.3604 10.8713 11.1163 11.1138C10.8721 11.3563 10.75 11.6508 10.75 11.9975C10.75 12.3442 10.8713 12.6396 11.1138 12.8837C11.3563 13.1279 11.6508 13.25 11.9975 13.25ZM18.2475 13.25C18.5942 13.25 18.8896 13.1287 19.1338 12.8862C19.3779 12.6437 19.5 12.3492 19.5 12.0025C19.5 11.6558 19.3787 11.3604 19.1362 11.1163C18.8937 10.8721 18.5992 10.75 18.2525 10.75C17.9058 10.75 17.6104 10.8713 17.3662 11.1138C17.1221 11.3563 17 11.6508 17 11.9975C17 12.3442 17.1213 12.6396 17.3638 12.8837C17.6063 13.1279 17.9008 13.25 18.2475 13.25ZM12.0037 23.25C10.4488 23.25 8.98625 22.955 7.61625 22.365C6.24708 21.7742 5.05583 20.9725 4.0425 19.96C3.02917 18.9475 2.22708 17.7575 1.63625 16.39C1.04542 15.0225 0.75 13.5604 0.75 12.0037C0.75 10.4471 1.04542 8.98458 1.63625 7.61625C2.22625 6.24708 3.02667 5.05583 4.0375 4.0425C5.04833 3.02917 6.23875 2.22708 7.60875 1.63625C8.97875 1.04542 10.4412 0.75 11.9963 0.75C13.5512 0.75 15.0138 1.04542 16.3837 1.63625C17.7529 2.22625 18.9442 3.02708 19.9575 4.03875C20.9708 5.05042 21.7729 6.24083 22.3638 7.61C22.9546 8.97917 23.25 10.4412 23.25 11.9963C23.25 13.5512 22.955 15.0138 22.365 16.3837C21.775 17.7537 20.9733 18.945 19.96 19.9575C18.9467 20.97 17.7567 21.7721 16.39 22.3638C15.0233 22.9554 13.5613 23.2508 12.0037 23.25ZM12 22C14.7917 22 17.1562 21.0312 19.0938 19.0938C21.0312 17.1562 22 14.7917 22 12C22 9.20833 21.0312 6.84375 19.0938 4.90625C17.1562 2.96875 14.7917 2 12 2C9.20833 2 6.84375 2.96875 4.90625 4.90625C2.96875 6.84375 2 9.20833 2 12C2 14.7917 2.96875 17.1562 4.90625 19.0938C6.84375 21.0312 9.20833 22 12 22Z" fill="#EFF6F8"/>
                                            </svg>
                                        </div>
                                        <h2 className='md:text-[24px] text-lg font-semibold md:w-fit w-[225px]'>Buggy ViTe Landing Page</h2>
                                        <div className="flex gap-2 items-center mt-2">
                                            <Image className='rounded-full' src="/images/Historical.png" width={22} height={22} alt='hist' />
                                            <small className='md:text-[14px] text-xs font-normal'>5days,4hours,15 minutes</small>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="projects md:col-span-3 bg-white rounded-[10px] flex flex-col justify-between md:p-8 p-5 md:gap-5 gap-1">
                            <h4 className='text-xl font-bold'>Projects</h4>
                            <div className="grid grid-cols-3 md:gap-3 gap-2 text-white md:text-left text-center">
                                <div className="flex flex-col bg-[#796FAB] md:p-3 p-2 rounded-[10px]">
                                    <label className='md:text-[16px] text-sm font-normal'>All Projects</label>
                                    <h1 className='font-semibold md:text-[50px] text-4xl leading-[50px]'>10</h1>
                                </div>
                                <div className="flex flex-col bg-[#E5AA2D] md:p-3 p-2 rounded-[10px]">
                                    <label className='md:text-[16px] text-sm font-normal'>Completed</label>
                                    <h1 className='font-semibold md:text-[50px] text-4xl leading-[50px]'>05</h1>
                                </div>
                                <div className="flex flex-col bg-[#E487BC] md:p-3 p-2 rounded-[10px]">
                                    <label className='md:text-[16px] text-sm font-normal'>Pending</label>
                                    <h1 className='font-semibold md:text-[50px] text-4xl leading-[50px]'>05</h1>
                                </div>
                            </div>
                            <div className="w-full h-[150px] overflow-y-scroll overflow-x-auto">
                                <table className="table table-sm table-pin-rows">
                                    <thead>
                                        <tr className='bg-[#fff] font-bold text-[15px] text-[#796fabc4]'>
                                            <td>Project name</td>
                                            <td>Task</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-transparent font-normal text-sm text-black'>
                                        <tr>
                                            <td>Perfume App</td>
                                            <td>MathyrBite</td>
                                            <td className='flex gap-1 items-center'>
                                                <div className="badge badge-warning badge-xs"></div>
                                                Pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Perfume App</td>
                                            <td>MathyrBite</td>
                                            <td className='flex gap-1 items-center'>
                                                <div className="badge badge-warning badge-xs"></div>
                                                Pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Perfume App</td>
                                            <td>MathyrBite</td>
                                            <td className='flex gap-1 items-center'>
                                                <div className="badge badge-warning badge-xs"></div>
                                                Pending
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Perfume App</td>
                                            <td>MathyrBite</td>
                                            <td className='flex gap-1 items-center'>
                                                <div className="badge badge-success badge-xs"></div>
                                                Completed
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Perfume App</td>
                                            <td>MathyrBite</td>
                                            <td className='flex gap-1 items-center'>
                                                <div className="badge badge-error badge-xs"></div>
                                                Canceled
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
