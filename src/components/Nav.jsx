import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react'

function Nav({ isDark, setIsDark }) {
  const theme = [{light : '#DDE1EA', dark : '#221e15'},{light : '#182D4E', dark : '#546c91'},{light : '#EAEBF2', dark : '#000000'}, {dark : '#ffffff', light : '#182D4E'}]

  function ToggleDarkMode() {
    if (!isDark) {
      root.style.setProperty('--color-primary', theme[0].dark);
      root.style.setProperty('--color-secondary', theme[1].dark);
      root.style.setProperty('--color-bg', theme[2].dark);
      root.style.setProperty('--color-text', theme[3].dark);
      setIsDark(true)
    } else if (isDark) {
      root.style.setProperty('--color-primary', theme[0].light);
      root.style.setProperty('--color-secondary', theme[1].light);
      root.style.setProperty('--color-bg', theme[2].light);
      root.style.setProperty('--color-text', theme[3].light);
      setIsDark(false)
    }
    
  }

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to('#nav', {
      scrollTrigger : {
        trigger : '#about',
        start : 50,
        end : 110,
        toggleActions : "play none none reverse"
      },
      width : "100%",
      marginTop : "0px",
      borderRadius : '0',
      left : '0',
      ease : 'power1.inOut',
      duration : 0.2,
      backgroundFilter : 'blur(10px)'
    })

    gsap.from('#nav' ,{
      y : -50,
      opacity : 0,
      duration : 0.6,
      stagger : 0.3,
    })

  }, [])

  return (
    <nav id='nav' className='z-30 box-border fixed w-10/12 h-16 min-h-14 bg-primary rounded-[100px] mt-4 flex flex-row items-center justify-between px-15'>
        <ul className='flex flex-row items-center gap-14 justify-center font-inter font-extrabold'>
            <li><a href="" className='text-sm text-text'>about</a></li>
            <li><a href="" className='text-sm text-text'>skills</a></li>
            <li><a href="" className='text-sm text-text'>works</a></li>
        </ul>
        <img></img>
        <div className='flex flex-row items-center justify-center gap-10'>
          <button><span class="material-symbols-outlined text-text text-3xl! font-extrabold!" onClick={()=>{ToggleDarkMode()}}>dark_mode</span></button>
          <button className='text-sm font-inter font-bold bg-secondary text-white w-26 h-8 rounded-4xl hover:bg-blue-900 hover:scale-105 transition'>Hire me !</button>
        </div>
    </nav>
  )
}

export default Nav