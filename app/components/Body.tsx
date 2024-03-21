"use client"

import { useState } from 'react'
import SearchBox from "./SearchBox";

export default function Body(){
  return(
    <div className="h-full">
      <div className=" h-full bg-gradient-to-tr from-cyan-500 to-blue-500">
        
        <SearchBox />
      
      </div>
    </div>
  )
}