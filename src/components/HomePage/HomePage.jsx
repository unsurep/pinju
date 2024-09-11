'use client'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import dish from '../images/dish.svg'
import p1 from '../images/p1.jpg'
import sf1 from '../images/sf1.png'
import kp1 from '../images/kp1.png'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const HomePage=()=>{

    const [showOne, setShowOne]=useState(true);
    const [showTwo, setShowTwo]=useState(false);
    const {showThree, setShowThree}=useState(false);

    const toggleShowOne=()=>{
        setShowOne(true)
        setShowTwo(false)
        setShowThree(false)
    }

    const toggleShowTwo=()=>{
        setShowOne(false)
        setShowTwo(true)
        setShowThree(false)
    }

    const toggleShowThree=()=>{
        setShowOne(false)
        setShowTwo(false)
        setShowThree(true)
    }

    return(
        <div>

            

            <section className="px-[3rem] pt-20 relative">
                {/* section 1 */}
                <div className="  ">
                    {/* left div */}
                    <>
                        <Swiper navigation={true}
                         modules={[Navigation]} 
                         className="mySwiper">
                         
                            


                        <SwiperSlide>       
                            <div className="flex pt-4 md:pt-10 flex-wrap">
                            <div className='flex-wrap'>
                            <div className="flex items-center  gap-5 ">
                                <h1 className="text-[1.5rem]  text-center  font-serif text-orange-600">PINJU FRESH SEAFOOD</h1>
                                <Image src={dish} width={0} height={0} alt="image" className="w-16"/> 
                            </div>

                            <div className='leading-8 md:leading-[60px]  py-4 flex-wrap '> 
                                <p className="font-extrabold text-[20px] md:text-[3rem]  font-serif  ">Enjoy Our <br /> <span className="bg-gradient-to-r from-orange-600 to-sky-400 bg-clip-text text-transparent">Delicius</span> Prawn</p>
                            </div>

                            <div className='flex-wrap lg:mt-20'>
                                <p className="text-[14px] md:text-[1.2rem]  font-serif pt-2 flex-wrap">Savor the taste of our delicious, expertly dried prawn made <br /> with the finest  ingredients from the fresh water in <br /> Rivers State, offering a perfect blend  of flavors.</p>
                            </div>

                            <div className=" mt-6 mb-12 md:mt-32 flex-wrap">
                                <button className=" font-serif px-3 py-2 hover:bg-green-600 text-white bg-orange-600 cursor-pointer element rounded-[8px] element">Order Now</button>
                            </div>
                            </div>

                            <div className="flex flex-col flex-wrap  ml-auto">
                            <div className="h-96 w-full overflow-hidden">
                                <Image src={p1} width={0} height={0} alt="image" className="w-full rounded-[18px] h-full  object-cover"/>
                            </div>
                            </div>

                            <div>
                            <p className=" bg-green-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute top-[6rem] left-[35rem] revolve-image cursor-pointer hover:bg-red-500 hover:bg-opacity-60"></p>
                            <p className=" bg-orange-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute left-[5rem] bottom-[8rem] revolve-image cursor-pointer hover:bg-lime-500 hover:bg-opacity-60 "></p>
                            <p className=" bg-sky-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute bottom-[1rem] left-[20rem] revolve-image cursor-pointer hover:bg-yellow-500 hover:bg-opacity-60"></p>
                            </div>
                            </div> 
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="flex pt-10 flex-wrap">
                        <div className='flex-wrap'>
                            <div className="flex items-center  gap-5 ">
                                <h1 className="text-[1.5rem]  text-center  font-serif text-orange-600">PINJU FRESH SEAFOOD</h1>
                                <Image src={dish} width={0} height={0} alt="image" className="w-16"/> 
                            </div>

                            <div className='flex-wrap leading-8 md:leading-[60px]'>
                                <p className="font-extrabold text-[20px] md:text-[3rem]  py-4  font-serif  ">Enjoy Our <br /> <span className="bg-gradient-to-r from-orange-600 to-sky-400 bg-clip-text text-transparent ">Delicius</span> Cat Fish</p>
                            </div>

                            <div className='lg:mt-16 flex-wrap text-[20px] '>
                                <p className="text-[14px] md:text-[1.2rem]  font-serif pt-4 ">Savor the taste of our delicious, expertly dried cat fish. <br /> Our industrial oven has the capacity to accomodate over a hundred.</p>
                            </div>

                            <div className="mt-6 md:mt-32 flex-wrap">
                                <button className=" font-serif px-3 py-2 hover:bg-green-600 text-white bg-orange-600 cursor-pointer element rounded-[8px] element">Order Now</button>
                            </div>
                        </div>

                        <div className="flex flex-col ml-auto flex-wrap">
                            <div className="h-full w-full overflow-hidden">
                                <Image src={sf1} width={0} height={0} alt="image" className="w-full rounded-[18px] h-full  object-cover"/>
                               
                            </div>
                        </div>

                        <div>
                            <p className=" bg-green-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute top-[6rem] left-[35rem] revolve-image cursor-pointer hover:bg-red-500 hover:bg-opacity-60"></p>
                            <p className=" bg-orange-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute left-[5rem] bottom-[8rem] revolve-image cursor-pointer hover:bg-lime-500 hover:bg-opacity-60 "></p>
                            <p className=" bg-sky-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute bottom-[1rem] left-[20rem] revolve-image cursor-pointer hover:bg-yellow-500 hover:bg-opacity-60"></p>
                        </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="flex pt-10 flex-wrap">
                                <div className='flex-wrap'>
                                <div className="flex items-center  gap-5 ">
                                <h1 className="text-[1.5rem]  text-center  font-serif text-orange-600">PINJU FRESH SEAFOOD</h1>
                                <Image src={dish} width={0} height={0} alt="image" className="w-16"/> 
                                </div>

                                <div className='flex-wrap leading-8 md:leading-[60px]'>
                                <p className="font-extrabold text-[20px] md:text-[3rem]  font-serif  py-4  ">Enjoy Our <br /> <span className="bg-gradient-to-r from-orange-600 to-sky-400 bg-clip-text text-transparent">Delicius</span> Kpomo</p>
                                </div>

                                <div className='flex-wrap lg:mt-16'>
                                <p className="text-[14px] md:text-[1.2rem]  font-serif pt-4">Enjoy our well washed and dried kpomo with our industrial oven. <br /> It has the capacity to accomodate over 200 and <br /> can stay sealed for a long period of time</p>
                                </div>

                                <div className="mt-6 md:mt-32 flex-wrap">
                                <button className=" font-serif px-3 py-2 hover:bg-green-600 text-white bg-orange-600 cursor-pointer element rounded-[8px] element">Order Now</button>
                                </div>
                                </div>

                                <div className="flex mt-4 flex-col ml-auto flex-wrap">
                                <div className="h-96 w-full overflow-hidden">
                                <Image src={kp1} width={0} height={0} alt="image" className="w-full rounded-[18px]  h-full  object-cover"/>
                                </div>
                                </div>

                                <div>
                                <p className=" bg-green-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute top-[6rem] left-[35rem] revolve-image cursor-pointer hover:bg-red-500 hover:bg-opacity-60"></p>
                                <p className=" bg-orange-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute left-[5rem] bottom-[18rem] revolve-image cursor-pointer hover:bg-lime-500 hover:bg-opacity-60 "></p>
                                <p className=" bg-sky-500 p-2 w-fit rounded-[4px] bg-opacity-60 absolute bottom-[1rem] left-[20rem] revolve-image cursor-pointer hover:bg-yellow-500 hover:bg-opacity-60"></p>
                                </div>

                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}

                        </Swiper>
                    </>  
                </div>

               
                
                
            </section>
        </div>
    )



};

export default HomePage;