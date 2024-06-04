import Branding from "../components/aiSolutionPageComponents/Branding";
import Contact from "../components/aiSolutionPageComponents/Contact";
import DetailsCard from "../components/aiSolutionPageComponents/DetailsCard";
import Hero from "../components/aiSolutionPageComponents/Hero";
import ResultsCard from "../components/aiSolutionPageComponents/ResultsCard";
import StrategyCard from "../components/aiSolutionPageComponents/StrategyCard";
import Button from "../components/homePageComponents/Button";
import { aiSolutionHero } from "../constants/aiConstant";

const AiSolutionsPage = () => {
  return (
    <div className="md:bg-gradient-to-b from-violet-100 to-white mt-0 pt-12">
      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
        <Hero hero={aiSolutionHero} />
      </div>
      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mt-10 mx-auto space-y-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-center font-syne lg:px-[20%] text-black">
          We lead with Client-first strategies:
        </h1>
        <p className="text-base text-center font-sans text-black">
          Driving growth through personalized experiences for truly end-to-end
          business building.
        </p>
        <DetailsCard />
        <div className="mt-10 mb-16 flex justify-center">
          <img className="mb-12" src="../AiSolutions/border-center.webp" />
        </div>
        <div className="">
          <StrategyCard />
        </div>
        <div className=" lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto pb-11">
          <ResultsCard />
        </div>
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <Branding />
        </div>
        <div className="mb-10">
          <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mb-10 mx-auto space-y-6 bg-gray-100 py-10 rounded-[40px]">
            <div className="flex justify-center items-center">
              <img
                src="../AiSolutions/google-logo.webp"
                alt="Google partner"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-6 px-8">
              <h1 className="text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[63%] text-black">
                Get started with a Free consultation
              </h1>
              <Button to="/audit.htm">GET A PROPOSAL</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-8 py-10">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <Contact message="See how we can help your business grow with digital marketing" />
        </div>
      </div>
    </div>
  );
};

export default AiSolutionsPage;
