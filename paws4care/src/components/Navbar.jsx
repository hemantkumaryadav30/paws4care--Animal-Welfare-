
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import pawslogo from "../assets/paws4carelogo.png";
import { useState } from "react";
import Toggle from "./Toggle";
export default function Navbar() {
    const [toggle, setToggle] =  useState(false);
    const handleToggle = ()=>{
        setToggle(!toggle);
    }
    const onClose = ()=>{
        setToggle(false);
    }
  return (
    <>
  
    <div className="w-full h-auto fixed z-50">

        {/* topbar */}
        <div className="w-full h-10 bg-gradient-to-tr from-violet-700 to-black flex items-center">
            <ul className="flex w-[200px] mx-auto items-center justify-between ">
                
                <li><FaFacebook className="text-white text-[1.7rem]"/></li>  
                <li><FaInstagram className="text-white text-[1.7rem]"/></li>  
                <li><FaTwitter className="text-white text-[1.7rem]"/></li>
                <li><FaLinkedin className="text-white text-[1.7rem]"/></li>
            </ul>
        </div>


        {/* main navbar */}

        <div className="w-full h-14 shadow-md shadow-slate-100 flex items-center justify-between px-4 bg-white md:px-10">
            <img src={pawslogo} alt="" className="w-[10rem]" />

            <ul className="hidden md:flex md:gap-4">
                <li className="text-xl font-medium">Home</li>
                <li className="text-xl font-medium">Animal Welfare</li>
                <li className="text-xl font-medium">About Us</li>
                <li className="text-xl font-medium">Contact Us</li>
            </ul>

            <div className="bg-violet-400 p-3 rounded-lg md:hidden" onClick={handleToggle}>
                <FaBars className="text-[1rem]"/>
            </div>

        </div>

    {toggle && <Toggle onClose={onClose}/>}
    </div>
    </>
  )
}
