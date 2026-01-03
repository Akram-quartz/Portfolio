import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useState } from 'react'

function Hero({ isDark }) {

  const [more, setMore] = useState(false)
  const text = "</>"

  gsap.registerPlugin(ScrollTrigger)



  useGSAP(()=>{
    gsap.from('#stagger-hero' ,{
      y : 10,
      opacity : 0,
      duration : 0.6,
      stagger : 0.3,
    })

    gsap.from('#opacity-hero' ,{
      opacity : 0,
      duration : 0.6,
      stagger : 0.2,
      delay : 0.5
    })

    gsap.from('#lihero' ,{
      y : 10,
      opacity : 0,
      duration : 0.5,
      stagger : 0.1,
    })

    gsap.to('#left-hero', {
      scrollTrigger : {
        trigger : '#left-hero',
        start : 10,
        end : 'bottom -20%',
        scrub : true,
        
      },
      y : 150,
      ease : 'power1.inOut'
    })

    gsap.to('#right-hero', {
      scrollTrigger : {
        trigger : '#right-hero',
        start : 10,
        end : 'bottom -20%',
        scrub : true,
        ease : 'power1.inOut'
      },
      y : -80,
    })
  }, [])

  return (
    <div id='hero' className='relative w-full max-w-full h-140 min-h-[calc(100vh-100px)] mt-25 rounded-4xl flex flex-row items-center justify-between py-[5%] px-[11%] box-border overflow-hidden'>
        {!more?<div className='h-full w-1/2 flex flex-col items-start justify-center gap-2'>
            <ul className='z-10 flex flex-row gap-[4%] w-full'>
                <li id='lihero'><a href=""><img src='/Instagram.png' className={`${isDark===true?"invert-100":null}`}></img></a></li>
                <li id='lihero'><a href=""><img src='/Facebook.png' className={`${isDark===true?"invert-100":null}`}></img></a></li>
                <li id='lihero'><a href=""><img src='/Linkedin.png' className={`${isDark===true?"invert-100":null}`}></img></a></li>
                <li id='lihero'><a href=""><img src='/Git.png' className={`${isDark===true?"invert-100":null}`}></img></a></li>
                <li id='lihero'><a href=""><img src='/Mail.png' className={`${isDark===true?"invert-100":null}`}></img></a></li>
            </ul>
            <h2 id='stagger-hero' className='z-10 mt-5 text-2xl font-tem font-bold text-text'>Hi, I am</h2>
            <h1 id='stagger-hero' className='z-10 text-5xl font-inter font-extrabold text-text'>Akram Remmache</h1>
            <p id='stagger-hero' className='z-10 text-2xl font-tem font-bold text-text'>i handle the developement, deployement and maintainance of your website, and bring it to the world.</p>
            <div id='stagger-hero' className='z-10 flex flex-row items-center gap-5'>
              <button className='z-10 font-inter font-bold bg-secondary text-white w-28 h-10 rounded-4xl hover:bg-blue-900 hover:scale-105 transition'>hero me</button>
              <button className='z-10 font-inter font-bold bg-secondary text-white w-15 h-10 rounded-4xl hover:bg-blue-900 hover:scale-105 transition'>Cv</button>
            </div>
        </div>:null}
        <div id='z-10 stagger-hero' className='h-full'>
            <img id='opacity-hero' className='relative z-10 font-tem h-full w-full rounded-2xl border-secondary border-4' src='Me.jpg'></img>
        </div>
        
        <div id='left-hero' className='w-50 h-50 -rotate-45 absolute -left-10 top-10 text-[190px] font-extrabold text-[#7b91b6]'><p id='opacity-hero'>{text}</p></div>
        <div id='right-hero' className='rotate-30 rounded-4xl absolute right-0 top-1/3 z-0!'><span id='opacity-hero' class="z-0 absolute material-symbols-outlined text-[#7b91b6] text-[300px]!">computer</span></div>
    </div>
  )
}

export default Hero