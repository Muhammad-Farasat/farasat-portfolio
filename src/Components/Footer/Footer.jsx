import React from 'react'
import style from './footer.module.css'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <>
        <footer className='absolute bottom-0 w-full h-96 ' >
            <div className={` ${style.footerStyle} bg-[#111] flex justify-center w-full h-full`} >
              <p className='text-[#eaeaea] text-center absolute bottom-3 max-sm:text-[8px] max-md:text-sm max-md:bottom-1 '> ©{year}, all rights reserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer