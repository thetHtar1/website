'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Magnetic from '../Magnetic/Magnetic'
import Link from "next/link";

const projects = [
  {
    title: "01 Software Solutions",
    src: "homeimg1.jpg",
    color: "#000000"
  },
  {
    title: "02 Web Solutions",
    src: "homeimg2.jpg",
    color: "#8C8C8C"
  },
  {
    title: "03 Call Center & CRM Solutions",
    src: "homeimg1.jpg",
    color: "#EFE8D3"
  },
  {
    title: "04 Security Solutions",
    src: "homeimg2.jpg",
    color: "#706D63"
  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <div className=' sm:mt-[110px] xs:mt-[25px] lg:mt-[200px]'>

      <div className='group ' >

        <div className='mt-24 sm:mt-1 xs:mt-1 relative '>
          <Magnetic>
            <div>
              <span className='h-20 w-20 right-20 -bottom-10 sm:h-32 sm:w-32 sm:right-20 sm:-bottom-16 ss:w-32 ss:h-32 md:right-40 
         lg:h-40 lg:w-40 lg:right-60 lg:-bottom-20
             rounded-full absolute bg-black block border boder-white-700 duration-500 '></span>
              <div className='relative'>
                <span className='text-white absolute right-24 -top-2 sm:right-[7rem] sm:-top-3 ss:right-16 ss:-top-4 md:right-48 lg:right-[275px] lg:-top-4'>
                <Link href="/about-us">
                  <h1 className='text-xs sm:text-base ss:text-lg  font-inter lg:text-xl'>
                    About us
                  </h1></Link>
                </span>
              </div>
            </div>
          </Magnetic>
          <span className='w-[85%] h-px bg-black block mx-auto	duration-500'>
          </span>

        </div>



      </div>
      <div className="mt-24 ms-10 lg:ms-20 sm:mt-20 sm:ms-16">
        <div
          className=''
        >
          <h1 className="text-3xl ss:text-5xl sm:text-5xl lg:text-[60px] font-normal	italic text-black">
            Your Technology <br></br> Partner for Success
          </h1>{" "}
        </div>
      </div>
      <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
        <div className={styles.body}>
          {
            projects.map((project, index) => {
              return <Project index={index} title={project.title} manageModal={manageModal} key={index} />
            })
          }
        </div>

        <>
          <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
              {
                projects.map((project, index) => {
                  const { src, color } = project
                  return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                    <Image
                      src={`/${src}`}
                      width={300}
                      height={0}
                      alt="image"
                    />
                  </div>
                })
              }
            </div>
          </motion.div>
          <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
          <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
        </>
      </main>
    </div>

  )
}
