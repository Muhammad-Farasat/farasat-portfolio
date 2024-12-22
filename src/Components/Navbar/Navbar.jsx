import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className=' relative flex justify-center h-96 z-50 '>
        <div
         className={`${style.mainShape} h-full w-full bg-[#141414] `}>
            <p className=' cursor-pointer  text-center font-black pt-2 tracking-widest text-5xl font-orbitron max-sm:text-lg max-sm:text-left max-sm:pl-2 max-sm:mt-0 max-md:text-3xl max-md:text-left max-md:pl-6 max-md:mt-3 max-lg:text-2xl max-lg:mt-2 max-xl:text-4xl '>
              <NavLink to={'/'} className='text-[#eaeaea] no-underline' >Farasat</NavLink>
            </p>
        </div>


        <div className='font-orbitron w-full flex absolute top-10 px-4 max-sm:hidden max-md:hidden max-lg:top-8 '>
          <ul className='  flex gap-x-48 font-semibold tracking-widest  max-lg:gap-x-16 max-lg:text-xs max-xl:text-sm max-xl:gap-x-44 '>
            <li>
              <NavLink to={'/skills'} className={({isActive}) => isActive ? 'underline text-lg text-[#050927] ' : 'text-[#111] no-underline' }>SKILLS</NavLink>
            </li>
            <li><NavLink to={'/projects'} className={({isActive}) => isActive ? 'underline text-lg text-[#050927] ' : 'text-[#111] no-underline' } >PROJECTS</NavLink></li>
          </ul>
          
          <ul className='absolute right-4 flex gap-x-48 font-semibold tracking-widest max-lg:gap-x-16 max-lg:text-xs max-xl:text-sm max-xl:gap-x-44 '>
            <li><NavLink to={'/about'} className={({isActive}) => isActive ? 'underline text-lg text-[#050927] ' : 'text-[#111] no-underline' } >ABOUT</NavLink></li>
            <li><NavLink to={'/contact'} className={({isActive}) => isActive ? 'underline text-lg text-[#050927] ' : 'text-[#111] no-underline' } >CONTACT</NavLink></li>
          </ul>
        </div>
        
        
        <div className=' responsive hidden max-sm:flex absolute max-sm:top-6 max-sm:right-2 max-md:flex max-md:top-12 max-md:right-6 '>
          <ul className={`${style.responsiveUl} w-full flex max-sm:gap-x-2 max-sm:text-[7px] tracking-widest font-orbitronBold max-md:text-sm max-md:gap-x-6 `}>
            <li><NavLink to={'./skills'} className={({isActive}) => isActive ? 'underline  text-[#050927] ' : 'text-[#111] no-underline' }  >SKILLS</NavLink></li>
            <li><NavLink to={'./projects'} className={({isActive}) => isActive ? 'underline  text-[#050927] ' : 'text-[#111] no-underline' } >PROJECTS</NavLink></li>
            <li><NavLink to={'./about'} className={({isActive}) => isActive ? 'underline  text-[#050927] ' : 'text-[#111] no-underline' } >ABOUT</NavLink></li>
            <li><NavLink to={'./contact'} className={({isActive}) => isActive ? 'underline  text-[#050927] ' : 'text-[#111] no-underline' } >CONTACT</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
