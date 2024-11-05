'use client'
import { useEffect, useState } from "react";
interface clientOnlyProps{
    children: React.ReactNode;
}
const ClientWrapper:React.FC<clientOnlyProps> = ({children}) => {

    const [hasMounted,sethasMounted] = useState(false)

    useEffect(()=>{
        sethasMounted(true)
    },[])

    if(!hasMounted){
        return null
    }
    return ( 
    <>
    {children}
    </>
    );
}
 
export default ClientWrapper;