import React from 'react'
import BackgroundDesign from '../Components/BgDesign/BackgroundDesign'
import cv from '../../public/Image/mypic.jpeg'

const Home = () => {
  return (
    <>
        <BackgroundDesign />
        <main className='-mt-32 relative z-50 '>
          <section className='relative'>
            <p className=' max-sm:tracking-widest max-sm:text-2xl max-md:text-4xl max-lg:text-[3.2rem] max-xl:text-[3.2rem] static z-10 text-7xl tracking-wider font-orbitronExtraBold text-center  '>
              WELCOME TO MY <br />
              <span className=' max-sm:text-[2.2rem] max-md:text-5xl max-lg:text-7xl max-xl:text-7xl tracking-widest text-8xl font-orbitronBlack   '>PORTFOLIO</span>
            </p>
            <div className='flex justify-center mt-8 max-sm:px-4'>
              <a href={cv} download={cv} className=" flex justify-center w-96 px-6 py-3 text-white bg-[#000] rounded hover:bg-[#222] transition duration-300 max-sm:w-auto text-center max-sm:px-6 max-sm:py-2 max-md:px-6 max-md:py-2 "> Download CV</a>
            </div>
          </section>
        </main>
    </>
  )
}

export default Home