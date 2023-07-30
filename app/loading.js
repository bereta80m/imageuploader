"use client";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";

function Loading({ IsLoading }) {
  useEffect(() => {
    const ResizesPage = ()=>{
      console.log("resize")
    }
    ResizesPage()
    window.addEventListener("resize", ResizesPage)
    window.removeEventListener("resize", ResizesPage)
  }, [])
  return (
    <div className="flex flex-col lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[60vw] xxs:w-[70vw] py-10 h-[20vh] px-10 rounded-lg  bg-white shadow-2xl gap-5 ">

<BarLoader color="#2f80ed" width={``}  className="z-30  "  />

    </div>
  );
}

export default Loading;
