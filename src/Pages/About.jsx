import React from "react";
import { ReactTyped  } from "react-typed";
import mypic from "/Image/mypic.jpeg";
import BackgroundDeisgn from "../Components/BgDesign/BackgroundDesign";

const About = () => {
  return (
    <>
      <BackgroundDeisgn />
      <main className="flex relative z-50 justify-center -mt-52 max-sm:-mt-60 max-md:-mt-60">
        <div className="container flex justify-evenly w-full max-sm:flex-col items-center max-sm:space-y-4 max-md:space-y-8">
          {/* Typing Effect Section */}
          <div className="w-2/4 flex items-center justify-start max-sm:w-full">
            <div className="text-2xl text-justify max-sm:text-sm max-sm:text-center max-md:text-sm max-lg:text-lg px-2">
              <ReactTyped
                strings={[
                  "Hey there! I'm Farasat, a passionate Software Engineer specializing in web development with expertise in the MERN stack. I thrive on turning ideas into beautifully crafted, functional websites and applications. Whether it's building responsive UIs, creating seamless user experiences, or developing powerful backend systems, I aim to deliver excellence in every line of code. Check out my projects and let's create something amazing together!"
                ]}
                typeSpeed={20}
                
              >
              </ReactTyped>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-2/5 flex justify-center  max-sm:w-1/2">
            <img
              src={mypic}
              alt="Farasat"
              className="w-2/4 max-sm:w-full max-md:w-full max-lg:w-full"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
