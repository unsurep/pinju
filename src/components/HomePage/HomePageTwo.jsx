'use client'


import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import pj1 from '../images/pj2.jpg'
import pj3 from '../images/pj3.jpg'
import delivery from '../images/delivery.svg'
import nigf from '../images/9jaf.png'
import canaf from '../images/canaf.webp'
import ukf from '../images/ukf.webp'
import { GiPin } from "react-icons/gi";

const HomePageTwo=()=>{

    return(
        <>
            <section className="py-32 px-[3rem] sm:flex-row  md:flex gap-10  justify-between ">
                {/* div a */}

                <div className="h-98 w-fit overflow-hidden flex m-auto">
                    <Image src={pj1} width={0} height={0}  alt="image" className="rounded-[20px] w-[80%] object-cover  "/>
                </div>

                {/* div b */}
                <div className="font-serif bg-orange-100 py-8 px-8 rounded-[16px] mt-5 ">
                    <p className="text-orange-600 font-bold lg:text-xl ">ABOUT US</p>
                    <h1 className="py-3 font-extrabold text-sm lg:text-lg">WE ARE LOCATED IN <br /> RIVERS STATE</h1>
                    <p className=" text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.  Praesentium laudantium qui, exercitationem natus voluptatibus quidem perspiciatis tempore blanditiis nesciunt eaque!</p>

                    <div className="pt-8">
                        <div className="">
                            <Image src={pj3} width={0} height={0} alt="image" className="w-48 rounded-full ring ring-green-600 shadow-lg shadow-green-400"/>
                        </div>

                        <div className="pt-8">
                            <p className="font-serif text-sm lg:text-base">Mrs. Uju Umukoro Chiejina</p>
                            <button>08058078926</button>
                        </div>
                    </div>
                </div>

                {/* div c */}
                <div className=" flex flex-col bg-orange-50 py-8 px-8 rounded-[16px] mt-5  ">
                    <div className="font-serif bg-stone-800 py-6 px-8 text-white w-fit flex flex-col m-auto rounded-[18px] relative bounce-in-top ">
                        <div className="flex flex-col">
                            <p className="m-auto text-5xl font-bold">5</p>
                            <p>Years in Business</p> 
                        </div>

                        <p className="absolute top-0 right-0 text-yellow-700 text-3xl overflow-hidden"><GiPin /></p>

                        <div className="flex gap-4">
                           <div>
                                <Image src={nigf} width={0} height={0} alt="image" className="w-8"/>
                                <Image src={canaf} width={0} height={0} alt="image" className="w-8"/>
                                <Image src={ukf} width={0} height={0} alt="image" className="w-8"/>
                           </div>
                           <Image src={delivery} width={0} height={0} alt="image"/>
                        </div>


                    </div>

                    <div className="font-serif pt-8">
                        <p className="text-sm lg:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Aperiam veritatis accusamus corporis eaque voluptas eligendi quod illum sit, dignissimos magnam.
                        </p>
                    </div>

                </div>
            </section>
        
        
        
        </>
    )



};

export default HomePageTwo;