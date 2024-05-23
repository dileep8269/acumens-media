import { useContext } from "react";
import { MyContext } from "../context api/MyProvider";
import Carousel from "./Carousel";

const Hero = () => {

    const { menuOpen } = useContext(MyContext);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-max p-8 pt-24 md:pt-28 gap-10">
            <div className="text-left md:w-3/5 space-y-16">
                <h1 className="text-5xl font-bold mb-4">“Unleash” the power of AI for Intelligent Search Engine Optimization</h1>
                <p className="text-lg mb-6"> <span className="inline-block mb-5">Ready for a paradigm shift in your business's online marketing & promotions?</span> <br /> <span >At Acumens, we're redefining the landscape with AI-driven strategies that are propelling businesses to new heights. Contact us today to Elevate your Business with AI-POWERED Youtube, Social Media & Search Engine Marketing.</span></p>
                <button className="btn btn-secondary">
                    Get Started
                </button>
            </div>
            <div className={`md:w-2/5 mt-8 md:mt-0 flex justify-start ${menuOpen ? 'md:-z-20' : ''}`}>

                <div className='w-full max-w-md flex flex-row gap-2 md:gap-4 flex-wrap justify-center'>
                    <Carousel />

                </div>
            </div>
        </div>
    );
}

export default Hero