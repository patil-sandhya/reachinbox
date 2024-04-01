import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import mailImg from "./mail.png"
import { useParams } from "react-router-dom";
import { updateToken } from "../Redux/Action";
import { useDispatch } from "react-redux";
const Home = () => {
  
  const dispatch = useDispatch()
  let {token} = useParams() 
 // console.log(token, "token")
  useEffect(()=>{
    dispatch(updateToken(token))
  },[token])

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <Navbar />
        <div className="bg-black h-full w-full flex flex-col items-center text-white -mt-16 pt-36">
  <img src={mailImg} alt="mailimg" className="max-w-full max-h-full" style={{width: "280px", height:"229px"}} />
  <h1 className="font-bold text-xl">It's the beginning of a legendary sales pipeline</h1>
  <br />
  <p>When you have inbound E-mails</p>
  <p>You'll see them here</p>
</div>
      </div>
    </div>
  );
};

export default Home;
