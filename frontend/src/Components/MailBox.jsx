import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdReply } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteThread, getEmailList, sendReply } from "../Redux/Action";
import Alert from "./Alert";

const MailBox = () => {
  const curThreadId = useSelector((store) => store.curThreadId);
  const curThreadData = useSelector((store) => store.curThreadData);
  const dispatch = useDispatch();
  const token = useSelector((store) => store.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [replyObj, setReplyObj] = useState({
    from: "jeanne@icloud.com",
    to: "peter@reachinbox.com",
    subject:" Warmup Welcome",
    body:"",
  })

  const theme = useSelector((store) => store.theme);
  const textColor = theme == "dark" ? "text-white" : "text-[#343A40]";
  const bgColor = theme == "dark" ? "bg-black" : "bg-[#FFFFFF]";
  const borderClr = theme == "dark" ? "border-gray-800" : "border-[#E0E0E0]";

  const [openEditor, setOpenEditor] = useState(false);
  const [openAlert, setOpenAlert] = useState(false)
  // keyboard Events
  useEffect(() => {
    const handleKeyR = (event) => {
      if (event.key === "R") {
        setOpenEditor(true);
      }
    };

    document.addEventListener("keydown", handleKeyR);
  }, []);

  useEffect(() => {
    const handleKeyD = (event) => {
      if (event.key === "D") {
        setOpenAlert(true)
      }
    };

    document.addEventListener("keydown", handleKeyD);
  }, []);

  const handleSendReply = () => {
    dispatch(sendReply(curThreadId,replyObj,config))
    dispatch(getEmailList(config))
  };

  const handleReply = () => {
    setOpenEditor(true);
  };

  const closeEditor = () => {
    setOpenEditor(false);
  };

  const closeAlert = ()=>{
    setOpenAlert(false)
  }
  return (
    <div className="w-[870px] relative">
      <div
        className={`w-full border-b h-[90px] ${borderClr} ${textColor} ${bgColor} flex justify-between items-center`}
      >
        <div className="px-5 py-5 ">
          <p className="font-bold text-l">Orlando</p>
          <p className="text-sm text-gray-500">orladom@gmail.com</p>
        </div>
        <div className="flex w-[50%] justify-evenly items-center">
          <div
            className={`flex justify-center items-center border ${borderClr} ${bgColor} bg-gray-900 p-2 rounded-lg`}
          >
            <span className="inline-block bg-yellow-400 w-5 h-5 rounded-full border-4 border-gray-700 mr-1"></span>
            <span className="text-sm">Meeting Completed</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div
            className={`flex justify-center items-center border ${borderClr} ${bgColor} p-2 px-3 rounded-lg`}
          >
            <span className="text-sm">Move</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div className={`p-2 px-3 rounded-lg border ${borderClr} ${bgColor}`}>
            <BsThreeDots size={30} />
          </div>
        </div>
      </div>
      {openEditor && (
        <div className="text-sm fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-30 z-50">
          <div className=" rounded-lg w-[850px] h-[70%] mt-48 ml-10 border border-gray-500 bg-gray-900 text-white">
            <div className="rounded-t-lg px-5 py-1 flex justify-between bg-gray-600">
              <p className="text-lg font-semibold text-gray-200">Reply</p>
              <button
                className="text-white px-4 py-1 rounded"
                onClick={closeEditor}
              >
                X
              </button>
            </div>
            <div className="border px-0 w-full border-gray-500"></div>
            <p className="m-1 px-5 py-1 text-gray-500">
              To : <span className="text-white">jeanne@icloud.com</span>
            </p>
            <div className="border px-0 w-full border-gray-500"></div>
            <p className="m-1 px-5 py-1 text-gray-500">
              From : <span className="text-white">peter@reachinbox.com</span>
            </p>
            <div className="border px-0 w-full border-gray-500"></div>
            <p className="m-1 px-5 py-1 text-gray-500">
              Subject : <span className="text-white">Warmup Welcome</span>
            </p>
            <div className="border px-0 w-full border-gray-500"></div>
            <p className="text-gray-500 px-6 pt-4">Hi jeanne,</p>
            <div
            onChange={(e) => setReplyObj((prev)=> ({...prev, body: e.target.innerText}))}
              contenteditable="true"
              class="py-2 px-6 h-1/2 focus:outline-none focus:border-gray-500"
            >{replyObj.body}</div>
            <div class="bottom-0 left-0 flex  space-x-2 p-4">
              <button className="px-4 flex py-2 bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white" onClick={handleSendReply}>
                Send
                <FaCaretDown className="ml-4 mt-1" />
              </button>
              <button className="px-4 flex py-2 text-white">
                <IoMdFlash className="mt-1 p-0 text-xl" />
                Variables
              </button>
            </div>
          </div>
        </div>
      )}

      <Alert isOpen={openAlert} onClose={closeAlert} />
      <div className="relative mx-5">
        <div
          className={`w-full flex justify-center items-center ${textColor} mt-3`}
        >
          <span
            className={`px-4 py-1 ${
              theme == "dark"
                ? "bg-[#171819] text-[#F8FAFC]"
                : "bg-[#EEF1F4] text-[#777777]"
            } z-10`}
          >
            Today
          </span>
        </div>
        <div className={`border absolute top-4 w-full ${borderClr}`}></div>
      </div>
      <div
        className={`w-[800px] h-[286px] border
      ${
        theme == "dark"
          ? "bg-[#141517] border-gray-800 text-[#F8FAFC]"
          : "bg-[#F9F9F9] text-black"
      }
       mt-3 mx-5 p-5 rounded-lg`}
      >
        <div className="flex justify-between">
          <p className="text-xl">New Product Launch</p>
          <p className="text-gray-600 font-bold mt-1">20 june 2022 : 9:16AM</p>
        </div>
        <p className="mt-2 text-gray-500">
          from : jeanne@icloud.com cc : lennon.j@mail.com
        </p>
        <p className="mt-2 text-gray-500">to : lennon.j@mail.com</p>
        <div className="w-[70%]">
          <p className="mt-8">Hi {"{FIRST_NAME}"}</p>
          <p className="mt-3">
            I would like to introduce you to SaaSgrow, a productsized design
            service specifically tailored for saas startups. Our aim is to help
            you enhance the user experience and boost the virtual apeal of your
            software products.
          </p>
        </div>
      </div>
      <div className="relative mx-5">
        <div className="w-full flex justify-center items-center text-white mt-3 cursor-pointer">
          <span
            className={`px-4 py-1 ${
              theme == "dark"
                ? "bg-[#171819] text-[#F8FAFC]"
                : "bg-[#EEF1F4] text-[#777777]"
            } z-10`}
          >
            View all <span className="text-blue-400 ">4</span> replies
          </span>
        </div>
        <div className={`border absolute top-4 w-full ${borderClr}`}></div>
      </div>
      <div className="p-5 mt-[276px] relative cursor-pointer">
        <MdReply color="white" className="absolute top-7 left-12" size={30} />
        <button
          onClick={handleReply}
          className="bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white w-48 py-3 px-6"
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default MailBox;
