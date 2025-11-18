"use client"
import { useState } from "react";


export default function Home() {
  const [name , setName] = useState<string>("")
  const [names , setNames] = useState<string []>([])
  return (
    <div className="w-80 m-auto mt-20">
      <h1>please enter your name</h1>
      <input className="border rounded-sm px-2" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => {
        if(e.key === "Enter"){
          setNames((prev) => [...prev, name])
          setName("")
        }
      }}/>

      <p>your name is :</p>
      {
        names.map((n,i) => (
          <li key={i}>{n}</li>
        ))
      }
    </div>
  );
}