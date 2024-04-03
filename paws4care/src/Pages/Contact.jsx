
import { useEffect } from "react";
import "./Page.css";
export default function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <>
  
    <div className="animalcare1 w-auto flex items-center justify-center  pt-[6rem] ">
    <div className="w-[300px] md:w-[1140px] h-auto  mx-auto">
      <h3
        className="text-white text-[2rem] font-semibold  md:text-[3rem]  "
        style={{ fontFamily: "'manrope', sans-serif" }}
      >
       Contact Us
      </h3>
    </div>
  </div>

  {/* second card */}
  <div className="w-auto h-auto py-11">
    <div className="w-[300px] md:w-[1140px] mx-auto md:flex items-center md:justify-between">


    <div className="w-[300px] space-y-7 md:w-[400px] h-auto mx-auto">
      {/* first section */}
      <div className="bg-[#0c051c] py-5 rounded-lg flex items-center justify-evenly  w-[300px] md:w-[400px] mx-auto">
        <img src="" alt="" className="w-[100px] h-[100px] border-2 rounded-lg border-white" />
        <div>
           <h4 className="text-white ">Address</h4>
           <p className="text-white">Alpha Colony, Beta Vihar, <br/> Gama -9080</p>
        </div>

      </div>

      <div className="bg-[#0c051c] py-5 rounded-lg flex items-center justify-evenly  w-[300px] md:w-[400px] mx-auto">
        <img src="" alt="" className="w-[100px] h-[100px] border-2 rounded-lg border-white" />
        <div>
           <h4 className="text-white ">Email</h4>
           <p className="text-white">paws4care@gmail.com</p>
        </div>

      </div>

      <div className="bg-[#0c051c] py-5 rounded-lg flex items-center justify-between px-10  w-[300px] md:w-[400px] mx-auto">
        <img src="" alt="" className="w-[100px] h-[100px] border-2 rounded-lg border-white" />
        <div >
           <h4 className="text-white ">Mobile Number</h4>
           <p className="text-white">(+91) 7667460550</p>
        </div>

      </div>

    </div>


    <div className="w-[300px] h-auto mx-auto md:w-[500px]   ">
        <h2 className="text-[1.2rem] md:text-[2rem]  text-center font-semibold" style={{fontFamily:"'manrope', sans-serif"}}>Get In Touch With Us</h2>

        <form action="" className="md:w-[380px]  my-6 mx-auto">
          <div>

     
          <label htmlFor="">Your Name</label>
          <br/>
          <input type="text" placeholder="name" required className="w-[300px] h-12 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"/>
          </div>
          <br/>
          <div>

        
          <label htmlFor="" className="">Your Email</label>
          <br/>
          <input type="Email" placeholder="name@gmail.com" required className="w-[300px] h-12 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"/>
          </div>
           <br/>
          <div>

        
<label htmlFor="" className="">Your Organisation Name</label>
<br/>
<input type="text" placeholder="nameAlpha pvt Ltd" required className="w-[300px] h-12  pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"/>
</div>
<br/>
<div>

        
<label htmlFor="" className="">Your Phone Number</label>
<br/>
<input type="tel" placeholder=" +91 657xxxxx7" required className="w-[300px] h-12 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"/>
</div>
<br/>
          <div>

        
<label htmlFor="" className=""> Your Message</label>
<br/>
 <textarea placeholder="message" className="w-[300px] h-16 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"/>
</div>
    <div className="w-[200px] mx-auto mt-14">
      <button className="w-[200px] h-12  bg-[#0c051c] rounded-lg text-white">Send</button>
 
    </div>
        </form>
    </div>
    </div>
  </div>
  </>
  )
}
