import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { useState } from 'react'
import About from './components/About'

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <main className='bg-bg box-border max-w-dvw w-screen min-h-dvh flex flex-col items-center overflow-x-hidden relative'>
      <Nav isDark = {isDark} setIsDark = {setIsDark}></Nav>
      <div className='w-screen h-dvh min-h-142'>
        <Hero isDark = {isDark}></Hero>
      </div>
      <About></About>
    </main>
  )
}

export default App