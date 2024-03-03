import "./Page.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../assets/paws41.png";
import slide2 from "../assets/paws42.png";
import slide3 from "../assets/paws43.png";

export default function Home() {
  return (
    <div className="w-auto pt-[6rem] h-auto ">
      <div className="w-auto py-7 md:pb-0 md:pt-[6rem] h-auto bg-gradient-to-tl from-white via-white to-violet-600 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <>
              <div className="w-[300px] md:w-[1140px] md:flex md:justify-between mx-auto h-auto ">
                <div>
                  <h3 className="text-[2rem] font-semibold text-center md:text-[3rem] md:text-left">
                    Welcome to Paws4Care
                  </h3>
                  <p className="text-center text-md md:text-left">
                    Together, lets make a difference in the lives of animals in
                    need.
                  </p>
                  <div className="flex items-center mx-auto justify-evenly my-6 md:w-[300px] md:gap-4 md:ml-0">
                    <button className="  p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Donate Now
                    </button>
                    <button className="bg-gradient-to-tr from-violet-400 to-violet-700 text-white p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Explore more
                    </button>
                  </div>
                </div>

                <img src={slide1} alt="" className="md:h-[500px]" />
              </div>
              <div className="custom-shape-divider-bottom-1709455069">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="w-[300px] md:w-[1140px] md:flex md:justify-between mx-auto h-auto ">
                <div>
                  <h3 className="text-[2rem] md:text-[3rem] md:text-left font-semibold text-center">
                    Empower Animal Guardianship
                  </h3>
                  <p className="text-center text-md md:text-left">
                    Educate, support, and advocate for responsible pet ownership
                  </p>
                  <div className="flex items-center mx-auto justify-evenly my-6  md:w-[300px] md:gap-4 md:ml-0">
                    <button className="  p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Donate Now
                    </button>
                    <button className="bg-gradient-to-tr from-violet-400 to-violet-700 text-white p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Explore more
                    </button>
                  </div>
                </div>

                <img src={slide2} alt="" className="md:h-[500px]" />
              </div>
              <div className="custom-shape-divider-bottom-1709455069">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="w-[300px] md:w-[1140px] md:flex md:justify-between mx-auto h-auto ">
                <div>
                  <h3 className="text-[2rem] md:text-[3rem]  font-semibold text-center md:text-left">
                    Support Our Rescue Efforts
                  </h3>
                  <p className="text-center text-md md:text-left">
                    Every donation helps us save and rehabilitate animals in
                    distress.
                  </p>
                  <div className="flex items-center mx-auto justify-evenly  md:w-[300px] md:gap-4 md:ml-0 my-6">
                    <button className="  p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Donate Now
                    </button>
                    <button className="bg-gradient-to-tr from-violet-400 to-violet-700 text-white p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Explore more
                    </button>
                  </div>
                </div>

                <img src={slide3} alt="" className="md:h-[500px]" />
              </div>
              <div className="custom-shape-divider-bottom-1709455069">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* second section */}

      <div className="w-auto h-auto ">
        <div className="w-[300px] md:w-[500px] h-auto mx-auto">
          <h3 className="text-[2rem] text-center font-semibold ">
            Trusted Organisation with Us
          </h3>

          <div className="w-[300px] h-auto overflow-hidden mx-auto">
            <div className="w-[800px] flex gap-6 h-auto py-5">
              <div className="client w-[200px] h-14 border border-violet-500 rounded-lg">
                <img src="" alt="" />
              </div>

              <div className="client w-[200px] h-14 border border-violet-500 rounded-lg">
                <img src="" alt="" />
              </div>

              <div className=" client w-[200px] h-14 border border-violet-500 rounded-lg">
                <img src="" alt="" />
              </div>

              <div className=" client w-[200px] h-14 border border-violet-500 rounded-lg">
                <img src="" alt="" />
              </div>

              <div className="client w-[200px] h-10 border border-violet-500 rounded-lg">
                <img src="" alt="" />
              </div>

              <div className=" client w-[200px] h-14 border border-violet-500 rounded-lg">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


     {/* animal care */}


    </div>
  );
}
