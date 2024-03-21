// Essa será a página principal, ainda não abri Task para criação dela - Andre
"use client"

import { useState } from 'react';
import Body from "./components/Body";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Header /> 
      <Body />
   </main>
  );
}
