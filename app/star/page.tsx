"use client"
import { useState } from "react"

export default function star(){
    const [count, setCount] = useState(-1)
    return (
        <div className="w-80 m-auto">
            Star Page
            <div className="flex gap-1">
                {
                Array.from({length:5}).map((_,i) => (
                    <div key={i} className={`w-5 h-5 border rounded-full cursor-pointer transition-all  ${i <= count && "bg-amber-300" }` } onClick={() => setCount(i)}></div>
                ))
                }
            </div>
        </div>
    )
}