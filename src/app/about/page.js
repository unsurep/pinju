'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import AboutPage from "@/components/AboutPage/AboutPage"

const Page=()=>{
    return(
        <>
            <section>
                <AboutPage/>
            </section>
        </>
    )
};

export default Page;