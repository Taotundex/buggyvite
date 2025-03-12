"use client"
import BottomBar from '@/app/components/BottomBar'
import DashboardHeading from '@/app/components/DashboardHeading'
import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import React, { useState } from 'react'
import AccountTab from '@/app/components/settingsComponents/accountTab'
import SecurityTab from '@/app/components/settingsComponents/securityTab'
import NotificationTab from '@/app/components/settingsComponents/notificationTab'
import BizInfoTab from '@/app/components/settingsComponents/bizInfoTab'

const page = () => {
    const [activeTab, setActiveTab] = useState<"account" | "security" | "notification" | "bizInfo">("bizInfo")

    const renderTab = () => {
        if (activeTab === "security") {
            return <SecurityTab />
        } else if (activeTab === "notification") {
            return <NotificationTab />
        } else if (activeTab === "bizInfo") {
            return <BizInfoTab />
        } else {
            return <AccountTab />
        }
    }
    return (
        <div className='h-screen grid lg:grid-cols-6 grid-cols-5 overflow-hidden'>
            <Sidebar />
            <div className="main-body col-span-5 h-screen md:pb-0 pb-[50px] overflow-y-scroll">
                <DashboardHeading />
                <div className="body py-10 flex flex-col md:gap-10 gap-0">
                    <div className="flex md:px-10 px-5 py-3 items-center gap-4 justify-between text-center border-y border-[#282828] text-[#565454] font-semibold md:text-base text-sm md:overflow-x-hidden overflow-x-scroll">
                        <div 
                            className={`w-max md:px-10 px-4 flex items-center justify-center cursor-pointer whitespace-nowrap ${activeTab === "account" ? "border-purple border-b-4 bg-purple bg-opacity-45 py-2 text-background rounded" : null}`}
                            onClick={() => setActiveTab("account")}
                        >Account</div>
                        <div 
                            className={`w-max md:px-10 px-4 flex items-center justify-center cursor-pointer whitespace-nowrap ${activeTab === "security" ? "border-purple border-b-4 bg-purple bg-opacity-45 py-2 text-background rounded" : null}`}
                            onClick={() => setActiveTab("security")}
                        >Security</div>
                        <div 
                            className={`w-max md:px-10 px-4 flex items-center justify-center cursor-pointer whitespace-nowrap ${activeTab === "notification" ? "border-purple border-b-4 bg-purple bg-opacity-45 py-2 text-background rounded" : null}`}
                            onClick={() => setActiveTab("notification")}
                        >Notification</div>
                        <div 
                            className={`w-max md:px-10 px-4 flex items-center justify-center cursor-pointer whitespace-nowrap ${activeTab === "bizInfo" ? "border-purple border-b-4 bg-purple bg-opacity-45 py-2 text-background rounded" : null}`}
                            onClick={() => setActiveTab("bizInfo")}
                        >Business Information</div>
                    </div>
                    <div className="md:px-10 p-5">
                        {renderTab()}
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

export default page
