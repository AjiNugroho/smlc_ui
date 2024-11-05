'use client'
import dynamic from "next/dynamic"

const MalaysianMap = dynamic(() => import("./MalaysiaMap"), { ssr:false })

const MapWrapper = () => {
  return (
    <div className="w-full h-full">
        <MalaysianMap/>
    </div>
  )
}

export default MapWrapper
