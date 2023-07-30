
"use client"
import Image from 'next/image'
import Content from './components/Content'
import { UseGlobal } from './context/GlobalContext'
import { useEffect, useState } from 'react'
import Loading from './loading'
import Successfull from './components/Successfull'

export default function Home() {
  const {progress, setProgress,onComplete, setOnComplete} = UseGlobal()

  return (
    <main className='grid place-items-center w-full h-screen bg-[#fafafb]'>
     <Content />
    </main>
  )
}
