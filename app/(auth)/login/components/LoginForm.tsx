'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { login } from '../../actions/login'

const LoginPage=()=> {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string>('')
  
  async function handleSubmit(formData: FormData) {

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    
    const result = await login({ email, password })

    if (result.success) {
      // Redirect to the original destination or dashboard
      // const redirectTo = searchParams.get('redirect') || '/depots'
      const redirectTo = '/depots'
      router.push(redirectTo)
    } else {
      console.log(error)
      setError(result.error || 'Login failed')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form action={handleSubmit} className="space-y-4 w-full max-w-md p-8 text-gray-700">
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-1 block w-full rounded-md border p-2"
          />
        </div>
        
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        
        <button
          type="submit"
          className="w-full bg-[#0035a3] text-white rounded-3xl py-3 hover:bg-[#0089ce] mt-4"
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default LoginPage