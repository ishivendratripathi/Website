import React from 'react'

export default function Morearticles(props) {
  return (
    <div className='h-lvh w-lvw bg-white'>
    <img className='h-40 w-40 border-2 border-black rounded-full relative top-28 left-40 z-40' src='new.png'>
    </img>
     <div className='h-96 w-80 border-2 border-black relative top-10 left-20 rounded-3xl'>
    <div className='mt-20 font-bold text-2xl text-center'>
        {props.title}
        </div>
        <button className='border-2 rounded-3xl h-10 w-40 mt-36 ml-20 text-white font-bold bg-green-700 static'>Read More</button>
        </div>
    </div>
  )
}
