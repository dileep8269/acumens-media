import { Link } from "react-router-dom";
import AboutDetailsCard from "../components/aboutPageComponents/AboutDetailsCard";
import HeroAbout from "../components/aboutPageComponents/HeroAbout";
import MarketingSol from "../components/aboutPageComponents/MarketingSol";
import MeetTheTeam from "../components/aboutPageComponents/MeetTheTeam";
import Button from "../components/homePageComponents/Button";
import Contact from "../components/aiSolutionPageComponents/Contact";
import ClientReview from "../components/aiSolutionPageComponents/ClientReview";

const AboutPage = () => {
  return (
    <div className="" style={{ backgroundImage: 'linear-gradient(to bottom, #E9E5FF 2%, #ffffff 20%)' }}>
      <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] p-5">
        <div className="">
          <HeroAbout />
        </div>
        <div className=" my-10 flex justify-center">
          <img className="mb-12" src="../AiSolutions/border-center.webp" />
        </div>
        <div>
          <p className=" font-syne font-medium text-xl md:px-16 my-8 text-left">
            Acumens was established 12 years ago with the basic belief that
            advertising has the ability to significantly increase our
            client&apos;s business impact. However, as time progressed, we
            broadened our range and diversified our services, forming successful
            partnerships with major corporations and niche brands alike. Today,
            our client base extends globally, enclosing a diverse range of local
            businesses. At Acumens , we specialize in providing tailored
            solutions that avoid the one-size-fits-all approach. Our AI services
            are meticulously designed to seamlessly integrate with and enhance
            your business operations, aligning perfectly with your unique
            business needs and objectives. Get ready to be surprised by our
            AI-Tech, which have been meticulously designed to not only catch
            your attention but also tell a compelling story about our
            cutting-edge AI services. Whether it&apos;s for marketing campaigns,
            website development, app creation or more. We are driven by results,
            not just fancy technology. Our AI solutions are meticulously crafted
            to push your business outcomes to new heights, fueling your success
            forward with every endeavor. Bid farewell to the manual and time
            consuming tasks as Acumens takes pride in offering seamless,
            hands-free automation for all your marketing needs. Our AI
            isn&apos;t offered as a tool. We offer a full-service solution
            designed to empower your business by doing all the heavy lifting.
            From campaign optimization to data analysis, let our Expert Team
            combined with the power of AI handle the intricacies while you focus
            on what you do best - growing your business. At Acumens, we are
            dedicated to empowering your success through innovation, creativity
            and unparalleled dedication. Join us on this transformative journey
            and discover the power of AI-driven solutions tailored to fit your
            business like a glove.
          </p>
          <img
            src="./pexels-moe-magners-7495294-1536x625.webp"
            className="w-auto h-auto md:w-full md:h-auto md:p-20 rounded-xl md:rounded-[150px]"
          />
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
        <h1 className="text-xl text-left font-syne font-bold text-black mx-9 py-5 ">
          Credentials & recognition:
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center md:my-5 gap-16 md:mx-auto">
          <img
            src="./56cf51c7d935aba26a8f553867bf878b-q7mfoumzkoldxrff773af1pmaib4qb0z9nr3xilijk.webp"
            className=""
          />
          <img
            src="./new-badge20220412-1161242-19o8jy5-q7mfkvripv5sx16ydhbzw1rjzxvc8b9s20lazghctc.webp"
            className=""
          />
          <img
            src="./new-badge20211006-5432-t7lh3l-q7mfkwpcwp738n5l7zqmgjj0lbqpg0die58sgqfyn4.webp"
            className="bg-black"
          />
          <img
            src="./new-badge20211005-28345-8m8kvp-q7mfkyl1ad9nvv2ux0jvlj1xs3hfvekz2ejrfad6ao.webp"
            className=""
          />
          <img
            src="./logo_hubspot-q7mfl0gr2gxhcpfzpavncu1gpvupsjpnipt64jtz34.webp"
            className=""
          />
          <Link to="/audit.htm">
            {" "}
            <Button>Get Proposal</Button>
          </Link>
        </div>

        <h1 className="block text-center text-4xl font-syne font-bold my-16">
          What our happy customers are saying
        </h1>
        <div className="" style={{ background: '#F7F7FA', borderRadius: '50px', border: '0px solid rgba(0, 0, 0, 0.1)' }}>
        <ClientReview review="''The entire staff at Acumens have been phenomenal. They are quick with their replies and incredibly helpful.''" />
        </div>
        <div className=" mt-10">
          <Contact message="See how we can help your business grow with digital marketing" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
