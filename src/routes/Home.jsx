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
   <div>
    <section className="w-full h-96 bg-white mt-2">
      <h1 className="text-center font-extrabold">Our initiative</h1>
      <div className="w-60 m-20 flex">
        <img src="new.png" alt="" />
      </div>
      </section>
   </div>
    </> 
    );
};

export default Home;
