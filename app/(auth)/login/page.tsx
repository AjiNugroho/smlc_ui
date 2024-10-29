import React, { Suspense } from 'react'
import Image from 'next/image'
import chargerImage from '@/public/charger_image.jpg'
import LoginForm from './components/LoginForm'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
        <div className='flex w-[80%] h-[90%] p-4 border-gray-200 border-2 rounded-3xl bg-white'>
            <div className='w-2/3'>
                <Image
                src={chargerImage}
                alt='welcome image'
                width={900}
                height={300}
                layout='responsive'
                />
            </div>
            <div className='w-1/3 h-full p-1 gap-1'>
                <div className='bg-gray-100 shadow-md w-full h-full rounded-3xl flex flex-col items-center justify-center text-[#008ccc]'>
                    <h2 className="scroll-m-20 text-3xl font-semibold first:mt-0">
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
