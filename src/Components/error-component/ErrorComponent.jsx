'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Error from '../../../public/Text.png'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default function ErrorComponent() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
  return (
<>
            
<div ref={container} className={styles.slidingImages}>
                <motion.div>
             
                <Image className='w-[282px] h-[141px] sm:w-[642px] sm:h-[354px] mx-auto mt-36' src={Error} alt="error"  />

                </motion.div>
     
         </div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
      
    {/* <Header/> */}
   



</>

  
  )
}
