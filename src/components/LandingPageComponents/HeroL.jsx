import { FaCircleCheck } from "react-icons/fa6"
import Button from "../homePageComponents/Button"

const HeroL = ({index}) => {
  return (
    <div className={`flex flex-col md:flex-row justify-center items-start gap-6  px-8 py-16 ${index===2?"bg-black text-white rounded-xl":"text-black"}`}>
      <div className='w-full md:w-[30%] space-y-6 text-left '>

        <h1 className='text-left text-3xl lg:text-4xl font-bold font-syne  '>Everything You Need to Create a Website</h1>
        <h6 className='text-left uppercase text-lg font-semibold font-syne '>Up to 83% off Hosting + Website Builder</h6>
        <ul className='text-left list-disc text-lg font-kanit font-normal tracking-normal leading-6  mb-5 space-y-4'>

          <li className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>Free Domain</span></li>
          <li className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>Free Website Migration</span></li>
          <li className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>24/7 Customer Support</span></li>

        </ul>
        <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6  mb-5 '>₹
          <span className="text-4xl">69.00</span>
          /mo
          + 3 Months Free
        </p>
        <Button className="bg-blue-Purple">Start Now</Button>
      </div>
      <div className='w-full md:w-[70%] flex flex-col md:flex-row lg:justify-end gap-4 justify-center items-center'>
        <img src='GettyImages-1437209359.webp' alt="sdsds" className='w-[400px] h-[400px] object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' />
        <img src='pexels-monstera-6282022-1024x948.webp' alt="sdsds" className='w-[400px] h-[400px] object-cover md:hidden xl:block rounded-[40px] transition-transform duration-1000 hover:scale-95' />
      </div>
    </div>
  )
}

export default HeroL
