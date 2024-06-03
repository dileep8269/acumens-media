import { Link } from "react-router-dom";
import AboutDetailsCard from "../components/aboutPageComponents/AboutDetailsCard";
import HeroAbout from "../components/aboutPageComponents/HeroAbout";
import MarketingSol from "../components/aboutPageComponents/MarketingSol";
import MeetTheTeam from "../components/aboutPageComponents/MeetTheTeam";
import Button from "../components/homePageComponents/Button";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
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
                 <Link to="/audit.htm"> <Button>Get Proposal</Button></Link>
            </div>

          <h1 className="block text-center text-4xl font-syne font-bold my-16">What our happy customers are saying</h1>  
          <div className='flex flex-col md:flex-row gap-6 justify-center items-center container mx-auto'>
            <div className='w-full md:w-1/2 space-y-20 py-20 px-20'>
                <span className="text-7xl text-blue-Purple"><RiDoubleQuotesR /></span>
                <p className="text-xl font-kanit font-normal leading-6 tracking-normal italic">&apos;&apos;The entire staff at Acumens have been phenomenal. They are quick with their replies and incredibly helpful.&apos;&apos;</p>
                <div className="space-y-0">
                    <h6 className='text-left uppercase text-lg font-semibold font-syne text-black'>Edward Kennedy</h6>
                    <p className="font-kanit font-light">Director, client experience</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded-t-[40px] h-[580px] relative">
                <img src="./aiSolutionPictures/video-cover.webp" alt="sdsds" className='w-full h-full object-cover absolute rounded-t-[40px]' />
                <div className="absolute h-24 w-full  bottom-0 left-0 rounded-tl-[46px] flex flex-row justify-between items-center px-8 bg-white">
                    <div className="flex flex-col justify-center items-center gap-y-2">

                        <div className="flex gap-x-2 justify-center items-center">
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                        </div>
                        <div className="text-[10px] md:text-sm font-kanit font-normal leading-6 tracking-normal ">
                            5000+ Client reviews
                        </div>
                    </div>

                    <div>
                        <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-bold uppercase text-[10px] md:text-sm font-syne">View All Reviews</a>
                    </div>

                </div>
            </div>
        </div>
        <div className="w-full px-8 py-10">
        <div className="container mx-auto">
          <Contact message="See how we can help your business grow with digital marketing" />
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;