import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left justify-items-center items-start py-20 px-10'>
                <div className='space-y-5'>
                    <h5 className='text-lg font-medium'>Services</h5>
                    <ul className='text-base font-normal space-y-2 cursor-pointer'>
                        <li className='hover:text-yellow-500 transition-colors duration-300'>Website Design & Development</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Digital Strategy Creation</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Lead Generation & Sales Campaigns</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Brand Awareness & Visibility</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Content Creation & Distribution</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h5 className='text-lg font-medium'>HubSpot</h5>
                    <ul className='text-base font-normal space-y-2 cursor-pointer'>
                        <li className='hover:text-yellow-500 transition-colors duration-300'>Sales & CRM</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">HubSpot Marketing</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">HubSpot Service Hub</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">HubSpot Training</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">HubSpot Setup</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h5 className='text-lg font-medium'>Industry</h5>
                    <ul className='text-base font-normal space-y-2 cursor-pointer'>
                        <li className='hover:text-yellow-500 transition-colors duration-300'>B2B Marketing</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Education</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Automotive</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Healthcare</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Hospitality</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">Real Estate</li>
                        <li className="hover:text-yellow-500 transition-colors duration-300">E-Commerce</li>
                    </ul>
                </div>
                <div className='space-y-5 '>
                    <div className='space-y-5'>
                        <h5 className='text-lg font-medium'>Video</h5>
                        <ul className='text-base font-normal space-y-2 cursor-pointer'>
                            <li className='hover:text-yellow-500 transition-colors duration-300'>Video Marketing</li>
                            <li className='hover:text-yellow-500 transition-colors duration-300'>Video Studio</li>
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