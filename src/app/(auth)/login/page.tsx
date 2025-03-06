"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'

interface LoginFormValues {
	email: string;
	password: string;
}

const page = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const navigate = useNavigate()

    const formik = useFormik<LoginFormValues>({
        initialValues:{
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid Email Address")
                .required("Email is required!."),
            password: Yup.string()
                .required("Password is required!.")
                .min(8, "Password must be at least 8 characters")
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setIsLoading(true)
            setSubmitting(true)
            try {
                // const response = await axios.post("/login", values)
                // navigate("/pages/dashboard")
            } catch (error: any) {
                
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                    setSubmitting(false);
                    resetForm();
                }, 5000);
            }
        }
    })

    return (
        <div className='h-screen'>
            <div className="container grid lg:grid-cols-2 grid-cols-1 gap-[75px] h-full items-center">
                <div className="flex flex-col gap-[10px] w-full md:col-span-1 col-span-2">
                    <Image className='mx-auto' src="/images/BV 1 Logo 1.png" width={200} height={50} alt="logo 1" />
                    <Image className='mx-auto' src="/images/Male User.png" width={50} height={50} alt="logo 1" />
                    <h3 className='text-[36px] text-center font-bold'>Login</h3>
                    {/* <p className='font-medium text-[18px]'>Enter your email and password access your dashboard</p> */}
                    <form action="/pages/dashboard" method="post" className='font-medium text-[16px] pt-10 pb-5 flex flex-col gap-[20px]' onSubmit={formik.handleSubmit}>
                        <label className="form-control flex flex-col gap-1 w-full">Email
                            <input 
                                type="email" 
                                placeholder="e. g. johndoe@gmail.com" 
                                name="email" 
                                className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
								<small className="text-red-500 text-[12px]">{formik.errors.email}</small>
							)}
                        </label>
                        <label className="form-control flex flex-col gap-1 w-full">Password
                            <input 
                                type="password" 
                                placeholder="********" 
                                minLength={8} 
                                name="password" 
                                className="input input-bordered w-full bg-transparent border border-[#8E8E8E] rounded-[10px]" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
								<small className="text-red-500 text-[12px]">{formik.errors.password}</small>
							)}
                        </label>
                        <Link href="forget_password" className='text-[16px] w-full flex justify-end mt-[-15px] underline underline-offset-2'>Forgot Password?</Link>
                        <button 
                            className={`btn col-span-2 w-full bg-[#796FAB] border-none text-[#D9D9D9] ${formik.isSubmitting ? "cursor-not-allowed" : null}`}
                            disabled={formik.isSubmitting}
                        >
                            {
                                formik.isSubmitting ? "Logging in..." : "Log In"
                            }
                        </button>
                    </form>
                    <center className="text-[16px] font-medium">Don’t have an account? <Link href="signup" className='text-[#796FAB] underline underline-offset-2'>Sign up</Link></center>
                </div>
                <div className="img bg-[#796fab1c] shadow-2xl shadow-[#796fab1c] h-[90vh] backdrop-blur-[20px] rounded-[10px] lg:flex hidden items-center">
                    <Image className='mx-auto' src="/images/Boy studying remotely with tutor.png" width={525} height={100} alt="logo 1" />
                </div>
            </div>
        </div>
    )
}

export default page
