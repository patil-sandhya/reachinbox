import React,{useEffect} from 'react'
import InboxCards from './InboxCard'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useDispatch,useSelector } from 'react-redux';
import { getEmailList, getThreadData, updateCurThread } from "../Redux/Action";


const Inbox = () => {
  const allMailList = useSelector((store)=> store.listmail)
  const token = useSelector((store)=> store.token)
  const dispatch = useDispatch()
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  useEffect(()=>{
    dispatch(getEmailList(config))
  },[])

  const handleSingleThread = (threadId)=>{
    dispatch(updateCurThread(threadId))
    dispatch(getThreadData(threadId,config))
  }

  const theme = useSelector((store)=> store.theme)
  const bgColor = theme == "dark" ? "bg-gray-800" : "bg-[#DFE3E8]"
  const textColor = theme == "dark" ? "text-white" : "text-black"

  return (
    <div className='w-[280px] px-3'>
      <div className='pt-10 pb-5 ml-3'>
        <h1 className='text-blue-500 text-xl font-bold flex items-center'>All Inbox(s)<RiArrowDropDownLine /></h1>
        <p className='text-gray-500'><span className={`font-bold ${textColor} text-sm mr-1`}>25/25</span>Inboxes selected</p>
      </div>
      <div className='relative ml-2'>
        <input type="text" placeholder='Search' className={`${bgColor} placeholder:pl-16 p-2 rounded-md w-[95%] focus:outline-none`} />
        <CiSearch className='absolute top-2 text-2xl ml-5 text-gray-400'/>
      </div>
      <div className={`${textColor} flex justify-between mt-3 px-2 text-xl`}>
        <div>
          <span className={`text-blue-500 ${bgColor} px-3 py-1 text-xs rounded-2xl mr-1`}>26</span>
          <span className='text-lg'>New Replies</span>
        </div>
        <div className='flex justify-center items-center'>
          <span className='mr-1 text-lg'>Newest</span>
          <RiArrowDropDownLine/>
        </div>
      </div>
      <InboxCards/>
      <InboxCards/>
      <InboxCards/>
      <InboxCards/>
      <InboxCards/>
    </div>
  )
}

export default Inbox