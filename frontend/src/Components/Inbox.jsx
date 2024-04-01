import React,{useEffect} from 'react'
import InboxCards from './InboxCard'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useDispatch,useSelector } from 'react-redux';
import { getEmailList, getThreadData, updateCurThread } from "../Redux/Action";


const Inbox = () => {
  const allMailList = useSelector((store)=> store.listmail)
  console.log(allMailList)
  let dummyThreadList = [
    {
      id: 2,
      fromName: "Mitrajit Chandra",
      fromEmail: "mitrajit2022@gmail.com",
      toName: "Shaw",
      toEmail: "shaw@getmemeetings.com",
      cc: null,
      bcc: null,
      threadId: 1,
      messageId: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      inReplyTo: null,
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>How are you Shaw?</p><p>Thanks for reaching out over our web chat.</p><p>How can I help you with your project?</p><p>Please let me know if you need anything else.</p><p>Regards,<br/>Mitrajit Chandra</p><p>7ZG2ZTV 6KG634E</p>",
      isRead: true,
      folder: "INBOX",
      uid: 52,
      sentAt: "2023-11-21T00:39:19.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
    {
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 1,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
    {
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "Sandhya",
      toEmail: "sandhya@gmail.com",
      cc: null,
      bcc: null,
      threadId: 2,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>Hi Sandhya,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
  ];
  const token = useSelector((store)=> store.token)
  const dispatch = useDispatch()
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  useEffect(()=>{
    //dispatch(getEmailList(config))
  },[])

  const handleSingleThread = (threadId)=>{
    dispatch(updateCurThread(threadId))
    //dispatch(getThreadData(threadId,config))
    let filterData = dummyThreadList.filter((item)=>{
      return (item.threadId == threadId)
    })
    console.log(threadId,filterData)
    dispatch(getThreadData(threadId,filterData))
  }

  const theme = useSelector((store)=> store.theme)
  const bgColor = theme == "dark" ? "bg-gray-800" : "bg-[#DFE3E8]"
  const textColor = theme == "dark" ? "text-white" : "text-black"

  return (
    <div className='w-[290px] px-3'>
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
      {
        allMailList.map((item)=>{
          return <InboxCards id={item.id} {...item} handleSingleThread={handleSingleThread}/>
        })
      }
      
    </div>
  )
}

export default Inbox