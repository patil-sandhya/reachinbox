import React from 'react';
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";

const InboxCards = () => {
  const theme = useSelector((store)=> store.theme)
  const bgColor = theme == "dark" ? "bg-gray-800" : "bg-[#DFE3E8]"
  const borderClr = theme == "dark" ? "border-gray-700" : "border-white"
  const textColor = theme == "dark" ? "text-white" : "text-[#343A40]"

  return (
    <div className={`${textColor} w-full max-w-md flex flex-col justify-center border-b ${borderClr} p-4`}>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold'>Beata@gmail.com</h1>
        <p className='text-[#919EAB]'>Mar 7</p>
      </div>
      <p className='text-sm'>I've tried a lot and.</p>
      <div className='flex items-center mt-4'>
        <button className={`flex justify-center items-center ${bgColor} py-1 px-4 rounded-2xl mr-4 lin`}>
          <GoDotFill/><span className='ml-1 text-xs'>Interested</span>
        </button>
        <button className={`flex justify-center items-center ${bgColor} py-1 px-2 rounded-2xl`}>
          <IoIosSend/><span className='ml-1 text-xs' style={{whiteSpace:'nowrap'}}>Campaign Name</span>
        </button>
      </div>
    </div>
  );
};

export default InboxCards;