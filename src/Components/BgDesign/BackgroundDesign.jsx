import React from 'react'
import style from './index.module.css'

export default function BackgroundDesign() {
  return (
    <>
        <div className='mt-56 w-full absolute top-0 '>
            <div className="text-design flex flex-col items-center space-y-48  max-sm:text-center  ">
                <p className={`${style.design}  text-[90px] tracking-wide font-orbitronBlack text-transparent opacity-10 absolute max-sm:text-center max-sm:text-[40px] max-md:text-[40px] max-lg:text-[46px] max-xl:text-[64px] max-2xl:text-[76px] max-md:text-center max-lg:text-center max-xl:text-center text-center `}>MERN STACK DEVELOPER</p>

                <p className={`${style.design}  text-[90px] tracking-wide font-orbitronBlack text-transparent opacity-10 absolute max-sm:text-center max-sm:text-[40px]  max-md:text-[40px]  max-lg:text-[46px] max-xl:text-[64px] max-2xl:text-[76px] max-md:text-center max-lg:text-center max-xl:text-center text-center  `}>MERN STACK DEVELOPER</p>
            </div>
        </div>
    </>
  )
}
