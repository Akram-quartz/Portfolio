import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

function About() {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to('#svg-about-top', {
      scrollTrigger : {
        trigger : '#svg-about-top',
        start : 'top bottom',
        end : 'top top',
        scrub : true,
      },
      y : -200,
    })
  }, [])
  return (
    <div className='relative mt-20 h-140 min-h-dvh w-full bg-secondary z-20'>
        <svg id='svg-about-top' className='absolute -top-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#182D4E" fill-opacity="1" d="M0,96L1440,0L1440,320L0,320Z"></path>
        </svg>
        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,128L1440,192L1440,0L0,0Z"></path>
        </svg>
    </div>
  )
}

export default About