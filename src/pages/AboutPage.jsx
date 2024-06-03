import { Link } from "react-router-dom";
import AboutDetailsCard from "../components/aboutPageComponents/AboutDetailsCard";
import HeroAbout from "../components/aboutPageComponents/HeroAbout";
import MarketingSol from "../components/aboutPageComponents/MarketingSol";
import MeetTheTeam from "../components/aboutPageComponents/MeetTheTeam";
import Button from "../components/homePageComponents/Button";
import { FaArrowRight } from "react-icons/fa6";
import { ImQuotesRight } from "react-icons/im";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Contact from "../components/aiSolutionPageComponents/Contact";


const AboutPage = () => {
  return (
    <>
    <div className="mx-auto container bg-gradient-to-b from-light-purple to-gray-50 p-5">
      <div className="">
        <HeroAbout />
      </div>
      <div className=" my-10 flex justify-center">
        <img className="mb-12" src="../AiSolutions/border-center.webp" />
      </div>
      <div>
      <p className=" font-syne font-medium text-xl md:px-16 my-8 text-left">Acumens was established 12 years ago with the basic belief that advertising has the ability to significantly increase our client&apos;s business impact. However, as time progressed, we broadened our range and diversified our services, forming successful partnerships with major corporations and niche brands alike.
      Today, our client base extends globally, enclosing a diverse range of local businesses. At Acumens , we specialize in providing tailored solutions that avoid the one-size-fits-all approach. Our AI services are meticulously designed to seamlessly integrate with and enhance your business operations, aligning perfectly with your unique business needs and objectives. Get ready to be surprised by our AI-Tech, which have been meticulously designed to not only catch your attention but also tell a compelling story about our cutting-edge AI services. Whether it&apos;s for marketing campaigns, website development, app creation or more. We are driven by results, not just fancy technology. Our AI solutions are meticulously crafted to push your business outcomes to new heights, fueling your success forward with every endeavor. Bid farewell to the manual and time consuming tasks as Acumens takes pride in offering seamless, hands-free automation for all your marketing needs. Our AI isn&apos;t offered as a tool. We offer a full-service solution designed to empower your business by doing all the heavy lifting. From campaign optimization to data analysis, let our Expert Team combined with the power of AI handle the intricacies while you focus on what you do best - growing your business. At Acumens, we are dedicated to empowering your success through innovation, creativity and unparalleled dedication. Join us on this transformative journey and discover the power of AI-driven solutions tailored to fit your business like a glove.</p>
         <img src="./pexels-moe-magners-7495294-1536x625.webp" className="w-auto h-auto md:w-full md:h-auto md:p-20 rounded-xl md:rounded-[150px]" />
         <h1 className="text-2xl text-center font-syne font-bold my-10 text-black">
         Our Values
        </h1>
        <AboutDetailsCard />
        <MarketingSol />
      </div>
      <div className=" my-14 flex justify-center">
        <img className="mb-12" src="../AiSolutions/border-center.webp" />
      </div>
      <div>
          <MeetTheTeam />
      </div>
      <div className=" my-14 flex justify-center">
        <img className="mb-12" src="../AiSolutions/border-center.webp" />
      </div>
      <h1 className="text-xl text-left font-syne font-bold text-black mx-9 py-5 ">Credentials & recognition:</h1>
            <div className="flex flex-col flex-wrap md:flex-row justify-center items-center md:my-5 gap-16 md:mx-auto">
                 <img src="./56cf51c7d935aba26a8f553867bf878b-q7mfoumzkoldxrff773af1pmaib4qb0z9nr3xilijk.webp" className=""/>
                 <img src="./new-badge20220412-1161242-19o8jy5-q7mfkvripv5sx16ydhbzw1rjzxvc8b9s20lazghctc.webp" className=""/>
                 <img src="./new-badge20211006-5432-t7lh3l-q7mfkwpcwp738n5l7zqmgjj0lbqpg0die58sgqfyn4.webp" className=""/>
                 <img src="./new-badge20211005-28345-8m8kvp-q7mfkyl1ad9nvv2ux0jvlj1xs3hfvekz2ejrfad6ao.webp" className=""/>
                 <img src="./logo_hubspot-q7mfl0gr2gxhcpfzpavncu1gpvupsjpnipt64jtz34.webp" className=""/>
                 <Link to="/audit.htm"> <Button>Get Proposal<FaArrowRight className="inline"/></Button></Link>
            </div>

          <h1 className="block text-center text-4xl font-syne font-bold my-16">What our happy customers are saying</h1>  
          <div className="mb-10" >
          <div className="container mb-10 mx-auto space-y-6 bg-gray-100 py-10 rounded-[55px]">
              <div className="flex flex-col justify-start items-start mx-20">
              <ImQuotesRight className=" text-blue-Purple text-5xl" />
              <h1 className=' text-xl lg:text-2xl font-kanit font-medium my-7 italic md:w-[40%]'>&apos;&apos;The entire staff at Acumens have been phenomenal. They are quick with their replies and incredibly helpful.&apos;&apos;</h1>
              <h5 className=" font-bold font-sans">Edward kennedy</h5>
              <h6 className="">Director, Client Experience</h6>
              </div>
              <div className='flex flex-row justify-center items-center md:ml-28 space-y-6 px-8'>
              
              <MdOutlineStarPurple500 className="mt-[24px] text-yellow-400"/>
              <MdOutlineStarPurple500 className=" text-yellow-400"/>
              <MdOutlineStarPurple500 className=" text-yellow-400"/>
              <MdOutlineStarPurple500 className=" text-yellow-400"/>
              <MdOutlineStarPurple500 className=" text-yellow-400"/>
              <br/>
              <h5 className=" md:ml-4 font-bold font-sans block">5000+ clients reviews</h5>
                  
              </div>
          </div>
          <div className="w-full px-8 py-10">
        <div className="container mx-auto">
          <Contact message="See how we can help your business grow with digital marketing" />
        </div>
      </div>
          </div>
    </div>
    </>
  );
};

export default AboutPage;