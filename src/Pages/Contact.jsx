import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import BackgroundDesign from '../Components/BgDesign/BackgroundDesign'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Contact = () => {

  useGSAP(() =>{
    gsap.from(".animate", {
      y: 100, // Start from 100px down
      opacity: 0, // Start fully transparent
      duration: 1, // Animation duration
      ease: "power3.out", // Smooth easing effect
      stagger: 0.4, // Delay between each element
    });
}
)

  return (
    <>
      <BackgroundDesign />
      <main className='flex justify-center relative z-50 -mt-32 '>
        <div className='container flex flex-col items-center justify-center '>
          <div className='space-y-8'>
            <p className='animate flex items-center gap-x-4 text-xl cursor-pointer max-sm:text-sm '> 
              <span className='text-4xl max-sm:text-2xl '><FaLinkedin /></span>
              <Link to={"https://www.linkedin.com/in/muhammad-farasat1/"}>linkedin.com/in/muhammad-farasat1</Link>
            </p>
            <p className='animate flex items-center gap-x-4 text-xl cursor-pointer max-sm:text-sm '> 
              <span className='text-4xl max-sm:text-2xl '><FaGithubSquare /></span>
              <Link to={"https://github.com/Muhammad-Farasat"}>github.com/Muhammad-Farasat</Link>
            </p>
            <p className='animate flex items-center gap-x-4 text-xl cursor-pointer max-sm:text-sm '> 
              <span className='text-4xl max-sm:text-2xl '><FaEnvelope /></span>
              farasatkhan687@gmail.com
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact