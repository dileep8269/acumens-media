import { useContext } from "react";
import { MyContext } from "../../context api/MyProvider";
import Carousel from "./Carousel";
import Button from "./Button";

const Hero = () => {

    const { menuOpen } = useContext(MyContext);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-max p-8 pt-24 md:pt-28 gap-10 text-white">
            <div className="text-left md:w-3/5 space-y-16">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-syne">“Unleash” the power of AI for Intelligent Search Engine Optimization</h1>
                <p className="text-base font-kanit font-light mb-6 lg:w-[80%] tracking-normal leading-6"> <span className="inline-block mb-5">Ready for a paradigm shift in your business's online marketing & promotions?</span> <br /> <span >At Acumens, we're redefining the landscape with AI-driven strategies that are propelling businesses to new heights. Contact us today to Elevate your Business with AI-POWERED Youtube, Social Media & Search Engine Marketing.</span></p>
                <Button>Get Started</Button>
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