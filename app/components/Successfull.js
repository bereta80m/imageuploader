"use client";
import Image from "next/image";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Successfull({url}) {
  const HandleCopy =async ()=>{
    if (url) {
      await navigator.clipboard.writeText(url);
      Toastify({
        text: "Copied",
        className: "info  ",
        gravity: "bottom", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

    }

  }
  return (
    <div className="flex flex-col items-center lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[60vw] xxs:w-[70vw]  py-10 lg:h-[70vh] rounded-lg  bg-white shadow-2xl gap-5 ">
      <div className="flex flex-col items-center gap-5">
        <BsFillCheckCircleFill className="text-3xl text-[#219653]" />
        <p className="text-xl font-semibold  text-black/70">Uploaded Successfully</p>
      </div>
      <div className="flex flex-col gap-5 cursor-pointer bg-[#f6f8fb] items-center justify-center lg:w-[25vw] lg:h-[30vh] md:w-[35vw] sm:w-[45vw] xs:w-[55vw] xxs:w-[65vw] rounded-lg   ">
        <Image src={url}  alt="Image No found" className="lg:w-[25vw] lg:h-[30vh] md:w-[35vw] sm:w-[45vw] xs:w-[55vw] xxs:w-[65vw]  rounded-lg" objectFit="cover" width={400} height={500}/> 
      </div>
      <div className="flex items-center  justify-between lg:w-[25vw] lg:h-[30vh] md:w-[35vw] sm:w-[45vw] xs:w-[55vw] xxs:w-[65vw] mt-10 border rounded-lg bg-[#f6f8fb] shadow-lg">
        <p onClick={()=>HandleCopy()} className="truncate lg:w-[15vw] px-2">{`${url}`}</p>
        <button onClick={()=>HandleCopy()} className="text-white px-5 mx-1 py-2 bg-[#2f80ed] rounded-lg">
          Copy link
        </button>
      </div>
    </div>
  );
}

export default Successfull;