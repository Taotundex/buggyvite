import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardHeading = () => {
  return (
    <div className="head flex flex-col gap-5 md:px-10 md:pt-10 p-5">
      <div className="lg:hidden flex justify-between items-center">
        <Link href="dashboard"><Image className='block' src="/images/BV 6 Logo 4.png" width={200} height={50} alt='logo' /></Link>
        <div className='dropdown dropdown-end'>
          {/* <svg tabIndex={0} role="button" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2871 14.225C22.3371 13.825 22.3746 13.425 22.3746 13C22.3746 12.575 22.3371 12.175 22.2871 11.775L24.9246 9.71253C25.1621 9.52503 25.2246 9.18753 25.0746 8.91253L22.5746 4.58753C22.5009 4.45856 22.3837 4.36006 22.2439 4.30966C22.1042 4.25927 21.9511 4.26029 21.8121 4.31253L18.6996 5.56253C18.0496 5.06253 17.3496 4.65003 16.5871 4.33753L16.1121 1.02503C16.0909 0.878182 16.0171 0.744014 15.9044 0.647455C15.7918 0.550897 15.6479 0.498512 15.4996 0.500032H10.4996C10.1871 0.500032 9.92455 0.725032 9.88706 1.02503L9.41206 4.33753C8.64956 4.65003 7.94955 5.07503 7.29955 5.56253L4.18706 4.31253C4.11441 4.28863 4.03853 4.27599 3.96206 4.27503C3.74956 4.27503 3.53706 4.38753 3.42456 4.58753L0.924555 8.91253C0.762055 9.18753 0.837055 9.52503 1.07456 9.71253L3.71206 11.775C3.66206 12.175 3.62456 12.5875 3.62456 13C3.62456 13.4125 3.66206 13.825 3.71206 14.225L1.07456 16.2875C0.837055 16.475 0.774555 16.8125 0.924555 17.0875L3.42456 21.4125C3.49824 21.5415 3.61545 21.64 3.75518 21.6904C3.89491 21.7408 4.04801 21.7398 4.18706 21.6875L7.29955 20.4375C7.94955 20.9375 8.64956 21.35 9.41206 21.6625L9.88706 24.975C9.92455 25.275 10.1871 25.5 10.4996 25.5H15.4996C15.8121 25.5 16.0746 25.275 16.1121 24.975L16.5871 21.6625C17.3496 21.35 18.0496 20.925 18.6996 20.4375L21.8121 21.6875C21.8871 21.7125 21.9621 21.725 22.0371 21.725C22.2496 21.725 22.4621 21.6125 22.5746 21.4125L25.0746 17.0875C25.2246 16.8125 25.1621 16.475 24.9246 16.2875L22.2871 14.225ZM19.8121 12.0875C19.8621 12.475 19.8746 12.7375 19.8746 13C19.8746 13.2625 19.8496 13.5375 19.8121 13.9125L19.6371 15.325L20.7496 16.2L22.0996 17.25L21.2246 18.7625L19.6371 18.125L18.3371 17.6L17.2121 18.45C16.6746 18.85 16.1621 19.15 15.6496 19.3625L14.3246 19.9L14.1246 21.3125L13.8746 23H12.1246L11.8871 21.3125L11.6871 19.9L10.3621 19.3625C9.82456 19.1375 9.32455 18.85 8.82455 18.475L7.68706 17.6L6.36205 18.1375L4.77456 18.775L3.89955 17.2625L5.24956 16.2125L6.36205 15.3375L6.18706 13.925C6.14956 13.5375 6.12456 13.25 6.12456 13C6.12456 12.75 6.14956 12.4625 6.18706 12.0875L6.36205 10.675L5.24956 9.80003L3.89955 8.75003L4.77456 7.23753L6.36205 7.87503L7.66206 8.40003L8.78706 7.55003C9.32456 7.15003 9.83706 6.85003 10.3496 6.63753L11.6746 6.10003L11.8746 4.68753L12.1246 3.00003H13.8621L14.0996 4.68753L14.2996 6.10003L15.6246 6.63753C16.1621 6.86253 16.6621 7.15003 17.1621 7.52503L18.2996 8.40003L19.6246 7.86253L21.2121 7.22503L22.0871 8.73753L20.7496 9.80003L19.6371 10.675L19.8121 12.0875ZM12.9996 8.00003C10.2371 8.00003 7.99956 10.2375 7.99956 13C7.99956 15.7625 10.2371 18 12.9996 18C15.7621 18 17.9996 15.7625 17.9996 13C17.9996 10.2375 15.7621 8.00003 12.9996 8.00003ZM12.9996 15.5C11.6246 15.5 10.4996 14.375 10.4996 13C10.4996 11.625 11.6246 10.5 12.9996 10.5C14.3746 10.5 15.4996 11.625 15.4996 13C15.4996 14.375 14.3746 15.5 12.9996 15.5Z" fill="#8E8E8E"/>
          </svg> */}
          <Image tabIndex={0} role="button" className='block' src="/images/Ellipse 177.png" width={40} height={40} alt='profile image' />
          <ul tabIndex={0} className="dropdown-content menu bg-[#EFF6F8] border border-[#796FAB] rounded-[10px] z-[1] w-[175px] p-1 shadow-lg">
            <li className='p-0 bg-transparent hover:bg-[#796FAB] hover:text-[#EFF6F8] rounded-[5px]'><Link href="profile">Profile</Link></li>
            <li className='p-0 bg-transparent hover:bg-[#796FAB] hover:text-[#EFF6F8] rounded-[5px]'><Link href="settings">Settings</Link></li>
            <li className="divider bg-black my-0 h-[2px]"></li>
            <li className='p-0 bg-transparent hover:bg-[#796FAB] hover:text-[#EFF6F8] rounded-[5px]'><Link href="logout">Logout</Link></li>
          </ul>
        </div>
      </div>
      <form action="" method="post" className='w-full flex justify-between items-center gap-10'>
        <label htmlFor="search" className='w-full flex items-center gap-1 border border-[#796FAB] px-5 rounded-[10px] h-[50px] input input-bordered bg-transparent'>
            <input type="search" name="search" id="search" placeholder='What service are you looking for today?' className='px-1 bg-transparent w-full outline-none border-none' />
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2503 24.2498L18.8215 18.821M18.8215 18.821C19.7501 17.8924 20.4867 16.79 20.9893 15.5767C21.4918 14.3634 21.7505 13.063 21.7505 11.7498C21.7505 10.4365 21.4919 9.13612 20.9893 7.92284C20.4867 6.70955 19.7501 5.60713 18.8215 4.67852C17.8929 3.74991 16.7905 3.0133 15.5772 2.51074C14.3639 2.00818 13.0635 1.74951 11.7503 1.74951C10.437 1.74951 9.13661 2.00818 7.92332 2.51074C6.71004 3.0133 5.60762 3.74991 4.67901 4.67852C2.8036 6.55393 1.75 9.09754 1.75 11.7498C1.75 14.402 2.8036 16.9456 4.67901 18.821C6.55442 20.6964 9.09802 21.75 11.7503 21.75C14.4025 21.75 16.9461 20.6964 18.8215 18.821Z" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </label>
        <div className="lg:flex hidden items-center gap-5">
          <Image src="/images/Notification.png" width={30} height={30} alt='Notification' />
          <Link className='w-[250px] flex items-center justify-center gap-2 h-[50px] bg-[#796FAB] rounded-[10px] text-white' href="/pages/profile">
              <p className="block">Hi, Damilola</p>
              <Image className='block' src="/images/Ellipse 177.png" width={40} height={40} alt='profile image' />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default DashboardHeading
