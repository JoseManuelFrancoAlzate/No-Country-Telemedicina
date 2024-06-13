import DoctorsProfile from '@/components/DoctorsProfile/DoctorsProfile'
import React from 'react'

const page = () => {
  return (
    <DoctorsProfile/>
  )
}

export default page
/*
'use client'
import { useRouter, useParams} from "next/navigation"
const page =()=>{

    const router = useParams()
    const {params} = useParams() 

    console.log(router)
    return(
<div>
    Doctor Profile  
</div>
    )
}

export default page
*/