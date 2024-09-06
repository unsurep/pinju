'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import ProductPage from "@/components/ProductPage/ProductPage";


const Page=()=>{
    return(
        <>
            <section>
                <ProductPage/>
            </section>
        </>
    )
};

export default Page;