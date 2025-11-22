"use client"
import { useState } from "react";
import { motion, useScroll } from "motion/react";

export default function Home() {
  const [name , setName] = useState<boolean>(false)
  const [names , setNames] = useState<string []>([])
  const {scrollYProgress} = useScroll()
  const handleDelete = (i: number) => {
    setNames((prev) => prev.filter((_,index) => index !== i));
  }
  return (
    <div className="w-80 m-auto mt-20">
      {/* <h1 className="text-xl uppercase">please enter your name</h1>
      <input className="border rounded-sm px-2 my-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => {
        if(e.key === "Enter"){
          setNames((prev) => [...prev, name])
          setName("")
        }
      }}/>

      {
        names.length > 0 && <h2>Name List</h2>
      }
      <ul className="mt-2 flex flex-col gap-1">
        {
        names.map((n,i) => (
          <li className="" key={i} >{n} <span className="ml-10 font-medium text-sm border p-1 rounded-sm cursor-pointer" onClick={() => handleDelete(i)}>Delete</span></li>
        ))
      }
      </ul> */}

      <motion.div
      style={{ scaleX: scrollYProgress}}
      >

      </motion.div>
      <motion.div className="border min-w-6 min-h-6 max-w-fit rounded-full tracking-tighter  cursor-pointer border-black/5 shadow-sm text-white bg-[#FF8040]"
      initial={{ scale: 0}}
      animate={{ scale: 1}}
      whileTap={{ scale: 0.95 }}
      onClick={() => setName(true)}
      transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.3 }}
      >
        {
          name? <motion.div
          initial={{ scale: 0.7}}
          animate={{ scale: 1}}
          className="px-3 py-1"
          transition={{duration: 0.2}}
          >
            Explore
          </motion.div> : null
        }
      </motion.div>
    </div>
  );
}