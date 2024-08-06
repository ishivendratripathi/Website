import React from 'react'

const Faq = (props) => {
  return (
    <div className='h-80 w-96 border-2 border-black relative top-60 rounded-2xl ml-16 bg-white overflow-scroll'>
    <div className='flex items-center justify-center font-bold text-green-700 text-3xl m-4'>
      {props.title}
    </div>
    <br />
    <div className='flex items-center justify-center m-2'>
      {props.description}
    </div>
    </div>
  )
}

export default Faq
