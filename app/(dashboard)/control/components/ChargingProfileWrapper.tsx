'use client'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import ChargingProfileManager from './ChargingProfileManager';
const ChargingProfileWrapper = () => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <ChargingProfileManager/>
        </FormProvider>
    )
}

export default ChargingProfileWrapper
