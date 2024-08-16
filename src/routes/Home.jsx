import { NavLink } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Footer from "./Footer";
import Faq from "./Faq";
import Morearticles from "./Morearticles";
import Aboutus from "./Aboutus";
import Minds from "./Minds";

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
   <Minds /> 

   {/* this is the sign up section  */}
   <section>
    <Signup />
   </section>

   {/* Faq section */}
 <div className='bg-fuchsia-200 w-full h-lvh border-2 border-black flex'>
 <h1 className="absolute left-96 ml-80 mt-16 font-extrabold text-2xl text-green-700">FAQs</h1>
<Faq title="What types of therapy do you offer?" description="At MindCare Solutions, we offer a
variety of therapy options tailored
to meet your specific needs,
including individual therapy,
couples therapy, family therapy,
and group therapy. Our
therapeutic approaches include
cognitive-behavioral therapy
(CBT), mindfulness-based
therapy, and solution-focused
therapy, among others."/>
<Faq title="How do I know if
therapy is right
for me?" description="Therapy can be beneficial for anyone
experiencing stress, anxiety,
depression, relationship issues, or
other mental health challenges. If
you're feeling overwhelmed, stuck, or
seeking personal growth, therapy can
provide the support and tools you
need. Our initial consultation helps
determine the best approach for your
unique situation."/>
<Faq title="Is my
information
confidential?" description="Yes, your privacy is our top priority.
All sessions and communications
with our therapists are completely
confidential. We adhere to strict
professional and ethical guidelines to
ensure your personal information is
protected and your therapy
experience is safe and secure."/>

</div>

{/* this is for the more artciles page */}
<div className="flex">
  <h2 className="absolute ml-96 pl-72 mt-6 font-bold text-2xl text-green-800">More Articles</h2>
<Morearticles title="5 Simple Practices to Improve YourMental Well-being Today"/>
<Morearticles title="Understanding
Anxiety: Symptoms,
Causes, and
Effective"/>
<Morearticles title="The Benefits of Mindfulness Meditation for Mental"/>
</div>


{/* this is the about us section  */}
<Aboutus />

  {/* this is the footer section */}
   <Footer />
    </> 
    );
};

export default Home;
