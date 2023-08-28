'use client'
import Image from "next/image"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import BannerImage from "../../../public/Banner.png"
import { motion } from "framer-motion"
import 'animate.css'

export default function HomeBodyComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textContainer = textContainerRef.current;
      if (textContainer) { // Check if the ref has a value
        const textContainerTop = textContainer.offsetTop;
        const textContainerHeight = textContainer.offsetHeight;
        const windowScrollTop =
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

  // for 3 div
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
          delay += 500; // Adjust the delay between each div
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

    <div className="px-4 ss:px-8 lg:px-14 rany mt-[60px] sm:mt-[80px] ">
      <div>

        <div className="pt-4 lg:pt-10">
          <h1 className=" text-4xl ss:text-6xl lg:text-[120px] font-thin text-black leading-[3rem] lg:leading-[6rem] xs:leading-[4rem] sm:text-[75px] md:text-[200px] italic	">
            Transform your<br></br>
            visions into Reality
          </h1>
        </div>

        <div className="pt-4 sm:pt-24">
          <Image className="object-fill w-full h-full" src={BannerImage} alt="bannerImage"></Image>
        </div>


        <div className="flex flex-col sm:flex sm:flex-row gap-4 sm:gap-12 mt-6 sm:mt-20 div-container text-black">
          <div className=" div-items" ref={(ref) => (divRefs.current[0] = ref)}>

            <h1 className="text-xl italic md:text-3xl  font-medium div-fade-left	">Specialisation</h1>

            <p className="text-xs sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">Our team has extensive knowledge and expertise in delivering high-quality, innovative solutions to help clients achieve their goals.</p>
          </div>
          <span className="sm:block  bg-[#848482] line h-80%"></span>
          <div className=" div-items" ref={(ref) => (divRefs.current[1] = ref)}>
            <h1 className="text-xl italic md:text-3xl  font-medium	div-fade-left">Transparency</h1>
            <p className="text-xs sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">We value open communication and aim to build a trusting and transparent partnership with our clients.</p>
          </div>
          <span className="sm:block bg-[#848482] line h-80%"></span>
          <div className=" div-items" ref={(ref) => (divRefs.current[2] = ref)}>
            <h1 className="text-xl italic md:text-3xl font-medium	div-fade-left">Entrepreneurship</h1>
            <p className="text-xs sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">We are an enterprising team that is dedicated to finding creative solutions to challenges and exploring new technologies to provide the best possible solutions for our clients.</p>
          </div>
        </div>
      </div>

    </div>


  )
}