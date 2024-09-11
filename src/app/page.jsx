'use client'


import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import HomePage from "@/components/HomePage/HomePage";
import HomePageTwo from "@/components/HomePage/HomePageTwo";
import HomePageThree from "@/components/HomePage/HomePageThree";
import HomePageFour from "@/components/HomePage/HomePageFour";



const Home=()=>{

    
    return(
        <>
            <section>
                <HomePage/>
                <HomePageTwo/>
                <HomePageThree/>
                <HomePageFour/>
            </section>
        </>
    )



};

export default Home;