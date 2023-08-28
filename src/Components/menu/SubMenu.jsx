import { useState } from 'react';
import { menus } from './MenuData';
import Link from 'next/link';

const SubLinks = () => {
    const [heading, setHeading] = useState("")

    return (
        <>
            {menus.map((data) => (
                <div key={data.id}>
                    <div className=" px-3 md:cursor-pointer group font-inter ">
                        <Link href={data.url}>
                            <h1
                                className=" inter py-6 lg:hover:text-black  text-gray-500 transition-800 flex sm:justify-between items-center sm:pr-0 pr-5 text-md sm:text-[14px]	lg:text-md "
                                onClick={() =>
                                    heading !== data.name ? setHeading(data.name) : setHeading("")
                                }
                            >
                                {data.name}

                                {data.submenu && (
                                    <>
                                        {/* <span className="text-xl sm:hidden inline pt-2 ">
                    {data.submenu && <ion-icon
                    name={`${
                      heading === data.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                  }
                  </span>*/}
                                        <span className="text-xl sm:mt-1 sm:ml-2 sm:block md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                            <svg className="w-3 h-3 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>                </span>
                                    </>
                                )}

                                {/* down button */}
                                {/* <span className="text-xl sm:hidden inline">
                  <ion-icon
                    name={`${
                      heading === data.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl sm:mt-1 sm:ml-2 sm:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span> */}
                                {/* down button */}
                            </h1>
                        </Link>
                        {data.submenu && (
                            <div className=' '>
                                <div className="invisible mt-2  project h-0 absolute top-10  sm:left-28 sm:w-8/12 md:left-96 md:w-7/12 group-hover:sm:visible group-hover:sm:h-full">
                                    <div className="py-3">
                                        <div className="w-50 h-50 left-3 absolute mt-1 bg-gray-400 rotate-45"></div>
                                    </div>
                                    <div className=" z-40 relative bg-white shadow-[0_4px_4px_3px_rgba(0,0,0,0.25)] p-10 grid grid-cols-2 gap-4 rounded-2xl ">
                                        {data.subname ?(
                                        data.subname.map((oursubmenu) => (
                                            <div key={oursubmenu.id}>
                                                                        <div  className="flex flex-cols-2 ">
                                                <Link href={oursubmenu.setUrl}>
                                                    <div className='hover-leftline-animation'>
                                                        <h1 className="inter text-lg text-gray-700 font-semibold ml-2">
                                                            {oursubmenu.title}
                                                        </h1>
                                                        <h1 className='inter text-sm text-gray-600  ml-2'>{oursubmenu.desc}</h1>
                                                    </div>
                                                </Link>
                                            </div>
                                            </div>
                    
                                        ))):(
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* mobile menu */}

                    <div
                        className={`${heading === data.name ? "sm:hidden" : "hidden"}`}
                    >
                        {/* sublinks */}
                        {data.subname?.map((sname) => (
                            <div key={sname.id} >
                                <div>
                                    <Link href={sname.setUrl}>
                                        <h1 className="py-4 pl-7 font-lg sm:pr-0 pr-5">
                                            {sname.title}
                                        </h1>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default SubLinks