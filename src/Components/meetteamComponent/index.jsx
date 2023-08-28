'use client'
import { teamManber } from "./teamManber";
import Image from "next/image";
import { useEffect, useState } from "react";
import './team.css'
export default function MeetTeamComponent() {
  const [showMenber, setShowMenber] = useState([]);
  const [showAni, setShowAni] = useState(false);



  console.log(teamManber, ` hello worlg doog to go `)


  useEffect(() => {
    const delay = 800;
let timeoutId
    const showNextCard = (index) => {
      if (index < teamManber.length) {
         timeoutId = setTimeout(() => {
          setShowMenber((prev) => [...prev, index]);
          showNextCard(index + 1);
        }, delay);
      }
    };

    showNextCard(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className="px-4 ss:px-8 lg:px-16 mb-[145px] text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-3xl font-medium ss:text-4xl md:text-6xl lg:text-7xl team-header">
            The People Who <br></br> make the magic happen.
          </h1>
          <p className="mt-[15px] md:mt-[31px] text-[12px] md:text-[20px] inter font-normal team-para">
            At Smilax Global, we are proud to have a talented and dedicated team that brings a wealth of experience and expertise to everything we do.
            We understand that our success is built on the hard work and commitment of each member of our team. Let&apos;s get to know some of them:
          </p>
        </div>
        <div className="">
          <div className={`menber-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px] ${showMenber ? 'show' : ''}`}>
            {teamManber?.map((data, index) => (

              <div key={index}
                className={`card education mt-5 menber-list ${showMenber.includes(index) ? 'show' : ''
                  }`} >



                <Image className="overlay h-28 w-28 lg:h-[160px] lg:w-[160px] xl:h-[180px] xl:w-[180px]  object-cover	" src={data.img} alt={data.name}
                />

                <div className="nameAndPosition">
                  <h1 className=" text-center mt-[30px] lg:mt-[56px] font-semibold xl:text-[23px] lg:text-[18px] sm:text-[20px] ss:text-[18px] text-[16px] inter">{data.name}</h1>
                  <p className="  text-center text-[12px] lg:text-[16px] inter italic font-light	">{data.position}</p>
                </div>
              </div>





            ))}

          </div>
        </div>

      </div>
    </>
  )
}