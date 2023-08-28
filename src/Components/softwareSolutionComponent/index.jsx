'use client'
import Image from "next/image"
import callImg1 from '../../../public/images/call.jpg'
import callImg2 from '../../../public/images/callcenter4.jpg'
import callImg3 from '../../../public/images/callcenter3.jpg'
import callImg4 from '../../../public/images/callcenter2.jpg'
import { useState, useRef, useEffect } from "react"
import './softwaresolution.css'

export default function SoftwareSolutionComponent() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSec, setIsVisibleSec] = useState(false);
  const [isVisibleThird, setisVisibleThird] = useState(false);
  const textContainerRef = useRef(null);
  const textContainerSecRef = useRef(null);
  const textContainerThirdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textContainer = textContainerRef.current;
      if (textContainer) { // Check if the ref has a value
        const textContainerTop = textContainer.offsetTop;
        const textContainerHeight = textContainer.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTop &&
          windowScrollTop <= textContainerTop + textContainerHeight &&
          !isVisible
        ) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleScrollSec = () => {
      const textContainerSec = textContainerSecRef.current;
      if (textContainerSec) { // Check if the ref has a value
        const textContainerTopSec = textContainerSec.offsetTop;
        const textContainerHeightSec = textContainerSec.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTopSec &&
          windowScrollTop <= textContainerTopSec + textContainerHeightSec &&
          !isVisibleSec
        ) {
          setIsVisibleSec(true);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSec);

    return () => {
      window.removeEventListener("scroll", handleScrollSec);
    };
  }, [isVisibleSec]);

  useEffect(() => {
    const handleScrollThird = () => {
      const textContainerThird = textContainerThirdRef.current;
      if (textContainerThird) { // Check if the ref has a value
        const textContainerTopThird = textContainerThird.offsetTop;
        const textContainerHeightThird = textContainerThird.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;

        if (
          windowScrollTop + windowHeight >= textContainerTopThird &&
          windowScrollTop <= textContainerTopThird + textContainerHeightThird &&
          !isVisibleThird
        ) {
          setisVisibleThird(true);
        }
      }
    };

    window.addEventListener("scroll", handleScrollThird);

    return () => {
      window.removeEventListener("scroll", handleScrollThird);
    };
  }, [isVisibleThird]);
  return (
    <>
      {/* <Header/> */}
      <div className=" px-4 ss:px-8 lg:px-32 mt-4 mb-32 text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-4xl font-medium lg:text-7xl callcenter-h1 ">
            Software Solutions
          </h1>
          <p className="mt-2 font-normal text-xs inter lg:text-lg callcenter-p text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
          </p>
        </div>
        <div className="mt-7 flex flex-col gap-5">
          <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-medium text-xl sm:hidden">SSHR</h1>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg1} alt="callImg" />
            </div>
            <div className="sm:basis-1/2 callcenter-para">
              <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl">SSHR</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
              {/* <p className="font-normal text-xs inter mt-3 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p> */}

              <button className="forward-icon-container hidden md:block md:flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3  ">For more details
                <svg className="forward-icon " width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="md:hidden flex forward-button1 border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white hover:forward-icon-text-white mt-3">For more details
                <svg className="forward-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>


            </div>
          </div>
          <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-medium text-xl sm:hidden">Call Centre Dialer</h1>

            <div ref={textContainerSecRef} className={`fade-scroll sm:basis-1/2 ${isVisibleSec ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl sm:text-right">Call Centre Dialer</h1>
              <p className="text-justify hidden sm:block font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
              <button className="forward-icon-container hidden sm:block float-right sm:flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3">For more details
                <svg className="forward-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg2} alt="callImg" />
            </div>
            <p className="text-justify sm:hidden font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
              ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
            <button className="forward-button2 sm:hidden float-right flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3">For more details
              <svg className="forward-icon hover:text-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-medium text-xl sm:hidden">Video Conferencing</h1>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg3} alt="callImg" />
            </div>
            <div className={`item sm:basis-1/2 ${isVisible ? "fade-and-scroll-right-to-left" : ""
              }`}
              ref={textContainerRef}>
              <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl">Video Conferencing</h1>
              <p className="text-justify font-normal text-xs inter mt-3 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
              <button className="forward-icon-container hidden sm:block sm:flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3">For more details
                <svg className="forward-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button className="sm:hidden forward-button1  flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3">For more details
                <svg className="forward-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
            <h1 className="rany font-medium text-xl sm:hidden">IVR</h1>

            <div ref={textContainerThirdRef} className={`fade-scroll sm:basis-1/2 ${isVisibleThird ? 'fade-in-div' : ''}`}>
              <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl  sm:text-right">IVR</h1>
              <p className=" text-justify hidden sm:block font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
              <button className="forward-icon-container hidden sm:block float-right sm:flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3">For more details
                <svg className="forward-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33203 7.50065L12.4987 3.33398L16.6654 7.50065" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33203 16.6673H9.16536C10.0494 16.6673 10.8973 16.3161 11.5224 15.691C12.1475 15.0659 12.4987 14.218 12.4987 13.334V3.33398" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className="sm:basis-1/2">
              <Image className="mt-4 sm:mt-0 h-full w-full rounded" src={callImg4} alt="callImg" />
            </div>
            <p className="text-justify sm:hidden font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
              ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
            <button className="forward-button2 sm:hidden float-right flex border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-3">For more details
              <svg className="forward-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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