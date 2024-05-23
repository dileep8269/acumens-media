import { useContext } from "react";
import { MyContext } from "../context api/MyProvider";

const Hero = () => {

    const { menuOpen } = useContext(MyContext);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-max p-8 pt-24 md:pt-28 gap-10">
            <div className="text-left md:w-1/2 space-y-16">
                <h1 className="text-5xl font-bold mb-4">“Unleash” the power of AI for Intelligent Search Engine Optimization</h1>
                <p className="text-lg mb-6"> <span className="inline-block mb-5">Ready for a paradigm shift in your business's online marketing & promotions?</span> <br /> <span >At Acumens, we're redefining the landscape with AI-driven strategies that are propelling businesses to new heights. Contact us today to Elevate your Business with AI-POWERED Youtube, Social Media & Search Engine Marketing.</span></p>
                <button className="btn btn-secondary">
                    Get Started
                </button>
            </div>
            <div className={`md:w-1/2 mt-8 md:mt-0 flex justify-start ${menuOpen ? 'sm:-z-20' : ''}`}>

                <div className='w-full max-w-md flex flex-row gap-2 md:gap-4 flex-wrap justify-center'>
                    <img
                        className='h-44 w-36 md:w-36 md:h-44 lg:w-48 lg:h-48 xl:h-60 xl:w-48 animate-rotate-horizontal'
                        src="box-1.webp"
                        alt="Hero"
                    />
                    <img
                        className='h-44 w-36 md:w-36 md:h-44 lg:w-48 lg:h-48 xl:h-60 xl:w-48 animate-rotate-horizontal'
                        src="box-2.webp"
                        alt="Hero"
                    />
                    <img
                        className='h-44 w-36 md:w-36 md:h-44 lg:w-48 lg:h-48 xl:h-60 xl:w-48 animate-rotate-horizontal'
                        src="box-3.webp"
                        alt="Hero"
                    />

                </div>
            </div>
        </div>
    );
}

export default Hero