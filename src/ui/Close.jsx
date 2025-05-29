import React from 'react'
import { IoClose } from "react-icons/io5";

export default function Close({closeBar}) {

    {/* 
        <span
                  className="my-2 block cursor-pointer text-right text-green-600 transition hover:font-bold"
                  onClick={}
                >
                  <IoClose />
                </span>
        */}
  return (
    <div className="cursor-pointer rounded-full px-3 py-1 font-bold transition-all hover:border-4 hover:border-green-600"    
    onClick={closeBar}
  >
    <IoClose />
    </div>
  )
}
