'use client'
import Link from "next/link";
import styles from './style.module.scss';
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Magnetic from '../Magnetic/Magnetic'
import './footer.css'


export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
   
    const y = useTransform(scrollYProgress, [0, 1], [-290, 0])
    return (
        <>
            <main className='bg-black px-5 md:px-2.5 lg:px-20'>
                <div className=''>
                    <div className='pt-24 sm:pt-72 md:pt-20'>
                        <h1 className=' text-3xl sm:text-7xl text-white italic rany font-bold	'>Start a project <br></br> with us</h1>
                    </div>

                    <div className='group'>

                        <div className='mt-24 relative '>
                            <Magnetic>
                                <div>
                                    <span className='h-20 w-20 right-14 -bottom-10 sm:h-32 sm:w-32 sm:right-20 sm:-bottom-16 ss:w-32 ss:h-32 ss:-bottom-16 ss:right-12 md:right-20
                                 lg:h-40 lg:w-40 lg:right-44 lg:-bottom-20
                                     rounded-full absolute bg-black block border boder-white-700 duration-500 '></span>
                                    <div className='relative'>
                                        <span className='text-white absolute right-16 -top-2 sm:right-[6.5rem] sm:-top-3 ss:right-16 ss:-top-4 md:right-28 lg:right-52 lg:-top-4'>
                                           <Link href="/contact-us">
                                           <h1 className='text-xs sm:text-base ss:text-lg  font-inter lg:text-xl'>
                                                Contact us
                                            </h1></Link> 
                                        </span>
                                    </div>
                                </div>
                            </Magnetic>
                            <span className='w-[100%] h-px bg-white block 	duration-500'>
                            </span>

                        </div>



                    </div>


                    <div className='mt-20 sm:mt-40 font-inter flex md:flex-row flex-col justify-start gap-11  sm:flex-row sm:justify-between sm:items-end'>
                        <div>
                            <div>
                                <h3 className='inter lg:text-4xl text-3xl	text-white '><i>&quot; </i>Everthing is<br></br> Possible <i>&quot;</i></h3>
                            </div>
                            <div>
                                <h3 className='text-xs font-normal text-white italic '>Zarchi Khin Kyaw</h3>
                            </div>
                        </div>
                        <div >
                            <div>
                                <h1 className='lg:text-3xl text-white font-semibold text-2xl'>Stay Informed</h1>
                            </div>
                            <div className='flex flex-col sm:flex-row lg:items-end pt-2'>

                                <input className={styles.Subscribe} placeholder="Your email Please"></input>

                                <div className="flex justify-end">
                                    <button className='border ml-2 rounded-full	px-2 py-1 text-sm right-2 md:text-xs text-white hover:bg-white hover:text-black duration-500 mt-3 sm:-right-16 sm:-top-3 justify-end xs:ms-50' >Subscribe</button>
                                </div>
                            </div>
                        </div>
                        {/* icon email */}
                        <div className='lg:mt-12'>
                            <div className='flex flex-cols-3 gap-6 text-xl text-white'>
                                {/* facebook icon */}
                                <div>
                                    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='icon' d="M15.5 1.5H11.75C10.0924 1.5 8.50269 2.15848 7.33058 3.33058C6.15848 4.50268 5.5 6.0924 5.5 7.75V11.5H1.75V16.5H5.5V26.5H10.5V16.5H14.25L15.5 11.5H10.5V7.75C10.5 7.41848 10.6317 7.10054 10.8661 6.86612C11.1005 6.6317 11.4185 6.5 11.75 6.5H15.5V1.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                {/* linkedin icon */}
                                <div className='flex group'>

                                    <div className='linkedinicon'>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 10C21.9891 10 23.8968 10.7902 25.3033 12.1967C26.7098 13.6032 27.5 15.5109 27.5 17.5V26.25H22.5V17.5C22.5 16.837 22.2366 16.2011 21.7678 15.7322C21.2989 15.2634 20.663 15 20 15C19.337 15 18.7011 15.2634 18.2322 15.7322C17.7634 16.2011 17.5 16.837 17.5 17.5V26.25H12.5V17.5C12.5 15.5109 13.2902 13.6032 14.6967 12.1967C16.1032 10.7902 18.0109 10 20 10Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.5 11.25H2.5V26.25H7.5V11.25Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                                <div >
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='icon' d="M28.75 1.75C27.553 2.59434 26.2276 3.24013 24.825 3.6625C24.0722 2.79688 23.0717 2.18336 21.9588
              1.9049C20.8459 1.62645 19.6744 1.69649 18.6026 2.10556C17.5308 2.51464 16.6106 3.243 15.9662 4.19214C15.3219 5.14129 14.9846
                6.26542 15 7.4125V8.6625C12.8033 8.71946 10.6266 8.23226 8.66376 7.2443C6.70093 6.25635 5.0129 4.79829 3.75 3C3.75 3 -1.25
                14.25 10 19.25C7.42566 20.9975 4.35895 21.8737 1.25 21.75C12.5 28 26.25 21.75 26.25 7.375C26.2488 7.02681 26.2154 6.67949
                  26.15 6.3375C27.4258 5.07936 28.326 3.49089 28.75 1.75Z"
                                            stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='text-white lg:text-lg	text-xs	'>
                                <a>contact@smilaxglobal.com</a>
                            </div>
                        </div>
                    </div>
                    {/* copyright */}
                    <div className='mt-12 pb-6 flex flex-col sm:flex-row text-xs justify-center sm:text-md '>
                        <div className='text-white text-center me-2'>
                            <h1> © 2023 Smilax Global Co., Ltd. All Rights Reserved.  | </h1>
                        </div>
                        <div className='text-white text-center  flex flex-row justify-center  '>
                            <div className='relative cursor-pointer'>
                                <Link href="/terms-of-services">
                                    <h1 className='underlineani me-2'> Terms of Services   </h1>
                                </Link>
                            </div>
                            <div className='relative'>
                                <Link href="/privacy-policy">
                                    <h1 className='underlineani'>| Privacy Policy</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}