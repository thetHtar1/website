'use client'
import { useRef } from 'react';
import locationicon from '../../../public/images/location-icon.png'
import teleicon from '../../../public/svg/tele.svg'
import emailicon from '../../../public/svg/email.svg'
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import sendiocn from "../../../public/svg/send.svg"
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useScroll, useTransform, motion } from 'framer-motion';
import './contact.css'



const Suboptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Technical Inquiry', label: 'Technical Inquiry' },
  { value: 'vanSales Enquiryilla', label: 'Sales Enquiry' },
];


export default function ContactComponent() {
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.8], [30, 0])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [showMap, setShowMap] = useState(false);
  const [showContactBox, setShowContactBox] = useState(false)
  const [selectedOption, setselectedOption] = useState(null)

  useEffect(() => {
    setShowMap(true);
    setShowContactBox(true);
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      {/* <Header/> */}
      <div className="mb-12  mt-[86px] sm:mt-[118px] ">
        <div className=" mb-20  px-4 ss:px-8 lg:px-16 text-black ">
          <h1 className="rany text-xl font-medium sm:text-[50px] xl:text-[80px] contact-us-title ">
            Contact Our Team
          </h1>
        </div>
        <div className="map-animation-container">
          <div className={`mb-4 mt-10 sm:mt-[37px] border-y-4 border-black map-animation ${showMap ? 'show' : ''}`} >
            <iframe className="h-[204px] w-full sm:h-[500px] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.4049308447065!2d96.15202907587218!3d16.80625611928481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecf56d8d5091%3A0x942bd424a14ee28e!2sSmilax%20Global%20Co.%2C%20Ltd!5e0!3m2!1smy!2smm!4v1684551167065!5m2!1smy!2smm"
              //  width="600"
              //   height="450" 
              //   style="border:0;" 
              //   allowfullscreen="" 
              //   loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >

            </iframe>
          </div>
        </div>
        <div className="sm:flex  px-4 " >
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0  sm:basis-[60%]">
            <div className="flex flex-row justify-center px-4 sm:basis-[50%] contact-us-address">
              <div className="basis-[10%] sm:basic-[5%]">
                <Image className="md:mt-2" src={locationicon} alt="locationicon" />
              </div>
              <div className="basis-[90%] sm:basic-[95%] text-black">
                <p className="text-xs md:text-[14px]">
                  Room:1407, 13th Floor, Yuzana Tower, Corner of Shwe Gon Taing Junction & Kabaraye Pagoda Road, Bahan Township, Yangon, Myanmar.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-2  sm:basis-[50%] contact-us-phone">
              <div className="flex flex-row justify-center px-4">
                <div className="basis-[10%] ">
                  <Image className="" src={emailicon} alt="emailicon" />
                </div>
                <div className="basis-[90%] text-black">
                  <p className="text-xs  md:text-[14px]">
                    contact@smilaxglobal.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row px-4">
                <div className="basis-[10%] ">
                  <Image className="" src={teleicon} alt="teleicon" />
                </div>
                <div className="basis-[90%] text-black">
                  <p className="text-xs  md:text-[14px]">
                    09-771 23 23 23,  09-773 27 27 27,  09-774 17 17 17
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="sm:basis-[40%]"></div>
        </div>
        <div className={`contact-box mt-32 px-4 ss:px-8  sm:border-2 sm:border-black sm:px-[39px] sm:rounded-tr-3xl sm:rounded-bl-3xl sm:absolute sm:top-[45px]  
            sm:right-[35px] lg:right-[56px] sm:bg-white sm:w-[360px]  md:w-[450px] xl:w-[502px] ${showContactBox ? 'show' : ''}`}>
          <div className="mt-5 sm:mt-[50px] text-black">
            <h1 className="inter italic text-3xl font-semibold	">
              Get in Touch
            </h1>
          </div>
          {/* 
            <form onSubmit={handleSubmit(onSubmit)}>

            <label>Name</label>
      <input
      className="border-0 placeholder-black font-medium text-[15px] w-full"
        {...register("Name", {
          required: true,
         
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
            </form> */}
          {/* <div className="">
            <div  className=" border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px]">
                <input className="border-0 placeholder-black font-medium text-[15px] w-full" type="text" placeholder="Name" style={{border: "none", outline: "none"}}/>
            </div>
            <div  className=" border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px]">
                <input className="border-0	placeholder-black  font-medium text-[15px] w-full" type="text" placeholder="Email" style={{border: "none", outline: "none"}}/>
            </div>
            <div  className=" border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px]">
                <input className="border-0	placeholder-black font-medium text-[15px]" type="text" placeholder="Phone" style={{border: "none", outline: "none"}}/>
            </div>
            <div  className="font-medium text-[15px] border-b-2 border-black pb-[15px] mt-2 sm:mt-[10px] flex justify-between">
              
   <Select 
   className="subjectbox"
   placeholder="Subjects"
   defaultValue={selectedOption}
   onChange={setselectedOption}
   options={Suboptions}
   style={{border: "none", outline: "none"}}
   />


 
            </div>
            <div  className=" border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px]">
                <input className=" placeholder-black font-medium text-[15px]" type="text" placeholder="Message" style={{border: "none", outline: "none"}} />
            </div>
            <div className="mt-[14px] sm:mt-[25px]">
        <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />
        </div>  
        <div className="flex justify-end mt-[25px] sm:mb-[48px]">
            <button className="flex items-center gap-1 border-2 border-black rounded-full px-2 py-1" type="submit">send to us   <Image className="" src={sendiocn} alt="send"/></button>
          
        </div>
</div> */}

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <input
              id="name"
              placeholder="Name"
              className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] outline-none"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: true })}
            />

            {errors.name && errors.name.type === "required" && (
              <span role="alert" className="text-red-500">
                This is required
              </span>
            )}

            <input
              id="email"
              className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] outline-none"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <span role="alert" className="text-red-500">
                {errors.email.message}
              </span>
            )}

            <input
              id="phone"
              placeholder="Phone"
              className="placeholder-black text-black  font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] border-0 outline-none"
              aria-invalid={errors.phone ? "true" : "false"}
              // {...register("phone", { required: true })}
              {...register("phone")}
            />

            {/* {errors.phone && errors.phone.type === "required" && (
                <span role="alert" className="text-red-500">
                  This is required
                </span>
              )} */}

            <select
              id="gender"
              {...register("gender", { required: "Please select a subjects" })}
              className="text-black placeholder-black font-medium text-[15px] w-full border-b-2 outline-none border-black
               pb-[15px] mt-2 sm:mt-[25px]"
              placeholder="Subjects"
            >
              <option value="" disabled selected hidden>
                Subjects
              </option>
              <option value="female">General Inquiry</option>
              <option value="male">Technical Inquiry</option>
              <option value="other">Sales Enquiry</option>
            </select>

            {errors.gender && (
              <span role="alert" className="text-red-500">
                {errors.gender.message}
              </span>
            )}

            <input
              id="message"
              placeholder="Message"
              className="placeholder-black text-black  font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] outline-none"
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", { required: true })}
            />

            {errors.message && errors.message.type === "required" && (
              <span role="alert" className="text-red-500">
                This is required
              </span>
            )}


            <div className="mt-[14px] sm:mt-[25px]">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </div>

            <div className="flex justify-end mt-[25px] sm:mb-[48px]">
              <button
                className="flex items-center gap-1 border border-black rounded-full px-2 py-1 text-black"
                type="submit"
              >
                send to us <Image className="" src={sendiocn} alt="send" />
              </button>
            </div>
          </form>
        </div>


      </div>



      {/* <Footer/> */}
    </>

  )
}