'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const bottomItems = [
    
    { name: "Dashboard", path: "/pages/dashboard", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 8.25C14.1458 8.25 13.8492 8.13 13.61 7.89C13.3708 7.65 13.2508 7.35333 13.25 7V2C13.25 1.64583 13.37 1.34917 13.61 1.11C13.85 0.870833 14.1467 0.750833 14.5 0.75H22C22.3542 0.75 22.6512 0.87 22.8912 1.11C23.1312 1.35 23.2508 1.64667 23.25 2V7C23.25 7.35417 23.13 7.65125 22.89 7.89125C22.65 8.13125 22.3533 8.25083 22 8.25H14.5ZM2 13.25C1.64583 13.25 1.34917 13.13 1.11 12.89C0.870833 12.65 0.750833 12.3533 0.75 12V2C0.75 1.64583 0.87 1.34917 1.11 1.11C1.35 0.870833 1.64667 0.750833 2 0.75H9.5C9.85417 0.75 10.1513 0.87 10.3913 1.11C10.6313 1.35 10.7508 1.64667 10.75 2V12C10.75 12.3542 10.63 12.6513 10.39 12.8913C10.15 13.1313 9.85333 13.2508 9.5 13.25H2ZM14.5 23.25C14.1458 23.25 13.8492 23.13 13.61 22.89C13.3708 22.65 13.2508 22.3533 13.25 22V12C13.25 11.6458 13.37 11.3492 13.61 11.11C13.85 10.8708 14.1467 10.7508 14.5 10.75H22C22.3542 10.75 22.6512 10.87 22.8912 11.11C23.1312 11.35 23.2508 11.6467 23.25 12V22C23.25 22.3542 23.13 22.6512 22.89 22.8912C22.65 23.1312 22.3533 23.2508 22 23.25H14.5ZM2 23.25C1.64583 23.25 1.34917 23.13 1.11 22.89C0.870833 22.65 0.750833 22.3533 0.75 22V17C0.75 16.6458 0.87 16.3492 1.11 16.11C1.35 15.8708 1.64667 15.7508 2 15.75H9.5C9.85417 15.75 10.1513 15.87 10.3913 16.11C10.6313 16.35 10.7508 16.6467 10.75 17V22C10.75 22.3542 10.63 22.6512 10.39 22.8912C10.15 23.1312 9.85333 23.2508 9.5 23.25H2Z" fill="#796FAB" />
    </svg> },
    { name: "My Saved", path: "/pages/saved", svg: <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.75 10.725C22.3625 6.75002 20.0125 0.5 12.7501 0.5C5.48753 0.5 3.13751 6.75002 2.75003 10.725C1.39066 11.2409 0.493995 12.5461 0.50003 14V15.75C0.50003 17.683 2.06706 19.25 4.00001 19.25C5.93302 19.25 7.50005 17.683 7.50005 15.75V14C7.49372 12.5774 6.63005 11.2991 5.31251 10.7625C5.56253 8.46248 6.78755 3.00002 12.7501 3.00002C18.7126 3.00002 19.925 8.46248 20.1751 10.7625C18.8602 11.3003 18.0009 12.5795 18.0001 14V15.75C18.0027 16.4086 18.1905 17.0532 18.5419 17.6101C18.8934 18.1671 19.3943 18.6141 19.9876 18.9C19.4626 19.8875 18.125 21.225 14.8375 21.625C14.1804 20.6271 12.909 20.2337 11.8031 20.6861C10.6972 21.1385 10.066 22.3102 10.2966 23.4825C10.5272 24.6549 11.5552 25.5 12.7501 25.5C13.213 25.4974 13.6662 25.3663 14.059 25.1214C14.4519 24.8764 14.769 24.5271 14.975 24.1125C20.3375 23.5 22.0501 20.7375 22.5875 19.1125C24.0417 18.6414 25.0196 17.2784 25 15.75V14C25.006 12.5461 24.1094 11.2409 22.75 10.725ZM5.00003 15.75C5.00003 16.3023 4.55232 16.75 4.00001 16.75C3.44771 16.75 3.00005 16.3023 3.00005 15.75V14C2.99904 13.868 3.02416 13.7372 3.07396 13.615C3.12376 13.4928 3.19726 13.3816 3.29022 13.2879C3.38318 13.1943 3.49376 13.1199 3.61558 13.0692C3.73741 13.0184 3.86807 12.9923 4.00004 12.9923C4.13201 12.9923 4.26267 13.0184 4.3845 13.0692C4.50632 13.1199 4.6169 13.1943 4.70986 13.2879C4.80282 13.3816 4.87632 13.4928 4.92612 13.615C4.97592 13.7372 5.00104 13.868 5.00003 14V15.75ZM20.5 14C20.5 13.4477 20.9477 13 21.5 13C22.0523 13 22.5001 13.4477 22.5001 14V15.75C22.5001 16.3023 22.0523 16.75 21.5 16.75C20.9477 16.75 20.5 16.3023 20.5 15.75V14Z" fill="#796FAB"/>
    </svg> },
    { name: "Marketplace", path: "/pages/marketplace", svg: <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.75 0.375C4.54705 0.375007 4.3481 0.431482 4.17541 0.538108C4.00272 0.644733 3.86311 0.797303 3.77219 0.97875L0.490937 7.54125C0.414709 7.69334 0.375011 7.86112 0.375 8.03125V12.4062C0.375 12.6963 0.490234 12.9745 0.695352 13.1796C0.90047 13.3848 1.17867 13.5 1.46875 13.5H2.5625V25.5312C2.5625 25.8213 2.67773 26.0995 2.88285 26.3046C3.08797 26.5098 3.36617 26.625 3.65625 26.625H23.3438C23.6338 26.625 23.912 26.5098 24.1171 26.3046C24.3223 26.0995 24.4375 25.8213 24.4375 25.5312V13.5H25.5312C25.8213 13.5 26.0995 13.3848 26.3046 13.1796C26.5098 12.9745 26.625 12.6963 26.625 12.4062V8.03125C26.625 7.86112 26.5853 7.69334 26.5091 7.54125L23.2278 0.97875C23.1369 0.797303 22.9973 0.644733 22.8246 0.538108C22.6519 0.431482 22.453 0.375007 22.25 0.375H4.75ZM24.4375 8.28938V11.3125H20.0625V9.125H17.875V11.3125H14.5938V9.125H12.4062V11.3125H9.125V9.125H6.9375V11.3125H2.5625V8.28938L5.42594 2.5625H21.5741L24.4375 8.28938ZM10.2188 17.875H12.4062V15.6875H10.2188V17.875ZM14.5938 17.875H16.7812V15.6875H14.5938V17.875ZM12.4062 21.1562H10.2188V18.9688H12.4062V21.1562ZM14.5938 21.1562H16.7812V18.9688H14.5938V21.1562Z" fill="#796FAB"/>
    </svg> },
    { name: "Support", path: "/pages/support", svg: <svg width="20" height="20" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 4.75C1.5 3.35 1.5 2.65 1.7725 2.115C2.01218 1.64462 2.39462 1.26218 2.865 1.0225C3.4 0.75 4.1 0.75 5.5 0.75H12.5C13.9 0.75 14.6 0.75 15.135 1.0225C15.6054 1.26218 15.9878 1.64462 16.2275 2.115C16.5 2.65 16.5 3.35 16.5 4.75V21.3812C16.5 21.9887 16.5 22.2925 16.3738 22.4588C16.3192 22.5311 16.2496 22.5906 16.1697 22.6334C16.0899 22.6761 16.0017 22.701 15.9112 22.7063C15.7025 22.7188 15.45 22.55 14.945 22.2137L9 18.25L3.055 22.2125C2.55 22.55 2.2975 22.7188 2.0875 22.7063C1.99729 22.7008 1.90935 22.6758 1.82972 22.6331C1.75009 22.5904 1.68067 22.5309 1.62625 22.4588C1.5 22.2925 1.5 21.9887 1.5 21.3812V4.75Z" fill="#796FAB" stroke="#796FAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> },
    { name: "About", path: "/pages/about", svg: <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.75 9.25H14.25V6.75H11.75M13 23C7.4875 23 3 18.5125 3 13C3 7.4875 7.4875 3 13 3C18.5125 3 23 7.4875 23 13C23 18.5125 18.5125 23 13 23ZM13 0.5C11.3585 0.5 9.73303 0.823322 8.21646 1.45151C6.69989 2.07969 5.3219 3.00043 4.16117 4.16117C1.81696 6.50537 0.5 9.68479 0.5 13C0.5 16.3152 1.81696 19.4946 4.16117 21.8388C5.3219 22.9996 6.69989 23.9203 8.21646 24.5485C9.73303 25.1767 11.3585 25.5 13 25.5C16.3152 25.5 19.4946 24.183 21.8388 21.8388C24.183 19.4946 25.5 16.3152 25.5 13C25.5 11.3585 25.1767 9.73303 24.5485 8.21646C23.9203 6.69989 22.9996 5.3219 21.8388 4.16117C20.6781 3.00043 19.3001 2.07969 17.7835 1.45151C16.267 0.823322 14.6415 0.5 13 0.5ZM11.75 19.25H14.25V11.75H11.75V19.25Z" fill="#796FAB"/>
    </svg> },
];
const BottomBar = () => {
    const pathname = usePathname();
  return (
    <div className='z-[100] fixed bottom-0 left-0 px-5 lg:hidden flex items-center justify-between w-full bg-[#EFF6F8] shadow-2xl shadow-[#796FAB] drop-shadow-2xl h-[60px]'>
        {bottomItems.map((item) => (
            <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center text-[10px] text-white font-medium gap-1 w-[60px] h-[60px] justify-center rounded-full ${
                pathname === item.path
                    ? "bottom-active"
                    : ""
                }`}
            >
                {item.svg}
                <small className={`hidden &{
                    pathname === item.path
                    ? "block"
                    : "hidden"
                }`}>{item.name}</small>
            </Link>
        ))}
        {/* <Link href="dashboard" className="flex flex-col items-center text-[10px] text-white font-medium gap-1 w-[60px] h-[60px] justify-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 8.25C14.1458 8.25 13.8492 8.13 13.61 7.89C13.3708 7.65 13.2508 7.35333 13.25 7V2C13.25 1.64583 13.37 1.34917 13.61 1.11C13.85 0.870833 14.1467 0.750833 14.5 0.75H22C22.3542 0.75 22.6512 0.87 22.8912 1.11C23.1312 1.35 23.2508 1.64667 23.25 2V7C23.25 7.35417 23.13 7.65125 22.89 7.89125C22.65 8.13125 22.3533 8.25083 22 8.25H14.5ZM2 13.25C1.64583 13.25 1.34917 13.13 1.11 12.89C0.870833 12.65 0.750833 12.3533 0.75 12V2C0.75 1.64583 0.87 1.34917 1.11 1.11C1.35 0.870833 1.64667 0.750833 2 0.75H9.5C9.85417 0.75 10.1513 0.87 10.3913 1.11C10.6313 1.35 10.7508 1.64667 10.75 2V12C10.75 12.3542 10.63 12.6513 10.39 12.8913C10.15 13.1313 9.85333 13.2508 9.5 13.25H2ZM14.5 23.25C14.1458 23.25 13.8492 23.13 13.61 22.89C13.3708 22.65 13.2508 22.3533 13.25 22V12C13.25 11.6458 13.37 11.3492 13.61 11.11C13.85 10.8708 14.1467 10.7508 14.5 10.75H22C22.3542 10.75 22.6512 10.87 22.8912 11.11C23.1312 11.35 23.2508 11.6467 23.25 12V22C23.25 22.3542 23.13 22.6512 22.89 22.8912C22.65 23.1312 22.3533 23.2508 22 23.25H14.5ZM2 23.25C1.64583 23.25 1.34917 23.13 1.11 22.89C0.870833 22.65 0.750833 22.3533 0.75 22V17C0.75 16.6458 0.87 16.3492 1.11 16.11C1.35 15.8708 1.64667 15.7508 2 15.75H9.5C9.85417 15.75 10.1513 15.87 10.3913 16.11C10.6313 16.35 10.7508 16.6467 10.75 17V22C10.75 22.3542 10.63 22.6512 10.39 22.8912C10.15 23.1312 9.85333 23.2508 9.5 23.25H2Z" stroke='#796FAB' />
            </svg>
            <small className='hidden'>Dashboard</small>
        </Link>
        <Link href="saved" className="flex flex-col items-center text-[10px] text-white font-medium gap-1 w-[60px] h-[60px] justify-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.75 10.725C22.3625 6.75002 20.0125 0.5 12.7501 0.5C5.48753 0.5 3.13751 6.75002 2.75003 10.725C1.39066 11.2409 0.493995 12.5461 0.50003 14V15.75C0.50003 17.683 2.06706 19.25 4.00001 19.25C5.93302 19.25 7.50005 17.683 7.50005 15.75V14C7.49372 12.5774 6.63005 11.2991 5.31251 10.7625C5.56253 8.46248 6.78755 3.00002 12.7501 3.00002C18.7126 3.00002 19.925 8.46248 20.1751 10.7625C18.8602 11.3003 18.0009 12.5795 18.0001 14V15.75C18.0027 16.4086 18.1905 17.0532 18.5419 17.6101C18.8934 18.1671 19.3943 18.6141 19.9876 18.9C19.4626 19.8875 18.125 21.225 14.8375 21.625C14.1804 20.6271 12.909 20.2337 11.8031 20.6861C10.6972 21.1385 10.066 22.3102 10.2966 23.4825C10.5272 24.6549 11.5552 25.5 12.7501 25.5C13.213 25.4974 13.6662 25.3663 14.059 25.1214C14.4519 24.8764 14.769 24.5271 14.975 24.1125C20.3375 23.5 22.0501 20.7375 22.5875 19.1125C24.0417 18.6414 25.0196 17.2784 25 15.75V14C25.006 12.5461 24.1094 11.2409 22.75 10.725ZM5.00003 15.75C5.00003 16.3023 4.55232 16.75 4.00001 16.75C3.44771 16.75 3.00005 16.3023 3.00005 15.75V14C2.99904 13.868 3.02416 13.7372 3.07396 13.615C3.12376 13.4928 3.19726 13.3816 3.29022 13.2879C3.38318 13.1943 3.49376 13.1199 3.61558 13.0692C3.73741 13.0184 3.86807 12.9923 4.00004 12.9923C4.13201 12.9923 4.26267 13.0184 4.3845 13.0692C4.50632 13.1199 4.6169 13.1943 4.70986 13.2879C4.80282 13.3816 4.87632 13.4928 4.92612 13.615C4.97592 13.7372 5.00104 13.868 5.00003 14V15.75ZM20.5 14C20.5 13.4477 20.9477 13 21.5 13C22.0523 13 22.5001 13.4477 22.5001 14V15.75C22.5001 16.3023 22.0523 16.75 21.5 16.75C20.9477 16.75 20.5 16.3023 20.5 15.75V14Z" stroke='#796FAB'/>
            </svg>
            <small className='hidden'>My Saved</small>
        </Link>
        <Link href="marketplace" className="bottom-active flex flex-col items-center text-[10px] text-white font-medium gap-1 w-[60px] h-[60px] justify-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.75 0.375C4.54705 0.375007 4.3481 0.431482 4.17541 0.538108C4.00272 0.644733 3.86311 0.797303 3.77219 0.97875L0.490937 7.54125C0.414709 7.69334 0.375011 7.86112 0.375 8.03125V12.4062C0.375 12.6963 0.490234 12.9745 0.695352 13.1796C0.90047 13.3848 1.17867 13.5 1.46875 13.5H2.5625V25.5312C2.5625 25.8213 2.67773 26.0995 2.88285 26.3046C3.08797 26.5098 3.36617 26.625 3.65625 26.625H23.3438C23.6338 26.625 23.912 26.5098 24.1171 26.3046C24.3223 26.0995 24.4375 25.8213 24.4375 25.5312V13.5H25.5312C25.8213 13.5 26.0995 13.3848 26.3046 13.1796C26.5098 12.9745 26.625 12.6963 26.625 12.4062V8.03125C26.625 7.86112 26.5853 7.69334 26.5091 7.54125L23.2278 0.97875C23.1369 0.797303 22.9973 0.644733 22.8246 0.538108C22.6519 0.431482 22.453 0.375007 22.25 0.375H4.75ZM24.4375 8.28938V11.3125H20.0625V9.125H17.875V11.3125H14.5938V9.125H12.4062V11.3125H9.125V9.125H6.9375V11.3125H2.5625V8.28938L5.42594 2.5625H21.5741L24.4375 8.28938ZM10.2188 17.875H12.4062V15.6875H10.2188V17.875ZM14.5938 17.875H16.7812V15.6875H14.5938V17.875ZM12.4062 21.1562H10.2188V18.9688H12.4062V21.1562ZM14.5938 21.1562H16.7812V18.9688H14.5938V21.1562Z" stroke='#796FAB'/>
            </svg>
            <small className='hidden'>Marketplace</small>
        </Link>
        <Link href="support" className="flex flex-col items-center text-[10px] text-white font-medium gap-1 w-[60px] h-[60px] justify-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 4.75C1.5 3.35 1.5 2.65 1.7725 2.115C2.01218 1.64462 2.39462 1.26218 2.865 1.0225C3.4 0.75 4.1 0.75 5.5 0.75H12.5C13.9 0.75 14.6 0.75 15.135 1.0225C15.6054 1.26218 15.9878 1.64462 16.2275 2.115C16.5 2.65 16.5 3.35 16.5 4.75V21.3812C16.5 21.9887 16.5 22.2925 16.3738 22.4588C16.3192 22.5311 16.2496 22.5906 16.1697 22.6334C16.0899 22.6761 16.0017 22.701 15.9112 22.7063C15.7025 22.7188 15.45 22.55 14.945 22.2137L9 18.25L3.055 22.2125C2.55 22.55 2.2975 22.7188 2.0875 22.7063C1.99729 22.7008 1.90935 22.6758 1.82972 22.6331C1.75009 22.5904 1.68067 22.5309 1.62625 22.4588C1.5 22.2925 1.5 21.9887 1.5 21.3812V4.75Z" stroke='#796FAB' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <small className='hidden'>Support</small>
        </Link>
        <Link href="about" className="flex flex-col items-center text-[10px] text-white font-medium gap-1 w-[60px] h-[60px] justify-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 9.25H14.25V6.75H11.75M13 23C7.4875 23 3 18.5125 3 13C3 7.4875 7.4875 3 13 3C18.5125 3 23 7.4875 23 13C23 18.5125 18.5125 23 13 23ZM13 0.5C11.3585 0.5 9.73303 0.823322 8.21646 1.45151C6.69989 2.07969 5.3219 3.00043 4.16117 4.16117C1.81696 6.50537 0.5 9.68479 0.5 13C0.5 16.3152 1.81696 19.4946 4.16117 21.8388C5.3219 22.9996 6.69989 23.9203 8.21646 24.5485C9.73303 25.1767 11.3585 25.5 13 25.5C16.3152 25.5 19.4946 24.183 21.8388 21.8388C24.183 19.4946 25.5 16.3152 25.5 13C25.5 11.3585 25.1767 9.73303 24.5485 8.21646C23.9203 6.69989 22.9996 5.3219 21.8388 4.16117C20.6781 3.00043 19.3001 2.07969 17.7835 1.45151C16.267 0.823322 14.6415 0.5 13 0.5ZM11.75 19.25H14.25V11.75H11.75V19.25Z" stroke='#796FAB'/>
            </svg>
            <small className='hidden'>About</small>
        </Link> */}
    </div>
  )
}

export default BottomBar
