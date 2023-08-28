'use client'
import img1 from "../../../public/images/partner1.jpg"
import img2 from "../../../public/images/partner2.jpg"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import './websolution.css'
export default function WebSolutionComponent() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);
  const divRefs = useRef([]); // Ref to store references of each div
  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const handleIntersection = (entries, observer) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('fade-in')) {
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, delay);
          delay += 600; // Adjust the delay between each div
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    divRefs.current.forEach((divRef) => {
      observer.observe(divRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className=" px-4 ss:px-8 lg:px-16 mt-4 mb-32 text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-3xl font-medium lg:text-7xl websolution-h1 ">
            Web Solutions
          </h1>
          <p className="font-normal text-xs inter lg:text-lg websolution-p text-justify mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
          </p>
        </div>
        <div className="mt-7 border-b-2 border-gray-400 pb-5">
          <h1 className="text-xl ss:text-2xl md:text-[40px] web-body-h1">Website Development</h1>

          <div className="flex flex-col lg:flex-col-reverse" ref={(ref) => (divRefs.current[1] = ref)}>
          <Image className={`web-bodyImg w-screen h-[400px] object-cover rounded ${showImage ? 'show' : ''}`} src={img1} alt="web-solution-1" />

          <p className="text-xs mt-2.5 md:text-base  ss:block web-body-p text-justify mb-8">
              Smilax Global has the proven expertise in developing websites that succeed for you by bringing in enquiries,
              thereby generating sales and becoming an asset to your business. Our aim is committed towards flexible approach
              and try to accommodate all the needs of our clients by providing easy navigation, interface design, fast download
              times, cross platform compatibility, future expansion, database integration and back-end web programming.We provide
              affordable web solutions for companies or individuals based on their needs and we deliver high quality website. Mainly,
              we are focused on meeting exceeding client`&apos;`s expectations at all times. We ensure that each website development project
              is treated as an individual project. Right from assigning a dedicated team for the project,
              communicating with customer, and final delivery we make sure that proper care is given to the project.
            </p>
    
          </div>

        </div>              
        <div className="mt-7 security-body ">
          <div className="securtiy-body-items" ref={(ref) => (divRefs.current[0] = ref)}>
            <h1 className="text-xl ss:text-2xl md:text-[40px] items-security" >Domain Hosting</h1>

          </div>
          <div className="securtiy-body-items flex flex-col lg:flex-col-reverse "   >
          <Image className={`web-bodyImg w-screen  h-[400px] object-cover rounded ${showImage ? 'show' : ''}`} src={img2} alt="web-solution-1" />
            <p className="text-xs mt-2.5 md:text-base  web-body-p  ss:block items-security text-justify mb-8" >
              Web hosting from Smilax Global gives you everything you need to get your website up and running in minutes.
              The range of great value hosting packages that will fit your needs, no matter what size server capacity you require
              and provides a solution for personal websites, blogs and businesses of all sizes.
              Our servers are housed in a state-of-the-art data centre in United Kingdom and our service is backed by our technical support team.
            </p>
          



          </div>
          <div className="mt-2.5 md:mt-[30px] ">
          </div>

          <div className="grid justify-items-center ">
            <button className=" flex border-black border-2 px-2 rounded-2xl py-1 md:rounded-3xl hover:bg-black hover:text-white mt-4   ">For more details
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      {/* <Footer/> */}
    </>
  )
}