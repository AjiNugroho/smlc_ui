import { Separator } from '@/components/ui/separator'
import React from 'react'
import UserSettingsForm from './components/UserSettingsForm'

const page = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Configure your account settings
        </p>
      </div>
      <Separator/>
      <UserSettingsForm/>
    </div>
  )
}

export default page
