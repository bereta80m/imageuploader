"use client";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../Firebase/FireConfig";
import { UseGlobal } from "../context/GlobalContext";
import Successfull from "./Successfull";
import Loading from "../loading";

function Content() {
  const {onComplete, setOnComplete } = UseGlobal();
  const [progress, setProgress] = useState(0);
  const [IsLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    // Do something with the dropped files (e.g., upload, process, etc.)
    HandleChoose(files)

  };

  const HandleChoose = async (item) => {
    try {
      const FileToUpload = item[0];
      const StorageRef = ref(storage, `files/${FileToUpload.name}`);
      const task = uploadBytesResumable(StorageRef, FileToUpload);
      task.on(
        "complete",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          setIsLoading(true)
          console.log("uploading....... ");
        },
        (error) => {
          console.log("Error", error);
        },
        () => {
        setIsLoading(false)
          console.log("Successfully uploaded");
          setOnComplete(true);
        }
      );
      await uploadBytes(StorageRef, FileToUpload);
      const DownloadUrl = await getDownloadURL(StorageRef);
      setUrl(DownloadUrl)
      console.log(DownloadUrl);
    } catch (error) {
      console.log(error);
    }
  };

  if (onComplete) {
    console.log(onComplete)
    return <Successfull url={url}/>;
  } else if (IsLoading) {
    return (
        <>
        <Loading IsLoading={IsLoading} />
        </>
    )
  } 
  else {
    return (
      <div className="flex flex-col items-center lg:w-[30vw] md:w-[40vw] sm:w-[50vw] xs:w-[60vw] xxs:w-[70vw]  py-10 lg:h-[70vh] rounded-lg  bg-white shadow-2xl gap-5 ">
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-semibold ">Upload your image</p>
          <p className="text-xs text-black/50">File should be Jpeg,Png...</p>
        </div>
        <div      onDragOver={handleDragOver}
      onDrop={handleDrop} className="flex flex-col gap-5 cursor-pointer bg-[#f6f8fb] items-center justify-center lg:w-[25vw] lg:h-[30vh] md:w-[35vw] sm:w-[45vw] xs:w-[55vw] xxs:w-[65vw]  rounded-lg border border-dashed border-blue-500 ">
          <div className="bg-imgageSVG w-40 h-32 bg-no-repeat bg-contain " />
          <p className="text-black/50">Drag & Drop your image here</p>
        </div>
        <p className="text-black/50">OR</p>
    <label
        htmlFor="fileInput"
        className="text-white px-4 py-2 bg-[#2f80ed] rounded-lg shadow-md cursor-pointer"
      >
        Choose a file
      </label>
      <input
        type="file"
        id="fileInput"
        name="customFileName" // Set a custom name for the file input
        
        onChange={(e) => HandleChoose(e.target.files) }
        className="hidden"
      />
      </div>
    );
  }
}

export default Content;

/*


"use client";
import React from "react";

function Content() {
  return (
    <div className="flex flex-col items-center w-[30vw] py-10 h-[70vh] rounded-lg  bg-white shadow-2xl gap-5 ">
      <div className="flex flex-col items-center gap-5">
        <p className="text-xl font-semibold ">Upload your image</p>
        <p className="text-xs text-black/50">File should be Jpeg,Png...</p>
      </div>
      <div className="flex flex-col gap-5 cursor-pointer bg-[#f6f8fb] items-center justify-center w-[25vw] h-[30vh] rounded-lg border border-dashed border-blue-500 ">
        <div className="bg-imgageSVG w-40 h-32 bg-no-repeat bg-contain " />
        <p className="text-black/50">Drag & Drop your image here</p>
      </div>
      <p className="text-black/50">OR</p>
      <button className="text-white px-5 py-2 bg-[#2f80ed] rounded-lg">Choose a file</button>
    </div>
  );
}

export default Content;

--------------------------------------------------------------------


-------------------------------------------------------------------------------------




*/
