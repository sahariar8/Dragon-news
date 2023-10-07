import React from "react";
import {AiOutlineGoogle,AiFillGithub,AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai'
import {BsFacebook } from 'react-icons/bs'
import qzone1 from '../assets/qzone1.png'
import qzone2 from '../assets/qzone2.png'
import qzone3 from '../assets/qzone3.png'
const RightSidebar = () => {
  return (
    <div className="font-poppins">
      <div className="ml-5">
        <h1 className="text-xl font-bold text-slate-600">Login with</h1>
        <button className="btn w-full mt-5">
            <AiOutlineGoogle className="text-sky-500 "/>
            Login With Google
        </button>
        <button className="btn w-full mt-5">
            <AiFillGithub className="text-slate-500 "/>
            Login With Github
        </button>
      </div>
      <div className="mt-6">
      <h1 className="text-xl font-bold text-slate-600 ml-5">Find Us On</h1>
        <a href="" className="flex items-center gap-2 text-lg font-semibold p-3 border rounded-t-lg ml-5 mt-5 text-slate-500">
            <BsFacebook className="ml-6 text-blue-800"/>
            facebook
        </a>
        <a href="" className="flex items-center gap-2 text-lg font-semibold p-3 border ml-5 text-slate-500">
            <AiFillTwitterCircle className="ml-6 text-sky-500"/>
            Twitter
        </a>
        <a href="" className="flex items-center gap-2 text-lg font-semibold p-3 border ml-5 rounded-b-lg text-slate-500">
            <AiFillInstagram className="ml-6 text-orange-600"/>
            Instagram
        </a>
      </div>
      <div className="bg-slate-100 ml-5 mt-8">
      <h1 className="text-xl font-bold text-slate-600 p-5 ">Q-Zone</h1>
      <img src={qzone1} alt="" className="mx-auto"/>
      <img src={qzone2} alt="" className="mx-auto"/>
      <img src={qzone3} alt="" className="mx-auto"/>
      </div>
      <div className="ml-5 mb-8 mt-5 bg-[url('../../public/bg.png')] h-[510px]">
            <h1 className="text-4xl font-bold text-white text-center pt-16 px-10">Create an Amazing Newspaper</h1>
            <p className="text-center text-white pt-8 px-10">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <div className="text-center">
               <p className="mt-10 text-white py-3  bg-red-600 px-8 inline-block  font-bold">Learn More</p>
            </div>
      </div>
    </div>
  );
};

export default RightSidebar;
