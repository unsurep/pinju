'use client'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import svg1 from '../images/svg1.png'
import baracuda from '../images/barakuda-bg.png'
import { MdHorizontalRule } from "react-icons/md";


const HomePageFour=()=>{

    return (
        <>
            <section className="px-[3rem] mt-12 font-serif">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-base">PINJU STORES</p>
                    <p className="text-4xl mt-10 mb-6 font-serif">POPULAR DEMAND</p>
                    <p className="">
                        <Image src={svg1} width={0} height={0} alt="image"/>
                    </p>
                </div>


                {/* Popular demands */}
                <div className=" grid grid-cols-2 gap-5 mt-20">
                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Image src={baracuda} width={0} height={0} alt="image" className="w-24"/>
                        </div>

                        <div>
                            <p>CRISPY FRIED CHICKEN-----------</p>
                            <p>Hot, Big, Full Plater, Cosmos</p>
                        </div>

                        <div>
                            <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600  element rounded-[8px] element">N 5000</button>
                        </div>
                    </div>
                </div>


                <div className="mt-12">
                    <div>
                        <p className='flex items-center text-yellow-600 font-serif'>TESTIMONIALS <span className='text-6xl'><MdHorizontalRule /></span></p>
                        <p className='tracking-in-expand text-2xl md:text-6xl font-serif '>SOME FEEDBACKS</p>
                    </div>

                    {/* swiper */}

                    <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                             pagination={{
                            clickable: true,
                            }}
                             modules={[Pagination]}
                            className="mySwiper"
      >
                            <SwiperSlide>
                                <div>
                                        <div>
                                            <h1></h1>
                                        </div>
                                        <div></div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                             <SwiperSlide>Slide 5</SwiperSlide>
                             <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                             <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </>
                    

                </div>
            </section>
        </>
    )



};

export default HomePageFour;