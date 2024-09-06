'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import DeliveryPage from "@/components/DeliveryPage/DeliveryPage";

const Page=()=>{

    return(
        <>
            <selection>
                <DeliveryPage/>
            </selection>
        </>
    )



}; 

export default Page;