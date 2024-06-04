import { MdRocket } from "react-icons/md";
import { companyFeedback } from "../../constants/constant";

const AcumensReview = () => {
    return (
        <div className='flex flex-col bg-red-400 lg:flex-row justify-center items-center gap-x-4'>
            <div className='w-full lg:w-[50%] h-full p-3 space-y-10 lg:border-r lg:border-black'>
                <h1 className="text-center text-4xl lg:text-5xl align-middle font-bold font-syne text-black">Driving digital <br></br> revenue for our <br></br> 1000+ satisfied <br></br> customers</h1>
                <div className="px-[5%] lg:px-[15%]">
                    <div className='w-full flex flex-row justify-between items-center space-x-6 bg-white rounded-full pr-5 outline-none'>
                        <span className=" rounded-full text-3xl p-4 outline-none bg-gray-200"><MdRocket /></span>
                        <span className="text-3xl font-bold font-syne text-black">24%</span>
                        <span className="text-[12px] font-bold md:text-[13px] md:font-normal pr-2">Average Traffic <br /> Increase for Clients</span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[50%] h-full p-5'>
                <div className="h-[600px] xs:h-[400px] carousel carousel-vertical rounded-box select-none">

                    {
                        companyFeedback.map((feedBack) => (

                            <div key={feedBack.id} className="carousel-item h-full space-y-10 mb-10">
                                <div className='p-3 flex flex-col space-y-6 justify-center items-start '>
                                    <div>
                                        <p className="text-2xl text-justify italic font-light font-kanit leading-8">{feedBack.opinion}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-base font-normal font-kanit text-black ">{feedBack.companyCEO}</p>
                                        <p className="text-base uppercase font-light font-kanit">{feedBack.company}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default AcumensReview