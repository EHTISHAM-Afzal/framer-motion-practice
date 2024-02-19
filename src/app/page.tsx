"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Expample from "./Example";

export default function Home() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* <motion.div
        animate={{
          scale: [1, 1, 2, 2, 1],
          rotate: [0, 170, 170, 170, 0],
          borderRadius: [0, 0, 50, 50, 0],
        }}
        transition={{
          duration: 2,
          repeat:Infinity,
          repeatDelay: 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // drag={'x'}
        // dragConstraints={{left : -100 , right : 100}}
        className="h-16 w-16 bg-lime-500"
      /> */}
      
      <motion.ul
    initial="hidden"
    animate="visible"
    variants={list}
  >
    <motion.li variants={item}>1</motion.li>
    <motion.li variants={item}>1</motion.li>
    <motion.li variants={item}>1</motion.li>
  </motion.ul>

      <Expample />

    </main>
  );
}
