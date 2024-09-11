'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import svg1 from '../images/svg1.png'
import svg2 from '../images/svg2.png'
import svgf from '../images/svgf.png'
import dish from '../images/dish.svg'
import delivery from '../images/delivery.svg'
import list from '../images/c2a2.png'
import list2 from '../images/c2a1.png'
import { MdHorizontalRule } from "react-icons/md";



const HomePageThree=()=>{

    return(
        <>
            <section className=" pb-[1rem]">
                {/* div 1 */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-base font-serif">FEATURES</h1>
                    <p className="text-4xl mt-10 mb-6 font-serif">CORE FEATURS</p>
                    <div>
                        <Image src={svg1} width={0} height={0} alt="image" />
                    </div>
                </div>

                {/* div 2 */}
                <div className="md:flex items-center justify-between mt-12 px-[3rem] gap-5">
                    <div data-aos="fade-left"
                        data-aos-duration="2000" className="border border-red-700 flex flex-col items-center justify-center px-[1rem] py-[2rem]">
                        <p>
                            <Image src={svgf} width={0} height={0} alt="image" className='w-20 md:w-48'/>
                        </p>

                        <p className="mt-5 mb-5 font-extrabold text-xl font-serif">BEST QUALITY FOOD</p>

                        <p>
                            <Image src={svg1} width={0} height={0} alt="image"/>
                        </p>

                        <p className="mt-4 mb-6 text-sm font-serif">Lorem ipsum dolor sit amet, consectet ur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut lab.</p>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn font-serif" onClick={()=>document.getElementById('my_modal_3').showModal()}>Read More</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg font-serif">Hello!</h3>
                            <p className="py-4 font-serif">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>

                    <div className="border border-red-700 flex flex-col items-center justify-center my-5 px-[1rem] py-[2rem]">
                        <p>
                            <Image src={delivery} width={0} height={0} alt="image" className='w-20 md:w-48'/>
                        </p>

                        <p className="mt-5 mb-5 font-extrabold text-xl font-serif">BEST QUALITY FOOD</p>

                        <p>
                            <Image src={svg1} width={0} height={0} alt="image"/>
                        </p>

                        <p className="mt-4 mb-6 text-sm font-serif">Lorem ipsum dolor sit amet, consectet ur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut lab.</p>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn font-serif" onClick={()=>document.getElementById('my_modal_3').showModal()}>Read More</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg font-serif">Hello!</h3>
                            <p className="py-4 font-serif">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>

                    <div data-aos="fade-right"
                        data-aos-duration="2000" className="border border-red-700 flex flex-col items-center justify-center px-[1rem] py-[2rem]">
                        <p>
                            <Image src={dish} width={0} height={0} alt="image" className='w-20 md:w-48'/>
                        </p>

                        <p className="mt-5 mb-5 font-extrabold text-xl font-serif">BEST QUALITY FOOD</p>

                        <p>
                            <Image src={svg1} width={0} height={0} alt="image"/>
                        </p>

                        <p className="mt-4 mb-6 text-sm font-serif">Lorem ipsum dolor sit amet, consectet ur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut lab.</p>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn font-serif" onClick={()=>document.getElementById('my_modal_3').showModal()}>Read More</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg font-serif">Hello!</h3>
                            <p className="py-4 font-serif">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>
                </div>

                {/* call to action */}
                <div className='flex items-center justify-between px-[3rem] gap-10 pt-12 flex-wrap'>
                    <div>
                        <p className='flex items-center text-yellow-600 font-serif'>CALL TO ACTION <span className='text-6xl'><MdHorizontalRule /></span></p>
                        <p className='tracking-in-expand text-2xl md:text-6xl font-serif '>CONTACT US <br /> ON WHATSAPP</p>
                        <p className='text-neutral-400 text-sm font-serif'>Made of fresh & premium ingredients</p>
                    </div>

                    <div className=''>
                        <Image src={list} width={0} height={0} alt='image'/>
                    </div>

                    <div>
                        <Image src={list2} width={0} height={0} alt='image'/>
                    </div>

                    <div className='bounce-in-top'>
                        <button className="px-3 py-2 hover:bg-green-100 text-white hover:text-blue-600 bg-orange-600 cursor-pointer element rounded-[8px] element font-serif">BOOK NOW</button>
                    </div>
                </div>
            </section>
        </>
    )



};

export default HomePageThree;