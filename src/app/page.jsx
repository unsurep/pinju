'use client'


import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import HomePage from "@/components/HomePage/HomePage";
import HomePageTwo from "@/components/HomePage/HomePageTwo";



const Home=()=>{

    
    return(
        <>
            <section>
                <HomePage/>
                <HomePageTwo/>
            </section>
        </>
    )



};

export default Home;