"use client"
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        src: "2C2P logo.png"
    },
    {
        src: "A bank logo.png"
    },
    {
        src: "A bank logo.png"
    },
    {
        src: "Arch logo.png"
    },
    {
        src: "awba logo.png"
    },
    {
        src: "Aya bank logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },

]

const slider2 = [

    {
        src: "2C2P logo.png"
    },
    {
        src: "A bank logo.png"
    },
    {
        src: "A bank logo.png"
    },
    {
        src: "Arch logo.png"
    },
    {
        src: "awba logo.png"
    },
    {
        src: "Aya bank logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
    {
        src: "AZU logo.png"
    },
]

export default function IndexComponent() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])

    return (
        <div className='main-container'>
            <div className='ms-10 lg:ms-20 mb-10 lg:mb-1'>
                <div>
                    <h1 className="text-3xl ss:text-5xl sm:text-7xl lg:text-[60px] font-normal	italic text-black">
                        Our Successful <br></br> Customers
                    </h1>{" "}
                </div>
            </div>
            <div ref={container} className={styles.slidingImages}>
                <motion.div style={{ x: x1 }} className={styles.slider}>
                    {
                        slider1.map((project, index) => {
                            return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                                <div className={styles.imageContainer}>
                                    <Image
                                    className='filter grayscale hover:grayscale-0'
                                        fill={true}
                                        alt={"image"}
                                        src={`/customer_logo/${project.src}`} />
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{ x: x2 }} className={styles.slider}>
                    {
                        slider2.map((project, index) => {
                            return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image
                                    className='filter grayscale hover:grayscale-0'
                                        fill={true}
                                        alt={"image"}
                                        src={`/customer_logo/${project.src}`} />
                                </div>
                            </div>
                        })
                    }
                </motion.div>
     
            </div>

        </div>

    )
}
