import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 text-center lg:text-left justify-items-center items-start py-5 px-3 '>

                <div className="space-y-5 flex flex-col justify-center items-center text-center">
                    <h5 className='text-lg font-bold font-syne text-black'>Address</h5>
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center">
                        <span className="text-2xl "><SiGooglemaps /></span>
                    </div>
                    <p className=" w-48 text-lg font-normal font-syne text-black">440 N Barranca Ave.,
                        Covina,
                        CA 91723
                    </p>
                    <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-bold uppercase text-sm font-syne">view on map</a>
                </div>

                <div className='space-y-5'>
                    <h5 className='text-lg font-bold font-syne text-black text-center'>Services</h5>
                    <div className="flex justify-between items-start gap-8">
                        <div>
                            <ul className='text-base font-normal space-y-2 cursor-pointer'>
                     
                         <li className='hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6'><Link to='/Social-media-automation.htm'>Social Media Automation</Link></li>
              
                     
                             <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/Google-suite.htm'>AI-Fueled Google Business Services</Link></li>
                    
                          <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/E-commerce.htm'>AI-Driven E-Commerce Solutions</Link></li>
                      
                           
                             <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/app-development.htm'>AI-Enhanced App Development</Link></li>
                     
           
                   <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/Content-writing.htm'>Content Writing</Link></li>
       
                            </ul>

                        </div>
                        <div>
                            <ul className='text-base font-normal space-y-2 cursor-pointer'>
                 
                           <li className='hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6'><Link to='/Seo.htm'>Search Engine Services (SEO/SEM)</Link></li>
                   
               
                                <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/Email-Marketing.htm'>AI-Powered Email Marketing</Link></li>

                    
                                <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/Web-Design-Hosting.htm'>AI-Integrated Web Design & Hosting</Link></li>
                                <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/Erp-Crm-It-Chatbots.htm'>ERP / CRM / IT / ChatBots</Link></li>
                                <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/CCaaS-Outsourcing-Consulting.htm'>CCaaS / Outsourcing & Consulting.</Link></li>
                            </ul>

                        </div>

                    </div>
                </div>

                <div className='space-y-5'>
                    <h5 className='text-lg font-bold font-syne text-black'>About Us</h5>
                    <ul className='text-base font-normal space-y-2 cursor-pointer'>
                        <li className='hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6'><Link to='/about.htm'>About</Link></li>
                        <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/blog.htm'>Blog</Link></li>
                        <li className="hover:text-blue-500 transition-colors duration-300 text-base font-kanit font-light tracking-normal leading-6"><Link to='/contact.htm'>Contact</Link></li>
                    </ul>

                    <div className='space-y-5 '>
                        <h5 className='text-lg font-medium'>Follow Us</h5>
                        <ul className='flex flex-row justify-start items-center gap-5'>
                            <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><Link to='/'><FaLinkedin /></Link></li>
                            <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><Link to='/'><FaFacebook /></Link></li>
                            <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><Link to='/'><FaTwitter /></Link></li>
                            <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><Link to='/'><FaInstagram /></Link></li>
                            <li className="text-xl cursor-pointer hover:scale-150 transition-transform duration-700"><Link to='/'><FaYoutube /></Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer