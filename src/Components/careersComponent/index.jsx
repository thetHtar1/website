'use client'
import { useState, useRef, useEffect } from "react";
import {ArrowDownIcon} from '@chakra-ui/icons'
import { ArrowUpIcon } from "@chakra-ui/icons";
import './careers.css'


export default function CareersComponent() {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const textRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevOpenDropdowns) => {
      const updatedOpenDropdowns = [...prevOpenDropdowns];
      updatedOpenDropdowns[index] = !updatedOpenDropdowns[index];
      return updatedOpenDropdowns;
    });
  };

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('slide-in-job');
    }
  }, []);

    return(
        <>
        {/* <Header/> */}
        <div className="inter px-4 ss:px-8 lg:px-16 font-semibold mb-96 mt-[86px] sm:mt-[118px] text-black">
            <div className=" mb-6 md:mb-20">
            <div className=" job-banner">
              <h1 className="rany text-3xl font-medium ss:text-4xl lg:text-7xl ">
              Be part of <br></br>our success story
              </h1>
            </div>
           
            </div>
         
            <div className="border-y border-gray-400 py-2 sm:py-4 lg:py-8 mt-8 " onClick={() => toggleDropdown(0)}>
            <div className="flex justify-between " >
                <h1 className="sm:text-2xl lg:text-2xl">
                    Senior Q.A Taster
                </h1>
                <div className="flex">
                    <h1 className="sm:text-2xl lg:text-2xl">1 post</h1>
                    {openDropdowns[0] ? (
                  <ArrowUpIcon
                    className="mt-1 sm:text-2xl lg:text-2xl"
                    onClick={() => toggleDropdown(0)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="mt-1 sm:text-2xl lg:text-2xl"
                    onClick={() => toggleDropdown(0)}
                  />
                )}
                </div>

            </div>
            <div className={`details ${openDropdowns[0] ? "open" : "closed"}`}>
            <div className="mt-4">
                <h1 className="text-sm">Job Description:</h1>
                <h1 className="text-sm">We are seeking a highly motivated and experienced .NET Developer to join our team. The ideal candidate will have a strong background
                     in developing web applications using .NET and related technologies.</h1>
            </div>
            <div>
                <h1 className="text-sm">Responsibilities</h1>
                <ul >
                    <li className="list-disc text-sm ml-4">Develop and maintain web applications using C#, .NET, and related technologies</li>
                    <li className="list-disc text-sm ml-4">Participate in the full software development life cycle, from requirements gathering and design to implementation and testing</li>
                    <li className="list-disc text-sm ml-4">Collaborate with cross-functional teams, including business analysts, project managers, and other developers, to deliver high-quality solutions</li>
                    <li className="list-disc text-sm ml-4">Write clean, well-documented, and reusable code</li>
                    <li className="list-disc text-sm ml-4">Perform code reviews and provide feedback to other developers</li>
                </ul>
            </div>
            <div>
                <h1 className="text-sm">Requirements</h1>
                <ul>
                    <li className="list-disc text-sm ml-4">Bachelor`&apos;`s degree in Computer Science or related field</li>
                    <li className="list-disc text-sm ml-4">3+ years of experience in developing web applications using .NET and related technologies</li>
                    <li className="list-disc text-sm ml-4">Strong experience with C#, ASP.NET, and MVC</li>
                    <li className="list-disc text-sm ml-4">Experience with JavaScript frameworks such as Angular, React, or Vue</li>
                    <li className="list-disc text-sm ml-4">Familiarity with relational databases, such as SQL Server or Oracle</li>
                    <li className="list-disc text-sm ml-4">Strong analytical and problem-solving skills</li>
                    <li className="list-disc text-sm ml-4">Excellent verbal and written communication skills</li>


                </ul>
            </div>
            <div className="text-center	my-4">
            <button className='	border-black border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white'>Upload your cv </button>
            </div>
            </div>
            </div>

            <div className="border-b border-gray-400  py-2 sm:py-4 lg:py-8 "   onClick={() => toggleDropdown(1)}>
            <div className="flex justify-between  ">
                <h1 className="sm:text-2xl lg:text-2xl">
                    Senior .net Developer
                </h1>
                <div className="flex">
                    <h1 className="sm:text-2xl lg:text-2xl">1 post</h1>
                    {openDropdowns[1] ? (
                  <ArrowUpIcon
                    className="mt-1 sm:text-2xl lg:text-2xl"
                    onClick={() => toggleDropdown(1)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="mt-1 sm:text-2xl lg:text-2xl"
                    onClick={() => toggleDropdown(1)}
                  />
                )}
                </div>

            </div>
            <div className={`details ${openDropdowns[1] ? "open" : "closed"}`}>
            <div className="mt-4">
                <h1 className="text-sm">Job Description:</h1>
                <h1 className="text-sm">We are seeking a highly motivated and experienced .NET Developer to join our team. The ideal candidate will have a strong background
                     in developing web applications using .NET and related technologies.</h1>
            </div>
            <div>
                <h1 className="text-sm">Responsibilities</h1>
                <ul >
                    <li className="list-disc text-sm ml-4">Develop and maintain web applications using C#, .NET, and related technologies</li>
                    <li className="list-disc text-sm ml-4">Participate in the full software development life cycle, from requirements gathering and design to implementation and testing</li>
                    <li className="list-disc text-sm ml-4">Collaborate with cross-functional teams, including business analysts, project managers, and other developers, to deliver high-quality solutions</li>
                    <li className="list-disc text-sm ml-4">Write clean, well-documented, and reusable code</li>
                    <li className="list-disc text-sm ml-4">Perform code reviews and provide feedback to other developers</li>
                </ul>
            </div>
            <div>
                <h1 className="text-sm">Requirements</h1>
                <ul>
                    <li className="list-disc text-sm ml-4">Bachelor`&apos;`s degree in Computer Science or related field</li>
                    <li className="list-disc text-sm ml-4">3+ years of experience in developing web applications using .NET and related technologies</li>
                    <li className="list-disc text-sm ml-4">Strong experience with C#, ASP.NET, and MVC</li>
                    <li className="list-disc text-sm ml-4">Experience with JavaScript frameworks such as Angular, React, or Vue</li>
                    <li className="list-disc text-sm ml-4">Familiarity with relational databases, such as SQL Server or Oracle</li>
                    <li className="list-disc text-sm ml-4">Strong analytical and problem-solving skills</li>
                    <li className="list-disc text-sm ml-4">Excellent verbal and written communication skills</li>


                </ul>
            </div>
            <div className="text-center	my-4">
            <button className='	border-black border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white'>Upload your cv </button>
            </div>
            </div>
            </div>

 
          
        </div>
        {/* <Footer/> */}
        </>
    )
}