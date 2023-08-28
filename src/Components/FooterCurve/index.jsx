'use client'
import React from 'react'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';

export default function FooterCurve() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.8], [30, 0])
  return (
    <>
               <motion.div style={{ height }} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
    </>
  )
}
