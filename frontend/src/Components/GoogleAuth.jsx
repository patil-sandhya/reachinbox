import React from "react";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
import axios from "axios";

const GoogleAuth = () => {
    const params = {
        redirect_to: "http://localhots:3000/home"
      };
      const headers = {
        'Access-Control-Allow-Origin': '*', 
      };
    const handleGoogleAuth = ()=>{
        console.log("click")
        axios.get('https://hiring.reachinbox.xyz/api/v1/auth/google-login',{
            params,headers
        })
  .then(response => { 
    console.log(response.data);
  })
  .catch(error => {
    alert("Server Error, Please try after some time or create an account")
    console.error('Error:', error);
  });
    }

    
  return (
    <div className="border border-gray-700 w-[460px] rounded-xl h-[312px] flex flex-col items-center text-white bg-gray-850">
      <div className=" flex flex-col py-6 justify-center items-center">
        <h3 className="text-xl pb-4 ">Create a new account</h3>
        <Link>
        <button onClick={handleGoogleAuth} className="border border-gray-500 py-3 px-20 flex justify-center items-center text-base rounded-md">
          <FcGoogle className="text-2xl" />{" "}
          <span className="ml-2">Sign Up with Google</span>
        </button>
        </Link>
      </div>
      <div className="pt-7">
        <Link to={"/home"}>
        <button  className="bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white w-48 py-3 px-6">
        Create an Account
        </button></Link>
      </div>
      <div className="flex pt-7 pb-5">
        <p className="text-gray-600">Already have an account?</p>
        <span className="ml-1 text-gray-400">Sign In</span>
      </div>
    </div>
  );
};

export default GoogleAuth;