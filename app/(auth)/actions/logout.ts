'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const logout = async()=>{
    const cookiesStore = await cookies()
    cookiesStore.delete('auth-token')
    redirect('/login')
}