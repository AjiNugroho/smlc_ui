import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ChartWire1 = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
        <Card className='w-3/4'>
            <CardHeader>
                <CardTitle>
                    Time Series Analysis
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center items-center min-h-[300px]'>
                Chart will be available soon
            </CardContent>
        </Card>

        <Card className='w-1/4'>
            <CardHeader>
                <CardTitle>
                    Active Sessions
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center items-center min-h-[300px]'>
                Chart will be available soon
            </CardContent>
        </Card>
    </div>
  )
}

export default ChartWire1
