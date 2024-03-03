import { FaEnvelope, FaGlobe } from "react-icons/fa";
import footerlogo from "../assets/paws4carelogo.png";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="w-auto h-auto md:pb-2 bg-gradient-to-b from-black via-violet-700 to-violet-900">
        <h3 className="text-white text-[1.5rem] px-3 text-center md:text-[2.5rem] md:px-16">
Until one has loved an animal, a part of one's soul remains unawakened." - Anatole France</h3>
<hr />
        <div className="w-[300px] md:mt-14 h-auto md:flex md:justify-between md:w-[1140px] mx-auto">

            <div className=" ">
               <img src={footerlogo} alt="" className="md:w-[300px] drop-shadow-lg shadow-black border-2 border-white bg-white rounded-lg p-2" />

            </div>
            <div className="my-4">
                <h3 className="text-white text-[1.4rem] font-semibold">Quick Links</h3>

                 <ul className="mt-4">
                    <li className="text-white my-2">Home</li>
                    <li className="text-white my-2">Animal Welfare</li>
                    <li className="text-white my-2">About us</li>
                    <li className="text-white my-2">Contact Us</li>
                 </ul>
            </div>
            <div>
                <h3 className="text-white text-[1.4rem] font-semibold">Address</h3>
                 <div className="flex my-2 items-center gap-4 py-3 px-2 border-b border-l border-r w-[200px] rounded-lg">
                    <FaLocationDot className="text-white  text-[2rem]"/>
                    <p className="text-white">Patna, Bihar</p>
                 </div>
                 <h3 className="text-white text-[1.4rem] font-semibold">Connect on</h3>
                 <div className="flex items-center my-4 gap-4 px-2 py-3  border-b border-l border-r w-[220px] rounded-lg">
                    <FaEnvelope className="text-white  text-[2rem]"/>
                    <p className="text-white">info@paws4care.com</p>
                 </div>
                 <div className="flex items-center mt-4 gap-4 py-3 px-2 border-b border-l border-r w-[200px] rounded-lg">
                    <FaGlobe className="text-white  text-[2rem]"/>
                    <p className="text-white">paws4care.com</p>
                 </div>
                
            </div>
           

        </div>
        <div className="w-[300px] md:w-[700px] my-3 mx-auto">
         <ul className="flex flex-wrap md:justify-between gap-4">
            <li className="text-white font-semibold border p-2  rounded-lg md:border-t-0 md:border-l-0 md:border-r-0">Terms & Conditions</li>
            <li className="text-white font-semibold border p-2  rounded-lg md:border-t-0 md:border-l-0 md:border-r-0">Privacy Policy</li>
            <li className="text-white font-semibold border p-2  rounded-lg md:border-t-0 md:border-l-0 md:border-r-0">Cookies Policy</li>
            <li className="text-white font-semibold border p-2  rounded-lg md:border-t-0 md:border-l-0 md:border-r-0">Refund Policy</li>
         </ul>
        </div>
        <hr />
        <p className="text-white text-center">Copyright©2024.All Rights Reserved.PAWS4CARE</p>

    </div>

  )
}
