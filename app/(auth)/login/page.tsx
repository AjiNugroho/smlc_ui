import React, { Suspense } from 'react'
import Image from 'next/image'
import busImage from '@/public/busImage.png'
import logoPrasaran from '@/public/logoprasaranadepo.png'
import LoginForm from './components/LoginForm'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
        <div className='flex w-[80%] h-[90%] p-4 border-gray-200 border-2 rounded-3xl bg-white'>
            <div className='w-2/3 flex flex-col  items-center justify-center'>
                <p className='text-[#0035a3] text-5xl font-extrabold'>Prasarana Bus Depot</p>
                <p className='text-[#0035a3] text-2xl font-extrabold mt-2'>Charge Management System</p>
                <Image
                src={busImage}
                alt='welcome image'
                width={400}
                height={400}
                />
            </div>
            <div className='w-1/3 h-full p-1 gap-1'>
                <div className='bg-gray-100 shadow-md w-full h-full rounded-3xl flex flex-col items-center justify-center text-[#0035a3]'>
                    <Image
                    src={logoPrasaran}
                    alt='logo'
                    width={280}
                    height={90}
                    />
                    <h2 className="scroll-m-20 text-3xl font-semibold first:mt-0 mt-20">
                    Welcome back!
                    </h2>
                    <h4 className="scroll-m-20 text-md font-thin text-gray-700">
                    Please enter your details
                    </h4>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginForm/>
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
