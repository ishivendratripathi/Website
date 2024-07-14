import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-15 pt-5 md:w-auto w-full '> 
      <h1 className='text-center md:text-left flex md:justify-start md:m-4 justify-center mt-20 font-extrabold text-6xl text-fuchsia-200'>Your Path to<br/>Mental Wellness <br />Starts Here</h1>
     <h2 className='font-bold mt-10 flex md:justify-start justify-center md:m-4  text-white'>Empowering you to achieve mental Well being <br />through compassionate and holisti support</h2>
     <div className="pt-20 flex md:justify-start justify-center md:m-4"><span className='border-2 font-medium rounded-full text-green-900 bg-fuchsia-200 px-4 py-2'><NavLink to={"About Us"}>CONNECT</NavLink></span></div>
     
    </div>
  )
}

export default Home
