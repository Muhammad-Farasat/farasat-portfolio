import React from "react";
import BackgroundDesign from "../Components/BgDesign/BackgroundDesign";
import { Link } from "react-router-dom";
import eCommerce from "../../public/Image/eCommerce.jpeg";
import blog from "../../public/Image/blog.jpeg";
import chatapp from "../../public/Image/chatapp.jpeg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./index.css";

const Projects = () => {
  return (
    <>
      <BackgroundDesign />
      <main className=" absolute top-24 w-full z-50 max-sm:top-52 max-md:top-56 max-lg:top-56 ">
        <section className=" w-[70%] h-full mx-auto  max-sm:w-full max-sm:px-2  ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex w-full h-full absolute top-0 z-50 bg-[#000000ad] justify-center items-center">
                <div className="flex flex-col container items-center space-y-4 max-sm:space-y-1 max-md:space-y-2 ">
                  
                  <p className="text-[#fff] text-lg font-orbitronExtraBold tracking-widest max-sm:text-[8px] max-md:text-[12px] ">
                    E-Commerce
                  </p>
                  
                  <div className=" font-sans tracking-wider px-8 flex flex-col  ">
                    <p className="text-[#fff] text-center text-sm max-sm:text-[6px] max-sm:leading-3 max-md:text-[7px] max-md:leading-3 ">
                      This project is a full-stack authentication system built
                      with React.js for the frontend and a Node.js/Express
                      backend. It uses Tailwind CSS for responsive styling.
                    </p>
                    <div className="flex justify-center mt-4 gap-x-6 max-sm:gap-x-4 max-sm:mt-2 ">
                      <button className="w-32 px-2 py-2.5 text-xs max-sm: max-sm:text-[4px] max-sm:leading-none text-white bg-[#222] rounded hover:bg-[#111] transition duration-300 max-sm:w-10  text-center max-sm:px-1 max-sm:py-1 max-md:px-2 max-md:py-2 max-md:w-20 max-md:text-[8px]  ">
                        Check website
                      </button>
                      <button className="w-32 px-2 py-2.5 text-xs max-sm: max-sm:text-[4px] max-sm:leading-none text-white bg-[#222] rounded hover:bg-[#111] transition duration-300 max-sm:w-10  text-center max-sm:px-1 max-sm:py-1 max-md:px-2 max-md:py-2 max-md:w-20 max-md:text-[8px] ">
                        Check Admin
                      </button>

                    </div>
                  </div>

                </div>
              </div>
              <img src={eCommerce} alt="" className=" blur-[2px] " />
            </SwiperSlide>

            <SwiperSlide>
            <div className="flex w-full h-full absolute top-0 z-50 bg-[#000000ad] justify-center items-center">
                <div className="flex flex-col container items-center space-y-4 max-sm:space-y-1 max-md:space-y-2 ">
                  
                  <p className="text-[#fff] text-lg font-orbitronExtraBold tracking-widest max-sm:text-[8px] max-md:text-[12px] ">
                    Blog
                  </p>
                  
                  <div className="font-sans tracking-wider px-8 flex flex-col">
                    <p className="text-[#fff] text-center text-sm max-sm:text-[6px] max-sm:leading-3 max-md:text-[7px] max-md:leading-3 ">
                      This project is a full-stack authentication system built
                      with React.js for the frontend and a Node.js/Express
                      backend. It uses Tailwind CSS for responsive styling.
                    </p>
                    <div className="flex justify-center mt-4 gap-x-6 max-sm:gap-x-4 max-sm:mt-2 ">
                      <button className="w-32 px-2 py-2.5 text-xs max-sm: max-sm:text-[4px] max-sm:leading-none text-white bg-[#222] rounded hover:bg-[#111] transition duration-300 max-sm:w-10  text-center max-sm:px-1 max-sm:py-1 max-md:px-2 max-md:py-2 max-md:w-20 max-md:text-[8px] ">
                        Check website
                      </button>
                      <button className="w-32 px-2 py-2.5 text-xs max-sm: max-sm:text-[4px] max-sm:leading-none text-white bg-[#222] rounded hover:bg-[#111] transition duration-300 max-sm:w-10  text-center max-sm:px-1 max-sm:py-1 max-md:px-2 max-md:py-2 max-md:w-20 max-md:text-[8px] ">
                        Check Admin
                      </button>

                    </div>
                  </div>

                </div>
              </div>
              <img src={blog} alt="" className=" blur-[2px] " />
            </SwiperSlide>

            <SwiperSlide>
              
            <div className="flex w-full h-full absolute top-0 z-50 bg-[#000000ad] justify-center items-center">
                <div className="flex flex-col container items-center space-y-4 max-sm:space-y-1 ">
                  
                  <p className="text-[#fff] text-lg font-orbitronExtraBold tracking-widest max-sm:text-[8px] max-md:text-[12px] ">
                    Chat App
                  </p>
                  
                  <div className="font-sans tracking-wider px-8 flex flex-col max-sm:px-3 max-md:px-3 ">
                    <p className="text-[#fff] text-center text-sm max-sm:text-[6px] max-sm:leading-[10px] max-md:text-[7px] max-md:leading-3 ">
                    This is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with socket.io for instant messaging. The app allows users to authenticate, send and receive messages in real-time, and manage conversations efficiently. It's deployed on Vercel for both the frontend and backend.
                    </p>
                    <div className="flex justify-center mt-4 gap-x-6 max-sm:gap-x-4 max-sm:mt-2  ">
                      <button className="w-32 px-2 py-2.5 text-xs max-sm: max-sm:text-[4px] max-sm:leading-none text-white bg-[#222] rounded hover:bg-[#111] transition duration-300 max-sm:w-10  text-center max-sm:px-1 max-sm:py-1 max-md:px-2 max-md:py-2 max-md:w-20 max-md:text-[8px] ">
                        Check website
                      </button>

                    </div>
                  </div>

                </div>
              </div>
              
              <img src={chatapp} alt="" className=" blur-[2px] " />
            </SwiperSlide>
          
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Projects;