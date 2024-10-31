import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className="text-lg font-medium">Organization</h3>
        <p className="text-sm text-muted-foreground">
          Configure your organization information and settings
        </p>
      </div>
      <Separator/>
      <div>
        <form className='space-y-6'>
                <div>
                    <Label htmlFor='custId'>Customer ID</Label>
                    <Input id='custId' type='text' placeholder='Cutomer ID'/>
                </div>
                <div>
                    <Label htmlFor='org_name'>Organization Name</Label>
                    <Input id='org_name' placeholder='Organization Name'/>
                </div>
                <div>
                    <Label htmlFor='head'>Headquarters Country</Label>
                    <Input id='head' placeholder='Head Quarters County'/>
                </div>
                <div>
                    <Label >Contact Person</Label>
                    <div className='grid grid-cols-2 gap-4 border rounded-lg bg-gray-100 p-4'>
                        <div>
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' placeholder='Name'/>
                        </div>
                        <div>
                        <Label htmlFor='email'>email</Label>
                        <Input id='email' type='email' placeholder='Email'/>
                        </div>
                        <div>
                        <Label htmlFor='phone'>Phone</Label>
                        <Input id='phone' placeholder='Phone'/>

                        </div>
                    </div>
                </div>
                
                <div>
                    <Button type='submit'>Save Changes</Button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default page
