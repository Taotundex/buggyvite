'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const sidebarItems1 = [
    { name: "Marketplace", path: "/pages/marketplace", svg: <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.75 0.375C4.54705 0.375007 4.3481 0.431482 4.17541 0.538108C4.00272 0.644733 3.86311 0.797303 3.77219 0.97875L0.490937 7.54125C0.414709 7.69334 0.375011 7.86112 0.375 8.03125V12.4062C0.375 12.6963 0.490234 12.9745 0.695352 13.1796C0.90047 13.3848 1.17867 13.5 1.46875 13.5H2.5625V25.5312C2.5625 25.8213 2.67773 26.0995 2.88285 26.3046C3.08797 26.5098 3.36617 26.625 3.65625 26.625H23.3438C23.6338 26.625 23.912 26.5098 24.1171 26.3046C24.3223 26.0995 24.4375 25.8213 24.4375 25.5312V13.5H25.5312C25.8213 13.5 26.0995 13.3848 26.3046 13.1796C26.5098 12.9745 26.625 12.6963 26.625 12.4062V8.03125C26.625 7.86112 26.5853 7.69334 26.5091 7.54125L23.2278 0.97875C23.1369 0.797303 22.9973 0.644733 22.8246 0.538108C22.6519 0.431482 22.453 0.375007 22.25 0.375H4.75ZM24.4375 8.28938V11.3125H20.0625V9.125H17.875V11.3125H14.5938V9.125H12.4062V11.3125H9.125V9.125H6.9375V11.3125H2.5625V8.28938L5.42594 2.5625H21.5741L24.4375 8.28938ZM10.2188 17.875H12.4062V15.6875H10.2188V17.875ZM14.5938 17.875H16.7812V15.6875H14.5938V17.875ZM12.4062 21.1562H10.2188V18.9688H12.4062V21.1562ZM14.5938 21.1562H16.7812V18.9688H14.5938V21.1562Z" fill="#EFF6F8"/>
    </svg> },
    { name: "Dashboard", path: "/pages/dashboard", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 8.25C14.1458 8.25 13.8492 8.13 13.61 7.89C13.3708 7.65 13.2508 7.35333 13.25 7V2C13.25 1.64583 13.37 1.34917 13.61 1.11C13.85 0.870833 14.1467 0.750833 14.5 0.75H22C22.3542 0.75 22.6512 0.87 22.8912 1.11C23.1312 1.35 23.2508 1.64667 23.25 2V7C23.25 7.35417 23.13 7.65125 22.89 7.89125C22.65 8.13125 22.3533 8.25083 22 8.25H14.5ZM2 13.25C1.64583 13.25 1.34917 13.13 1.11 12.89C0.870833 12.65 0.750833 12.3533 0.75 12V2C0.75 1.64583 0.87 1.34917 1.11 1.11C1.35 0.870833 1.64667 0.750833 2 0.75H9.5C9.85417 0.75 10.1513 0.87 10.3913 1.11C10.6313 1.35 10.7508 1.64667 10.75 2V12C10.75 12.3542 10.63 12.6513 10.39 12.8913C10.15 13.1313 9.85333 13.2508 9.5 13.25H2ZM14.5 23.25C14.1458 23.25 13.8492 23.13 13.61 22.89C13.3708 22.65 13.2508 22.3533 13.25 22V12C13.25 11.6458 13.37 11.3492 13.61 11.11C13.85 10.8708 14.1467 10.7508 14.5 10.75H22C22.3542 10.75 22.6512 10.87 22.8912 11.11C23.1312 11.35 23.2508 11.6467 23.25 12V22C23.25 22.3542 23.13 22.6512 22.89 22.8912C22.65 23.1312 22.3533 23.2508 22 23.25H14.5ZM2 23.25C1.64583 23.25 1.34917 23.13 1.11 22.89C0.870833 22.65 0.750833 22.3533 0.75 22V17C0.75 16.6458 0.87 16.3492 1.11 16.11C1.35 15.8708 1.64667 15.7508 2 15.75H9.5C9.85417 15.75 10.1513 15.87 10.3913 16.11C10.6313 16.35 10.7508 16.6467 10.75 17V22C10.75 22.3542 10.63 22.6512 10.39 22.8912C10.15 23.1312 9.85333 23.2508 9.5 23.25H2Z" fill="#EFF6F8" />
    </svg> },
    { name: "My Saved", path: "/pages/saved", svg: <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.75 10.725C22.3625 6.75002 20.0125 0.5 12.7501 0.5C5.48753 0.5 3.13751 6.75002 2.75003 10.725C1.39066 11.2409 0.493995 12.5461 0.50003 14V15.75C0.50003 17.683 2.06706 19.25 4.00001 19.25C5.93302 19.25 7.50005 17.683 7.50005 15.75V14C7.49372 12.5774 6.63005 11.2991 5.31251 10.7625C5.56253 8.46248 6.78755 3.00002 12.7501 3.00002C18.7126 3.00002 19.925 8.46248 20.1751 10.7625C18.8602 11.3003 18.0009 12.5795 18.0001 14V15.75C18.0027 16.4086 18.1905 17.0532 18.5419 17.6101C18.8934 18.1671 19.3943 18.6141 19.9876 18.9C19.4626 19.8875 18.125 21.225 14.8375 21.625C14.1804 20.6271 12.909 20.2337 11.8031 20.6861C10.6972 21.1385 10.066 22.3102 10.2966 23.4825C10.5272 24.6549 11.5552 25.5 12.7501 25.5C13.213 25.4974 13.6662 25.3663 14.059 25.1214C14.4519 24.8764 14.769 24.5271 14.975 24.1125C20.3375 23.5 22.0501 20.7375 22.5875 19.1125C24.0417 18.6414 25.0196 17.2784 25 15.75V14C25.006 12.5461 24.1094 11.2409 22.75 10.725ZM5.00003 15.75C5.00003 16.3023 4.55232 16.75 4.00001 16.75C3.44771 16.75 3.00005 16.3023 3.00005 15.75V14C2.99904 13.868 3.02416 13.7372 3.07396 13.615C3.12376 13.4928 3.19726 13.3816 3.29022 13.2879C3.38318 13.1943 3.49376 13.1199 3.61558 13.0692C3.73741 13.0184 3.86807 12.9923 4.00004 12.9923C4.13201 12.9923 4.26267 13.0184 4.3845 13.0692C4.50632 13.1199 4.6169 13.1943 4.70986 13.2879C4.80282 13.3816 4.87632 13.4928 4.92612 13.615C4.97592 13.7372 5.00104 13.868 5.00003 14V15.75ZM20.5 14C20.5 13.4477 20.9477 13 21.5 13C22.0523 13 22.5001 13.4477 22.5001 14V15.75C22.5001 16.3023 22.0523 16.75 21.5 16.75C20.9477 16.75 20.5 16.3023 20.5 15.75V14Z" fill="#EFF6F8"/>
    </svg> },
    { name: "Support", path: "/pages/support", svg: <svg width="20" height="20" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 4.75C1.5 3.35 1.5 2.65 1.7725 2.115C2.01218 1.64462 2.39462 1.26218 2.865 1.0225C3.4 0.75 4.1 0.75 5.5 0.75H12.5C13.9 0.75 14.6 0.75 15.135 1.0225C15.6054 1.26218 15.9878 1.64462 16.2275 2.115C16.5 2.65 16.5 3.35 16.5 4.75V21.3812C16.5 21.9887 16.5 22.2925 16.3738 22.4588C16.3192 22.5311 16.2496 22.5906 16.1697 22.6334C16.0899 22.6761 16.0017 22.701 15.9112 22.7063C15.7025 22.7188 15.45 22.55 14.945 22.2137L9 18.25L3.055 22.2125C2.55 22.55 2.2975 22.7188 2.0875 22.7063C1.99729 22.7008 1.90935 22.6758 1.82972 22.6331C1.75009 22.5904 1.68067 22.5309 1.62625 22.4588C1.5 22.2925 1.5 21.9887 1.5 21.3812V4.75Z" fill="#EFF6F8" stroke="#EFF6F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> },
];
const sidebarItems2 = [
    { name: "Settings", path: "/pages/settings", svg: <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2871 14.225C22.3371 13.825 22.3746 13.425 22.3746 13C22.3746 12.575 22.3371 12.175 22.2871 11.775L24.9246 9.71253C25.1621 9.52503 25.2246 9.18753 25.0746 8.91253L22.5746 4.58753C22.5009 4.45856 22.3837 4.36006 22.2439 4.30966C22.1042 4.25927 21.9511 4.26029 21.8121 4.31253L18.6996 5.56253C18.0496 5.06253 17.3496 4.65003 16.5871 4.33753L16.1121 1.02503C16.0909 0.878182 16.0171 0.744014 15.9044 0.647455C15.7918 0.550897 15.6479 0.498512 15.4996 0.500032H10.4996C10.1871 0.500032 9.92455 0.725032 9.88706 1.02503L9.41206 4.33753C8.64956 4.65003 7.94955 5.07503 7.29955 5.56253L4.18706 4.31253C4.11441 4.28863 4.03853 4.27599 3.96206 4.27503C3.74956 4.27503 3.53706 4.38753 3.42456 4.58753L0.924555 8.91253C0.762055 9.18753 0.837055 9.52503 1.07456 9.71253L3.71206 11.775C3.66206 12.175 3.62456 12.5875 3.62456 13C3.62456 13.4125 3.66206 13.825 3.71206 14.225L1.07456 16.2875C0.837055 16.475 0.774555 16.8125 0.924555 17.0875L3.42456 21.4125C3.49824 21.5415 3.61545 21.64 3.75518 21.6904C3.89491 21.7408 4.04801 21.7398 4.18706 21.6875L7.29955 20.4375C7.94955 20.9375 8.64956 21.35 9.41206 21.6625L9.88706 24.975C9.92455 25.275 10.1871 25.5 10.4996 25.5H15.4996C15.8121 25.5 16.0746 25.275 16.1121 24.975L16.5871 21.6625C17.3496 21.35 18.0496 20.925 18.6996 20.4375L21.8121 21.6875C21.8871 21.7125 21.9621 21.725 22.0371 21.725C22.2496 21.725 22.4621 21.6125 22.5746 21.4125L25.0746 17.0875C25.2246 16.8125 25.1621 16.475 24.9246 16.2875L22.2871 14.225ZM19.8121 12.0875C19.8621 12.475 19.8746 12.7375 19.8746 13C19.8746 13.2625 19.8496 13.5375 19.8121 13.9125L19.6371 15.325L20.7496 16.2L22.0996 17.25L21.2246 18.7625L19.6371 18.125L18.3371 17.6L17.2121 18.45C16.6746 18.85 16.1621 19.15 15.6496 19.3625L14.3246 19.9L14.1246 21.3125L13.8746 23H12.1246L11.8871 21.3125L11.6871 19.9L10.3621 19.3625C9.82456 19.1375 9.32455 18.85 8.82455 18.475L7.68706 17.6L6.36205 18.1375L4.77456 18.775L3.89955 17.2625L5.24956 16.2125L6.36205 15.3375L6.18706 13.925C6.14956 13.5375 6.12456 13.25 6.12456 13C6.12456 12.75 6.14956 12.4625 6.18706 12.0875L6.36205 10.675L5.24956 9.80003L3.89955 8.75003L4.77456 7.23753L6.36205 7.87503L7.66206 8.40003L8.78706 7.55003C9.32456 7.15003 9.83706 6.85003 10.3496 6.63753L11.6746 6.10003L11.8746 4.68753L12.1246 3.00003H13.8621L14.0996 4.68753L14.2996 6.10003L15.6246 6.63753C16.1621 6.86253 16.6621 7.15003 17.1621 7.52503L18.2996 8.40003L19.6246 7.86253L21.2121 7.22503L22.0871 8.73753L20.7496 9.80003L19.6371 10.675L19.8121 12.0875ZM12.9996 8.00003C10.2371 8.00003 7.99956 10.2375 7.99956 13C7.99956 15.7625 10.2371 18 12.9996 18C15.7621 18 17.9996 15.7625 17.9996 13C17.9996 10.2375 15.7621 8.00003 12.9996 8.00003ZM12.9996 15.5C11.6246 15.5 10.4996 14.375 10.4996 13C10.4996 11.625 11.6246 10.5 12.9996 10.5C14.3746 10.5 15.4996 11.625 15.4996 13C15.4996 14.375 14.3746 15.5 12.9996 15.5Z" fill="#EFF6F8"/>
    </svg> },
    { name: "About", path: "/pages/about", svg: <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.75 9.25H14.25V6.75H11.75M13 23C7.4875 23 3 18.5125 3 13C3 7.4875 7.4875 3 13 3C18.5125 3 23 7.4875 23 13C23 18.5125 18.5125 23 13 23ZM13 0.5C11.3585 0.5 9.73303 0.823322 8.21646 1.45151C6.69989 2.07969 5.3219 3.00043 4.16117 4.16117C1.81696 6.50537 0.5 9.68479 0.5 13C0.5 16.3152 1.81696 19.4946 4.16117 21.8388C5.3219 22.9996 6.69989 23.9203 8.21646 24.5485C9.73303 25.1767 11.3585 25.5 13 25.5C16.3152 25.5 19.4946 24.183 21.8388 21.8388C24.183 19.4946 25.5 16.3152 25.5 13C25.5 11.3585 25.1767 9.73303 24.5485 8.21646C23.9203 6.69989 22.9996 5.3219 21.8388 4.16117C20.6781 3.00043 19.3001 2.07969 17.7835 1.45151C16.267 0.823322 14.6415 0.5 13 0.5ZM11.75 19.25H14.25V11.75H11.75V19.25Z" fill="#EFF6F8"/>
    </svg> },
    { name: "Logout", path: "/pages/logout", svg: <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4.0625C15.2486 4.0625 15.4871 4.16127 15.6629 4.33709C15.8387 4.5129 15.9375 4.75136 15.9375 5C15.9375 5.24864 15.8387 5.4871 15.6629 5.66291C15.4871 5.83873 15.2486 5.9375 15 5.9375C12.5965 5.9375 10.2914 6.8923 8.59185 8.59185C6.8923 10.2914 5.9375 12.5965 5.9375 15C5.9375 17.4035 6.8923 19.7086 8.59185 21.4082C10.2914 23.1077 12.5965 24.0625 15 24.0625C15.2486 24.0625 15.4871 24.1613 15.6629 24.3371C15.8387 24.5129 15.9375 24.7514 15.9375 25C15.9375 25.2486 15.8387 25.4871 15.6629 25.6629C15.4871 25.8387 15.2486 25.9375 15 25.9375C12.0992 25.9375 9.3172 24.7852 7.26602 22.734C5.21484 20.6828 4.0625 17.9008 4.0625 15C4.0625 12.0992 5.21484 9.3172 7.26602 7.26602C9.3172 5.21484 12.0992 4.0625 15 4.0625Z" fill="#EFF6F8"/>
        <path d="M20.5875 11.9126C20.4219 11.7348 20.3317 11.4998 20.336 11.2569C20.3403 11.014 20.4387 10.7823 20.6105 10.6105C20.7822 10.4388 21.014 10.3404 21.2568 10.3361C21.4997 10.3318 21.7348 10.422 21.9125 10.5876L25.6625 14.3376C25.8381 14.5133 25.9367 14.7516 25.9367 15.0001C25.9367 15.2485 25.8381 15.4868 25.6625 15.6626L21.9125 19.4126C21.8267 19.5047 21.7232 19.5785 21.6082 19.6298C21.4932 19.681 21.369 19.7086 21.2432 19.7108C21.1173 19.713 20.9922 19.6899 20.8755 19.6427C20.7588 19.5956 20.6527 19.5254 20.5637 19.4364C20.4747 19.3473 20.4045 19.2413 20.3573 19.1246C20.3102 19.0078 20.287 18.8828 20.2893 18.7569C20.2915 18.631 20.319 18.5069 20.3703 18.3919C20.4215 18.2769 20.4954 18.1734 20.5875 18.0876L22.7375 15.9376H12.5C12.2514 15.9376 12.0129 15.8388 11.8371 15.663C11.6613 15.4872 11.5625 15.2487 11.5625 15.0001C11.5625 14.7514 11.6613 14.513 11.8371 14.3371C12.0129 14.1613 12.2514 14.0626 12.5 14.0626H22.7375L20.5875 11.9126Z" fill="#EFF6F8"/>
    </svg> },
];
const Sidebar = () => {
    const pathname = usePathname();
  return (
    <div className="sidebar col-span-1 bg-[#796FAB] py-[35px] lg:flex hidden flex-col justify-between">
        <div className="flex flex-col gap-[70px]">
            <Image className='mx-auto px-3' src="/images/BV 3 Logo 2.png" width={225} height={40} alt="logo 1" />
            <div className="flex flex-col gap-5 pl-5">
                {sidebarItems1.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center text-lg bg-transparent text-white font-semibold gap-3 h-[50px] w-full px-5 rounded-l-full ${
                        pathname == item.path
                            ? "active"
                            : ""
                        }`}
                    >
                        {item.svg}
                        {item.name}
                    </Link>
                ))}
                {/* <Link href="marketplace" className="flex items-center text-lg text-white font-semibold gap-3 h-[50px] w-full px-5 rounded-l-full">
                    <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.75 0.375C4.54705 0.375007 4.3481 0.431482 4.17541 0.538108C4.00272 0.644733 3.86311 0.797303 3.77219 0.97875L0.490937 7.54125C0.414709 7.69334 0.375011 7.86112 0.375 8.03125V12.4062C0.375 12.6963 0.490234 12.9745 0.695352 13.1796C0.90047 13.3848 1.17867 13.5 1.46875 13.5H2.5625V25.5312C2.5625 25.8213 2.67773 26.0995 2.88285 26.3046C3.08797 26.5098 3.36617 26.625 3.65625 26.625H23.3438C23.6338 26.625 23.912 26.5098 24.1171 26.3046C24.3223 26.0995 24.4375 25.8213 24.4375 25.5312V13.5H25.5312C25.8213 13.5 26.0995 13.3848 26.3046 13.1796C26.5098 12.9745 26.625 12.6963 26.625 12.4062V8.03125C26.625 7.86112 26.5853 7.69334 26.5091 7.54125L23.2278 0.97875C23.1369 0.797303 22.9973 0.644733 22.8246 0.538108C22.6519 0.431482 22.453 0.375007 22.25 0.375H4.75ZM24.4375 8.28938V11.3125H20.0625V9.125H17.875V11.3125H14.5938V9.125H12.4062V11.3125H9.125V9.125H6.9375V11.3125H2.5625V8.28938L5.42594 2.5625H21.5741L24.4375 8.28938ZM10.2188 17.875H12.4062V15.6875H10.2188V17.875ZM14.5938 17.875H16.7812V15.6875H14.5938V17.875ZM12.4062 21.1562H10.2188V18.9688H12.4062V21.1562ZM14.5938 21.1562H16.7812V18.9688H14.5938V21.1562Z" fill="#EFF6F8"/>
                    </svg>
                    Marketplace
                </Link>
                <Link href="dashboard" className="active flex items-center text-lg text-white font-semibold gap-3 h-[50px] w-full px-5 rounded-l-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 8.25C14.1458 8.25 13.8492 8.13 13.61 7.89C13.3708 7.65 13.2508 7.35333 13.25 7V2C13.25 1.64583 13.37 1.34917 13.61 1.11C13.85 0.870833 14.1467 0.750833 14.5 0.75H22C22.3542 0.75 22.6512 0.87 22.8912 1.11C23.1312 1.35 23.2508 1.64667 23.25 2V7C23.25 7.35417 23.13 7.65125 22.89 7.89125C22.65 8.13125 22.3533 8.25083 22 8.25H14.5ZM2 13.25C1.64583 13.25 1.34917 13.13 1.11 12.89C0.870833 12.65 0.750833 12.3533 0.75 12V2C0.75 1.64583 0.87 1.34917 1.11 1.11C1.35 0.870833 1.64667 0.750833 2 0.75H9.5C9.85417 0.75 10.1513 0.87 10.3913 1.11C10.6313 1.35 10.7508 1.64667 10.75 2V12C10.75 12.3542 10.63 12.6513 10.39 12.8913C10.15 13.1313 9.85333 13.2508 9.5 13.25H2ZM14.5 23.25C14.1458 23.25 13.8492 23.13 13.61 22.89C13.3708 22.65 13.2508 22.3533 13.25 22V12C13.25 11.6458 13.37 11.3492 13.61 11.11C13.85 10.8708 14.1467 10.7508 14.5 10.75H22C22.3542 10.75 22.6512 10.87 22.8912 11.11C23.1312 11.35 23.2508 11.6467 23.25 12V22C23.25 22.3542 23.13 22.6512 22.89 22.8912C22.65 23.1312 22.3533 23.2508 22 23.25H14.5ZM2 23.25C1.64583 23.25 1.34917 23.13 1.11 22.89C0.870833 22.65 0.750833 22.3533 0.75 22V17C0.75 16.6458 0.87 16.3492 1.11 16.11C1.35 15.8708 1.64667 15.7508 2 15.75H9.5C9.85417 15.75 10.1513 15.87 10.3913 16.11C10.6313 16.35 10.7508 16.6467 10.75 17V22C10.75 22.3542 10.63 22.6512 10.39 22.8912C10.15 23.1312 9.85333 23.2508 9.5 23.25H2Z" fill="#EFF6F8" />
                    </svg>
                    Dashboard
                </Link>
                <Link href="saved" className="flex items-center text-lg text-white font-semibold gap-3 h-[50px] w-full px-5 rounded-l-full">
                    <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.75 10.725C22.3625 6.75002 20.0125 0.5 12.7501 0.5C5.48753 0.5 3.13751 6.75002 2.75003 10.725C1.39066 11.2409 0.493995 12.5461 0.50003 14V15.75C0.50003 17.683 2.06706 19.25 4.00001 19.25C5.93302 19.25 7.50005 17.683 7.50005 15.75V14C7.49372 12.5774 6.63005 11.2991 5.31251 10.7625C5.56253 8.46248 6.78755 3.00002 12.7501 3.00002C18.7126 3.00002 19.925 8.46248 20.1751 10.7625C18.8602 11.3003 18.0009 12.5795 18.0001 14V15.75C18.0027 16.4086 18.1905 17.0532 18.5419 17.6101C18.8934 18.1671 19.3943 18.6141 19.9876 18.9C19.4626 19.8875 18.125 21.225 14.8375 21.625C14.1804 20.6271 12.909 20.2337 11.8031 20.6861C10.6972 21.1385 10.066 22.3102 10.2966 23.4825C10.5272 24.6549 11.5552 25.5 12.7501 25.5C13.213 25.4974 13.6662 25.3663 14.059 25.1214C14.4519 24.8764 14.769 24.5271 14.975 24.1125C20.3375 23.5 22.0501 20.7375 22.5875 19.1125C24.0417 18.6414 25.0196 17.2784 25 15.75V14C25.006 12.5461 24.1094 11.2409 22.75 10.725ZM5.00003 15.75C5.00003 16.3023 4.55232 16.75 4.00001 16.75C3.44771 16.75 3.00005 16.3023 3.00005 15.75V14C2.99904 13.868 3.02416 13.7372 3.07396 13.615C3.12376 13.4928 3.19726 13.3816 3.29022 13.2879C3.38318 13.1943 3.49376 13.1199 3.61558 13.0692C3.73741 13.0184 3.86807 12.9923 4.00004 12.9923C4.13201 12.9923 4.26267 13.0184 4.3845 13.0692C4.50632 13.1199 4.6169 13.1943 4.70986 13.2879C4.80282 13.3816 4.87632 13.4928 4.92612 13.615C4.97592 13.7372 5.00104 13.868 5.00003 14V15.75ZM20.5 14C20.5 13.4477 20.9477 13 21.5 13C22.0523 13 22.5001 13.4477 22.5001 14V15.75C22.5001 16.3023 22.0523 16.75 21.5 16.75C20.9477 16.75 20.5 16.3023 20.5 15.75V14Z" fill="#EFF6F8"/>
                    </svg>
                    My Saved
                </Link>
                <Link href="support" className="flex items-center text-lg text-white font-semibold gap-3 h-[50px] w-full px-5 rounded-l-full">
                    <svg width="20" height="20" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 4.75C1.5 3.35 1.5 2.65 1.7725 2.115C2.01218 1.64462 2.39462 1.26218 2.865 1.0225C3.4 0.75 4.1 0.75 5.5 0.75H12.5C13.9 0.75 14.6 0.75 15.135 1.0225C15.6054 1.26218 15.9878 1.64462 16.2275 2.115C16.5 2.65 16.5 3.35 16.5 4.75V21.3812C16.5 21.9887 16.5 22.2925 16.3738 22.4588C16.3192 22.5311 16.2496 22.5906 16.1697 22.6334C16.0899 22.6761 16.0017 22.701 15.9112 22.7063C15.7025 22.7188 15.45 22.55 14.945 22.2137L9 18.25L3.055 22.2125C2.55 22.55 2.2975 22.7188 2.0875 22.7063C1.99729 22.7008 1.90935 22.6758 1.82972 22.6331C1.75009 22.5904 1.68067 22.5309 1.62625 22.4588C1.5 22.2925 1.5 21.9887 1.5 21.3812V4.75Z" fill="#EFF6F8" stroke="#EFF6F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Support
                </Link> */}
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 pl-5">
                {sidebarItems2.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center text-lg bg-transparent text-white font-semibold gap-3 h-[50px] w-full px-5 rounded-l-full ${
                        pathname == item.path
                            ? "active"
                            : ""
                        }`}
                    >
                        {item.svg}
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
