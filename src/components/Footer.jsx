import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left justify-items-center items-start py-10 px-3'>

                <div className="space-y-5 flex flex-col justify-start items-start">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center">
                        <span className="text-2xl "><SiGooglemaps /></span>
                    </div>
                    <p className="text-left w-36 text-lg font-medium">440 N Barranca Ave.,
                        Covina,
                        CA 91723
                    </p>
                    <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-medium uppercase text-sm text-left">view on map</a>
                </div>

                <div className='space-y-5'>
                    <h5 className='text-lg font-medium text-center'>Services</h5>
                    <div className="flex justify-between items-start gap-8">
                        <div>
                            <ul className='text-base font-normal space-y-2 cursor-pointer'>
                                <li className='hover:text-yellow-500 transition-colors duration-300'>Social Media Automation</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">AI-Fueled Google Business Services</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">AI-Driven E-Commerce Solutions</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">AI-Enhanced App Development</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">Content Writing</li>
                            </ul>

                        </div>
                        <div>
                            <ul className='text-base font-normal space-y-2 cursor-pointer'>
                                <li className='hover:text-yellow-500 transition-colors duration-300'>Search Engine Services (SEO/SEM)</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">AI-Powered Email Marketing</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">AI-Integrated Web Design & Hosting</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">ERP / CRM / IT / ChatBots</li>
                                <li className="hover:text-yellow-500 transition-colors duration-300">CCaaS / Outsourcing & Consulting.</li>
                            </ul>

                        </div>

                    </div>
                </div>

                <div className='space-y-5'>
                    <h5 className='text-lg font-medium'>About Us</h5>
                    <ul className='text-base font-normal space-y-2 cursor-pointer'>
                        <li className='hover:text-yellow-500 transition-colors duration-300'>About</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Blog</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Contact</li>
                    </ul>
                </div>

                <div className='space-y-5 '>
                    <div className='space-y-5'>
                        <h5 className='text-lg font-medium'>Terms</h5>
                        <ul className='text-base font-normal space-y-2 cursor-pointer'>
                            <li className='hover:text-yellow-500 transition-colors duration-300'>Terms & Conditions</li>
                            <li className='hover:text-yellow-500 transition-colors duration-300'>Privacy Policy</li>
                        </ul>
                    </div>
                    <h5 className='text-lg font-medium'>Follow Us</h5>
                    <ul className='flex flex-row justify-start items-center gap-5'>
                        <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><FaLinkedin /></li>
                        <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><FaFacebook /></li>
                        <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><FaTwitter /></li>
                        <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><FaInstagram /></li>
                        <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><FaYoutube /></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer