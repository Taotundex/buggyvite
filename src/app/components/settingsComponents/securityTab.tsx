import Link from 'next/link'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface ResetPasswordForm {
    oldPassword: String;
    newPassword: String;
    confNewPassword: String;
}
const SecurityTab = () => {
    const [isVisible1, setVisibility1] = useState<boolean>(false);
    const [isVisible2, setVisibility2] = useState<boolean>(false);
    const [isVisible3, setVisibility3] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const formik = useFormik<ResetPasswordForm>({
        initialValues:{
            oldPassword: "",
            newPassword: "",
            confNewPassword: "",
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string()
                .required("Old Password is required")
                .min(8, "Password must be at least 8 characters"),
            newPassword: Yup.string()
                .required("New Password is required")
                .min(8, "Password must be at least 8 characters"),
            confNewPassword: Yup.string()
                .oneOf([Yup.ref('newPassword')], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setIsLoading(true)
            setSubmitting(true)
            try {
                
            } catch (error: any) {
                
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                    setSubmitting(false);
                    resetForm();
                }, 3000);
            }
        }
    })

    return(
        <div className="md:px-10 md:py-8 p-5 border border-secBlack rounded-[10px]">
            <div className="flex flex-col md:gap-5 gap-2">
                <div className="text-secBlack font-bold md:text-xl text-lg text-left w-full">Secure Your Account</div>
                <form action="" method="post" className='flex flex-col md:gap-5 gap-6 md:py-10 py-5 border-y border-secBlack' onSubmit={formik.handleSubmit}>
                    <label htmlFor="oldPassword" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-secBlack md:text-lg text-base'>
                        <span>Old Password</span>
                        <div className="input px-0 input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB] flex items-center justify-between">
                            <input
                                type={isVisible1 ? 'text' : 'password'}
                                name="oldPassword" 
                                id="oldPassword" 
                                placeholder='Old Pass****' 
                                className='border-0 w-full input'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className='text-xl pe-3'>
                                <FaEye
                                    className={`cursor-pointer ${
                                        isVisible1 ? 'hidden' : 'block'
                                    }`}
                                    onClick={() => setVisibility1(true)}
                                />
                                <FaEyeSlash
                                    className={`cursor-pointer ${
                                        isVisible1 ? 'block' : 'hidden'
                                    }`}
                                    onClick={() => setVisibility1(false)}
                                />
                            </span>
                        </div>
                    </label>
                    <label htmlFor="newPassword" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-secBlack md:text-lg text-base'>
                        <span>New Password</span>
                        <div className="input px-0 input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB] flex items-center justify-between">
                            <input
                                type={isVisible2 ? 'text' : 'password'}
                                name="newPassword" 
                                id="newPassword" 
                                placeholder='New Pass****' 
                                className='border-0 w-full input'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className='text-xl pe-3'>
                                <FaEye
                                    className={`cursor-pointer ${
                                        isVisible2 ? 'hidden' : 'block'
                                    }`}
                                    onClick={() => setVisibility2(true)}
                                />
                                <FaEyeSlash
                                    className={`cursor-pointer ${
                                        isVisible2 ? 'block' : 'hidden'
                                    }`}
                                    onClick={() => setVisibility2(false)}
                                />
                            </span>
                        </div>
                    </label>
                    <label htmlFor="confNewPassword" className='flex md:flex-row flex-col justify-between gap-3 md:items-center items-start font-medium text-secBlack md:text-lg text-base'>
                        <span>Confirm New Password</span>
                        <div className="input px-0 input-bordered md:w-[500px] w-full bg-transparent border border-[#796FAB] flex items-center justify-between">
                            <input
                                type={isVisible3 ? 'text' : 'password'}
                                name="confNewPassword" 
                                id="confNewPassword" 
                                placeholder='Confirm New Pass****' 
                                className='border-0 w-full input'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className='text-xl pe-3'>
                                <FaEye
                                    className={`cursor-pointer ${
                                        isVisible3 ? 'hidden' : 'block'
                                    }`}
                                    onClick={() => setVisibility3(true)}
                                />
                                <FaEyeSlash
                                    className={`cursor-pointer ${
                                        isVisible3 ? 'block' : 'hidden'
                                    }`}
                                    onClick={() => setVisibility3(false)}
                                />
                            </span>
                        </div>
                    </label>
                    <button 
                        type='submit'
                        className={`btn md:w-fit w-full px-10 h-[50px] mt-5 border-none bg-[#796FAB] text-white rounded-[5px] ml-auto ${formik.isSubmitting ? "cursor-disabled" : null}`}
                        disabled={formik.isSubmitting}
                    >
                        {
                            formik.isSubmitting ? "Updating Password..." : "Update Password"
                        }
                    </button>
                </form>
            </div>
        </div>
    )

}

export default SecurityTab