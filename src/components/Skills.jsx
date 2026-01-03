import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MorphSVGPlugin, ScrollTrigger } from 'gsap/all'
import React from 'react'

function Skills() {

    

    
    useGSAP(()=>{
        gsap.to('#clock-1', {
            rotate : 360,
            repeat : -1,
            duration : 25,
            ease : 'none'
        }),
        gsap.to('#clock-2', {
            rotate : 360,
            repeat : -1,
            duration : 7,
            ease : 'none'
        })
    }, [])


  return (
    <div id='skills' className='w-full h-220 min-h-dvh bg-primary pb-[5%] pt-[10%] font-inter text-secondary font-extrabold text-5xl px-[5%] lg:px-[5%] xl:px-[11%]'>
        <h1 className='z-10'>Skills</h1>
        <div className='z-10 grid h-auto w-12/12 grid-cols-2 lg:grid-cols-3 mt-12 text-3xl gap-5'>
            <div className='gap-10 w-76 h-30 text-white bg-[#4385EF] flex flex-row items-center justify-start pl-5 border-secondary border-2 rounded-2xl'>
                <span class="material-symbols-outlined text-6xl!">explosion</span>
                <h2>React js</h2>
            </div>
            <div className='gap-10 w-76 h-30 text-white bg-[#009E15] flex flex-row items-center justify-start pl-5 border-secondary border-2 rounded-2xl'>
                <span class="material-symbols-outlined text-6xl!">explosion</span>
                <h2>Tailwind</h2>
            </div>
            <div className='gap-10 w-76 flex flex-row items-center justify-center row-span-2'>
                <div className='w-76 h-76 bg-primary border-secondary border-2 rounded-full flex items-center justify-center'>
                    <div className='absolute w-5 h-5 bg-secondary rounded-full'></div>
                    <div id='clock-1' className='absolute h-full w-full flex items-center justify-center'>
                        <div className='absolute w-20 h-4 bg-secondary right-12'></div>
                    </div>
                    <div id='clock-2' className='absolute h-full w-full flex items-center justify-center'>
                        <div className='absolute w-30 h-2 bg-secondary left-3'></div>
                    </div>
                </div>
            </div>
            <div className='gap-10 w-76 h-30 text-white bg-[#637FAB] flex flex-row items-center justify-start pl-5 border-secondary border-2 rounded-2xl'>
                <span class="material-symbols-outlined text-6xl!">explosion</span>
                <h2>GSAP</h2>
            </div>
            <div className='gap-10 w-76 flex  flex-row items-center justify-center row-span-2 bg-secondary border-secondary border-2 rounded-2xl'>
                <h3 className='text-4xl px-3 text-white'>The right developer at the right time can make all the difference in the world</h3>
            </div>
            <div className='gap-10 w-76 h-30 text-white bg-[#54945B] flex flex-row items-center justify-start pl-5 border-secondary border-2 rounded-2xl'>
                <span class="material-symbols-outlined text-6xl!">explosion</span>
                <h2>Node js</h2>
            </div>
            <div className='gap-10 w-76 h-30 text-white bg-[#9340AA] flex flex-row items-center justify-start pl-5 border-secondary border-2 rounded-2xl'>
                <span class="material-symbols-outlined">explosion</span>
                <h2>Figma</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills