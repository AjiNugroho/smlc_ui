'use server'
import { cookies } from 'next/headers'

interface LoginData{
    email: string
    password: string
}

export const login = async(data:LoginData)=>{

    try {
        const dummyToken = `dummy-token-${data.email}-${data.password}`
        const cookieStore = await cookies()
        cookieStore.set('auth-token', dummyToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
        })

        return { success: true }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: 'Invalid credentials'
          }
    }
}