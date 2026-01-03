import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import React from 'react'

function About() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MorphSVGPlugin);

  useGSAP(()=>{
    gsap.to('#svg-about-top', {
      scrollTrigger : {
        trigger : '#svg-about-top',
        start : 'top bottom',
        end : 'top top',
        scrub : true,
      },
      y : -100,
    })

    gsap.to('#about', {
      scrollTrigger : {
        trigger : '#about',
        start : 'top bottom',
        end : 'top top',
        scrub : true,
      },
      y : -100,
    })

    gsap.to("#wave1", {
      scrollTrigger : {
        trigger : '#wave1',
        start : 'top bottom',
        end : 'top top',
        scrub : true,
      },
      ease: "sine.inOut",
      morphSVG: "#wave2",
    });

    gsap.to('#about-img', {
      y : -10,
      repeat : -1,
      yoyo : true,
      ease : 'back.inOut',
      duration : 1
    })
  }, [])

  return (
    <div id='about' className='relative mt-40 h-200 min-h-dvh w-full bg-secondary z-20 px-[11%] flex flex-row items-center justify-between'>
      <div className='relative flex flex-col gap-10 w-1/2'>
        <h1 className='text-white font-extrabold text-5xl font-h1'>About me</h1>
        <p className='text-white text-3xl font-medium font-inter'>I am an algerian independent front end web-developer, with a focus on user experience and micro interactions, i am passionate about design, coding, and leaving my print on my people.</p>
        <div id='stagger-hero' className='z-10 flex flex-row items-center gap-5'>
          <button className='z-10 font-inter font-bold bg-primary text-secondary w-28 h-10 rounded-4xl hover:bg-blue-100 hover:scale-105 transition'>hero me</button>
          <button className='z-10 font-inter font-bold bg-primary text-secondary w-15 h-10 rounded-4xl hover:bg-blue-100 hover:scale-105 transition'>Cv</button>
        </div>
      </div>
      <div className='relative w-1/2 flex items-center justify-center'>
        <img id='about-img' src='/aboutRight.png' className='w-10/12'></img>
      </div>
      <svg id='svg-about-top' className='absolute -left-10 -top-50 w-[110%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path id='wave2' className='hidden' fill="#DDE1EA" fill-opacity="1" d="M0,0L30,21.3C60,43,120,85,180,128C240,171,300,213,360,208C420,203,480,149,540,117.3C600,85,660,75,720,101.3C780,128,840,192,900,192C960,192,1020,128,1080,117.3C1140,107,1200,149,1260,170.7C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        <path id='wave1' fill="#182D4E" fill-opacity="1" d="M0,0L26.7,21.3C53.3,43,107,85,160,112C213.3,139,267,149,320,154.7C373.3,160,427,160,480,149.3C533.3,139,587,117,640,133.3C693.3,149,747,203,800,240C853.3,277,907,299,960,298.7C1013.3,299,1067,277,1120,234.7C1173.3,192,1227,128,1280,106.7C1333.3,85,1387,107,1413,117.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default About