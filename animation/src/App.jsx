import React from 'react'
import Navbar from './components/Navbar'
import LangingPage from './components/LangingPage'
import Marquee from './components/Marquee'

const App = () => {
  return (
   <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
       <LangingPage/>
       <Marquee/>
   </div>
  )
}

export default App