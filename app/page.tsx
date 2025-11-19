"use client"
import { useState } from "react";


export default function Home() {
  const [name , setName] = useState<string>("")
  const [names , setNames] = useState<string []>([])
  const handleDelete = (i: number) => {
    setNames((prev) => prev.filter((_,index) => index !== i));
  }
  return (
    <div className="w-80 m-auto mt-20">
      <h1 className="text-xl uppercase">please enter your name</h1>
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
      </ul>
    </div>
  );
}