import Button from "../homePageComponents/Button"

const StrategyCard = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-center items-start gap-6 mt-28 mb-14 px-8'>
      <div className='w-full md:w-1/2 space-y-6 text-left md:ml-14'>
        <h6 className='text-left uppercase text-lg font-bold font-syne text-black'>AI SOLUTIONS</h6>
        <h1 className='text-left text-3xl lg:text-4xl font-bold font-syne lg:w-[80%] text-black'>Strategic Synergy: Elevating Your Vision with Our Dedicated Services</h1>
        <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 lg:w-[60%]'>At the heart of our approach is an unyielding commitment to your strategic goals. Whether crafting engaging content, developing innovative applications, or revolutionizing communication through CCaaS and Outsourcing & Consulting, we are dedicated to aligning with your vision. As your partners, we provide tailored solutions that drive your business towards sustained growth and success</p>
        <Button to="/audit.htm">CONSULT NOW</Button>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <img src="../AiSolutions/pexels-pavel-danilyuk-7675014.webp" alt="sdsds" className='w-[550px] h-[450px] object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' />
      </div>
    </div>
  )
}

export default StrategyCard