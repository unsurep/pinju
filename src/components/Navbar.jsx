'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { PiFishSimpleFill } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";




const Navbar=()=>{

    const[showMenu, setShowMenu]=useState(false);

    const toggleshowMenu=()=>{
        setShowMenu(!showMenu)
    }

// bg-red-400 md:bg-yellow-600 lg:bg-green-600

    
    return(
        <>
            <section className="">
                <nav className="flex items-center justify-between shadow-lg shadow-yellow-800 py-4  ring ring-sky-300 w-[100%]  font-serif fixed z-50 px-5 md:px-[3rem] bg-red-400 md:bg-yellow-600 lg:bg-green-600 ">
                    
                    <Link href={'/'}>
                        <div>
                            <h1 className="flex md:flex items-center  bg-sky-200 hover:bg-sky-800 hover:text-white text-black cursor-pointer px-5 py-2.5 rounded-[8px] text-[14px] md:text-sm   "><PiFishSimpleFill/>PINJU STORES...<CiDeliveryTruck/></h1>
                                
                                
                        </div>
                    </Link>

                    <div className="">
                        <ul className=" hidden md:flex md:text-[10px] lg:text-base font-semibold items-center justify-center md:gap-2  ">
                            
                            <Link href={'/'}>
                                <li className="px-3 py-2 hover:bg-sky-800 cursor-pointer hover:text-white element rounded-[8px]  element">Home</li>
                            </Link>


                            <Link href={'/product'}>
                                <li className="px-3 py-2 hover:bg-sky-800 hover:text-white cursor-pointer element rounded-[8px] element">Products</li>
                            </Link>


                            <Link href={'/about'}>
                                <li className="px-3 py-2 hover:bg-sky-800 hover:text-white cursor-pointer element rounded-[8px] element]">About us</li>
                            </Link>

                            <Link href={'/delivery'}>
                                <li className="px-3 py-2 hover:bg-sky-800 hover:text-white cursor-pointer element rounded-[8px] element">Delivery Countries</li>
                            </Link>   
                            
                        </ul>
                    </div>

                    {/* contact button */}
                   <Link href={'/contact'}>
                        <div className="hidden md:block md:text-[10px] lg:text-lg ">
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600 cursor-pointer element rounded-[8px] element">Contact us</button>
                        </div>
                   </Link>

                    {/* button */}
                    {/* <div className="">
                        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-[12px] group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-sky-800 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Contact us</span>
                            </span>
                            <span
                            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-neutral-600 rounded-[12px] group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-full"
                            ></span>
                        </button>
                    </div> */}



                    <div  onClick={toggleshowMenu} className=" md:hidden  relative   ">
                        {showMenu===true ? <div className="text-xl rounded-full p-2 font-semibold hover:bg-neutral-400 cursor-pointer"><MdClose />
                        <div className="absolute     left-[-14rem] top-[10rem] w-[100vw]">
                            <ul data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500" className="flex flex-col text-[14px]   ">

                               <Link href={'/'}>
                                    <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element text-green-600">Home</li>
                               </Link>

                              <Link href={'/product'}>
                                    <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element">Products</li>
                              </Link>

                                <Link href={'/about'}>
                                    <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element]">About us</li>
                                </Link>

                                <Link href={'/delivery'}>
                                    <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element">Delivery Countries</li>
                                </Link>

                                <Link href={'/contact'}>
                                    <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element">Contact us</li>
                                </Link> 
                            </ul>
                        </div>
                        </div>:<div className="text-2xl rounded-full p-1 font-semibold hover:bg-neutral-400 cursor-pointer"><MdOutlineMenu /></div> }
                    </div>

                    











                    {/* <div onClick={toggleshowMenu} className=" md:hidden lg:hidden relative   ">
                        {showMenu===false ?<p className="text-xl"><MdClose /> <ul className="  md:flex items-center justify-center md:gap-6 absolute left-[0.5rem] top-[4rem] text-center bg-neutral-50 w-fit text-[12px] py-4 px-16 rounded-[12px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">
                            <li className="px-3 py-2 hover:bg-sky-200 text-blue-700 cursor-pointer element rounded-[20px] element">Home</li>
                            <li className="px-3 py-2 hover:bg-sky-200  cursor-pointer element rounded-[20px] element">Products</li>
                            <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element]">About us</li>
                            <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element">How it works</li>
                            <li className="px-3 py-2 hover:bg-sky-200 cursor-pointer element rounded-[20px] element">Delivery Countries</li>
                         
                        </ul></p> 
                        : <p className="text-2xl rounded-full p-1 font-semibold hover:bg-neutral-400 cursor-pointer"><MdOutlineMenu /></p>}  
                    </div> */}



                </nav>
            </section>
        </>
    )



};

export default Navbar;