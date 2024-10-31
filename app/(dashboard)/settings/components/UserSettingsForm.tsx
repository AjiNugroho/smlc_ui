import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'


const UserSettingsForm = () => {

  return (
    <>
        <form className='space-y-6'>
            <div>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' placeholder='Your user name'/>
            </div>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' placeholder='Email address'/>
            </div>
            <div>
                <Label htmlFor='number'>Phone Number</Label>
                <Input id='number' type='tel' placeholder='Phone number'/>
            </div>
            <div>
                <Label htmlFor='organization'>Organization</Label>
                <Input disabled id='organization' type='text' placeholder='Organization Name'/>
            </div>
            <div>
                <Label htmlFor='role'>Role Level</Label>
                <Input disabled id='role' type='text' placeholder='Role Level'/>
            </div>
            <div>
                <Button type='submit'>Save Changes</Button>
            </div>
        </form>
    </>
  )
}

export default UserSettingsForm
