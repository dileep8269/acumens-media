import { Link } from "react-router-dom"
import { SiGooglemaps } from "react-icons/si"
import { FaStar } from "react-icons/fa";

const Portfolio = ({images}) => {
    return (
        <div className="rounded-[40px] bg-[#f7f7fa]">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-[40px]">

                {/* 1st column */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6 p-10 border-r border-slate-300">
                    <img className="w-12 h-12 rounded-full object-center" src="one.webp" alt="one.webp" />
                    <h6 className="font-kanit font-normal text-lg text-black">Talk to a growth expert</h6>
                    <div className="flex flex-col md:flex-row md:justify-between justify-start items-start gap-2">
                        <div className="py-2 space-y-6 text-black">
                            <p className="text-sm font-light font-kanit ">
                                Sales:
                                <br />
                                <Link to="tel:+18009694409">800-969-4409</Link>
                            </p>
                            <p className="text-sm font-light font-kanit ">
                                Support:
                                <br />
                                <Link to="tel:+18009694409">888-491-5291</Link>
                            </p>
                        </div>
                        <div className="py-2 space-y-6 text-black">
                            <p className="text-sm font-light font-kanit ">
                                Sales:
                                <br />
                                <Link to="mailto:sales@acumensinc.com">
                                    sales@acumensinc.com
                                </Link>
                            </p>
                            <p className="text-sm font-light font-kanit ">
                                Support:
                                <br />
                                <Link to="mailto:support@acumensinc.com">
                                    support@acumensinc.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2nd column */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 p-10 border-r border-slate-300">

                    <div className="space-y-3 flex flex-col justify-center items-center text-center">
                        <h5 className='text-lg font-bold font-syne text-black'>Address</h5>
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center">
                            <span className="text-2xl text-blue-Purple"><SiGooglemaps /></span>
                        </div>
                        <p className=" w-48 text-base font-normal font-syne  text-black">440 N Barranca Ave.,
                            Covina,
                            CA 91723
                        </p>
                        <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                            <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                                <Link to="" className="font-bold uppercase text-sm font-syne text-black">view on map</Link>
                            </span>
                        </div>
                    </div>

                </div>

                {/* 3rd column */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 p-10">

                    <div className="flex justify-between items-center my-[20%]">
                        <div>

                            <div className="flex justify-center items-center mb-4 text-black">
                                <h6 className="font-kanit uppercase text-base tracking-tight leading-6 mr-4">REVIEWED ON</h6>
                                <span className="text-orange-600"><FaStar /></span>
                                <span className="text-orange-600"><FaStar /></span>
                                <span className="text-orange-600"><FaStar /></span>
                                <span className="text-orange-600"><FaStar /></span>
                                <span className="text-orange-600"><FaStar /></span>
                            </div>
                            <div className="flex justify-start items-center text-black">
                                <img className="object-contain mr-14" src="F7.webp" alt="F7.webp" />
                                <p className="font-kanit font-light tracking-tight text-lg">4.9 Rating</p>
                            </div>
                        </div>
                        <div>
                            <img className="object-contain" src="F7.webp" alt="F7.webp" />
                        </div>

                    </div>

                </div>

            </div>

            {/* logo Displaying Body */}
            <div className="flex flex-wrap justify-between items-center gap-6 px-8 lg:px-10 py-10 bg-[#f7f7fa] rounded-b-[40px]">
                {images?.map((image, index) => (
                    <img key={index} src={image} alt={image} />
                ))}
            </div>

        </div>
    )
}

export default Portfolio