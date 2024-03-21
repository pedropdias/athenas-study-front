"use client"

import { useState } from 'react'
import SearchBox from "./SearchBox";
import Formacao from './Formacao';
import Footer from './Footer';

export default function Body(){
  return(
    <div className="h-vh">
      <div className=" h-full bg-gradient-to-tr from-cyan-500 to-blue-500 block justify-center relative pb-48">
        
        <SearchBox />
        <Formacao />
        <Footer />
      
      </div>
    </div>
  )
}