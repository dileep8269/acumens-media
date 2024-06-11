import Button from "../homePageComponents/Button"

const HeroL = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-6  px-8 py-16'>
    <div className='w-full md:w-[30%] space-y-6 text-left'>
      
      <h1 className='text-left text-3xl lg:text-4xl font-bold font-syne  text-black'>Everything You Need to Create a Website</h1>
      <h6 className='text-left uppercase text-lg font-semibold font-syne text-black'>Up to 83% off Hosting + Website Builder</h6>
      <ul className='text-left list-disc text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 '>
      <li>Free Domain</li>
      <li>Free Website Migration</li>
      <li>24/7 Customer Support</li>
      </ul>
      <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 '>₹
      <span className="text-4xl">69.00</span>
      /mo
      + 3 Months Free
      </p>
      <Button>Start Now</Button>
    </div>
    <div className='w-full md:w-[70%] flex flex-col md:flex-row lg:justify-end gap-4 justify-center items-center'>
      <img src='GettyImages-1437209359.webp' alt="sdsds" className='w-[400px] h-[400px] object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' />
      <img src='pexels-monstera-6282022-1024x948.webp' alt="sdsds" className='w-[400px] h-[400px] object-cover md:hidden xl:block rounded-[40px] transition-transform duration-1000 hover:scale-95' />
      </div>
  </div>
  )
}

export default HeroL
