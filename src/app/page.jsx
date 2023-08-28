'use client'
import HomePage from './Home/Page'
import pagetransition from "./Home/pagetransition.json";
import Lottie from "lottie-react";
import { useEffect, useState } from 'react'
import Cookies from './cookie'
import 'tailwindcss/tailwind.css'
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
},[])
  return (
    <>
        {loading ? (
      <>
        
          {/* <div className=" fixed  w-full h-screen"> */}
            <Lottie animationData={pagetransition} loop={false} />
        
      
      </>
    ) : (
    <>
 <HomePage/>
<Cookies/>
    </>
    )}</>

  )
}
