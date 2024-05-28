import Button from '../homePageComponents/Button'
import { partnerImages } from '../../constants/constant'

const Contact = ({message}) => {
    return (
        <div className="bg-purple-200 rounded-3xl p-20 rounded-t-3xl ">
            <div className='flex flex-col md:flex-row justify-between items-center pb-10 border-b border-slate-200 gap-6'>
                <div className='h-auto w-full md:w-[60%]'>
                    <h1 className='text-center md:text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[63%] text-black'>{message}</h1>
                </div>
                <div className='h-auto w-full md:w-[40%] text-center md:text-right'>
                    <p className=' text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 '>Ready to speak with a marketing <br /> expert ? Call Us</p>
                    <p className=' text-lg font-syne font-bold tracking-normal leading-6 text-black mb-5 '>SALES : 800-969-4409</p>
                    <p className=' text-lg font-syne font-bold tracking-normal leading-6 text-black mb-5 '>SUPPORT : 888-491-5291</p>
                    <div className='flex justify-center md:justify-end items-center'>
                        <Button className='flex'>Get An Audit</Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6 py-10'>
                <div className='h-auto w-full md:w-[60%] space-y-6 mb-10 md:mb-0'>
                    <h6 className='text-center md:text-left uppercase text-lg font-semibold font-syne text-black'>A PARTNER, NOT A VENDOR</h6>
                    <ul className='flex justify-center md:justify-start items-center gap-6 flex-wrap'>
                        {
                            partnerImages.map((image, index) => (

                                <li key={index}>
                                    <img src={image} alt={image} />
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div className='h-auto w-full md:w-[40%] text-center md:text-right space-y-6'>
                    <p className='text-5xl font-syne font-bold leading-6'>6.7 <span className='text-sm'>/ Average ROAS</span></p>
                    <p className=' text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 '>across our 1000+ Global <br /> Clients on SEO, PPC & Social <br /> Media platforms.</p>
                </div>
            </div>

        </div>
    )
}

export default Contact
