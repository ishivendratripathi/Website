import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div className='h-16 mx-96 w-96 border-2 bg-yellow-50 rounded-3xl'>
      <ul className='bg-transparent mt-4 flex gap-4 justify-around '>
      <img className="h-10 w-14 my--4"src="./logo.png" alt="" />
        <li className='bg-transparent font-medium'>Home</li>
        <li className='bg-transparent font-medium'>Teams</li>
        <li className='bg-transparent font-medium'>Clients</li>
        <li className='bg-transparent font-medium'> About us</li>
      </ul>
     </div>
     <h1 className='flex justify-start mt-20 font-extrabold text-6xl text-fuchsia-200'>Your Path to<br/>Mental Wellness <br />Starts Here</h1>
     <h2 className='font-bold mt-10 flex justify-start ml-10  text-white'>Empowering you to achieve mental Well being <br />through compassionate and holisti support</h2>
     <button className='flex justify-start mt-20 border-2 h-12 w-40 pt-3 pl-10 font-medium rounded-full text-green-900 bg-fuchsia-200 ml-20'>CONNECT</button>
     </>
  )
}

export default App
