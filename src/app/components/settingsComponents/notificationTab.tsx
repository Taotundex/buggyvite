import React, { useState } from 'react'

const NotificationTab = () => {

    return(
        <div className="md:px-8 md:py-8 p-5 border border-[#282828] rounded-[10px]">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                <div
                    className={`items-center py-4 px-6 drop-shadow-lg border-4 border-white rounded-xl bg-purple text-background`}
                >
                    <h4 className="font-semibold mb-1">Job Offer</h4>
                    <p className="text-sm line-clamp-2">Nigga wants to hire your services. Lorem ipsum dolor sit amet consectetur, apidi elit. Ut inventore veniam quisquam ipsam illo, ad tenetur odit aspernatur? Harum, laborum?</p>
                    <p className="text-xs mt-1">
                        {new Date().toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default NotificationTab