'use client'
import Image from "next/image"
import callImg1 from '../../../public/images/call.jpg'
import callImg2 from '../../../public/images/callcenter4.jpg'
import callImg3 from '../../../public/images/callcenter3.jpg'
import callImg4 from '../../../public/images/callcenter2.jpg'
import { useState, useRef, useEffect } from "react"
import './callcenter.css'
export default function CallCenterComponent() {
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
 return(
    <>
    {/* <Header/> */}
    <div className=" px-4 ss:px-8 lg:px-16 mt-4 mb-32 text-black ">
        <div className="mt-[86px] sm:mt-[118px]">
            <h1 className="rany text-4xl font-medium lg:text-7xl callcenter-h1">
            Call Centre & 
            CRM Solutions
            </h1>
            <p className="font-normal text-xs inter lg:text-lg callcenter-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
             Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In 
            </p>
        </div>
        <div className="mt-7 flex flex-col gap-5">
            <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
                <h1 className="rany font-medium text-xl sm:hidden">IP PBX</h1>
                <div className="sm:basis-1/2 ">
                    <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg1} alt="callImg"/>
                </div>
                <div className="sm:basis-1/2 callcenter-para">
                <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl">IP PBX</h1>
                <p className="font-normal text-xs inter mt-3 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
                     </div>
            </div>
            <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
                <h1  className="rany font-medium text-xl sm:hidden">Call Centre Dialer</h1>
              
                <div ref={textContainerSecRef} className={`fade-scroll sm:basis-1/2 ${isVisibleSec ? 'fade-in-div' : ''}`}>
                <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl sm:text-right">Call Centre Dialer</h1>
                <p className="hidden sm:block font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
                     </div>
                     <div className="sm:basis-1/2">
                     <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg2} alt="callImg"/>
                </div>
                <p className=" sm:hidden font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
            </div>
            <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
                <h1  className="rany font-medium text-xl sm:hidden">Video Conferencing</h1>
                <div className="sm:basis-1/2 ">
                <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg3} alt="callImg"/>
                </div>
                <div className={`item sm:basis-1/2 ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}
            ref={textContainerRef}>
                <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl">Video Conferencing</h1>
                <p className="font-normal text-xs inter mt-3 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
                     </div>
            </div>
            <div className="border-b-2 border-black sm:border-0 pb-4 sm:flex sm:flex-row sm:gap-4 sm:items-center lg:gap-10">
                <h1  className="rany font-medium text-xl sm:hidden">IVR</h1>
              
                <div ref={textContainerThirdRef} className={`fade-scroll sm:basis-1/2 ${isVisibleThird ? 'fade-in-div' : ''}`}>
                <h1 className="rany font-medium text-xl hidden sm:block lg:text-4xl  sm:text-right">IVR</h1>
                <p className="hidden sm:block font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
                     </div>
                     <div className="sm:basis-1/2">
                     <Image className="mt-4 sm:mt-0 h-full w-full rounded " src={callImg4} alt="callImg"/>
                </div>
                <p className=" sm:hidden font-normal text-xs inter mt-3 lg:text-base  sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
                     ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisq</p>
            </div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
 )

}

// mt-[86px] sm:mt-[118px]