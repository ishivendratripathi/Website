import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="mt-15 pt-5 md:w-auto w-full ">
      <h1 className="text-center md:text-left flex md:ml-20 justify-start md:m-4 mt-20 font-extrabold text-6xl text-fuchsia-200">
        Your Path to
        <br />
        Mental Wellness <br />
        Starts Here
      </h1>
      <h2 className="font-bold mt-10 flex md:justify-start md:ml-20 text-white">
        Empowering you to achieve mental Well being <br />
        through compassionate and holisti support
      </h2>
      <div className="pt-20 flex md:justify-start justify-center md:ml-20">
        <span className="border-2 font-medium rounded-full text-green-900 bg-fuchsia-200 px-4 py-2">
          <NavLink to={"About Us"}>CONNECT</NavLink>
        </span>
      </div>
    </div>

    {/* this is the starting of the initiative section */}
   <section className="h-4/4 w-full bg-white p-4 mt-4">
    <h1 className="text-center font-extrabold text-2xl text-green-700 mt-20 relative">
      Our Initiatives
    </h1>
    <div className="flex">
    <img className ="w-96 h-96 ml-40 mt-20 flex"src="new.png" alt="" />
    <h1 className="font-extrabold text-5xl text-green-900 m-20 ml-28 mt-32">Nurturing your mental <br />health with <br />compassion and <br /> expertise 
    <h4 className="font-thin text-base mt-4">Our holistic approach ensures personalized support to help you achieve balance peace and overall well being on your jounrye to mental Wellness</h4> 
    <button className="bg-fuchsia-300 border-2 w-28 h-10 rounded-3xl text-sm font-bold">Volunteer</button>  
      </h1>
       </div> 
       </section>

       {/* this is the third section */}
   
   <section>
    <div className="h-96 bg-white flex">
      <div>
        <img className="h-80 w-auto flex" src="new2.png" alt="" />
        <h1>i am shivendra tripathi</h1>
        </div>
        </div>
   </section>
    </> 
    );
};

export default Home;
