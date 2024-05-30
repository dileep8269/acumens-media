/* eslint-disable react/prop-types */
import Button from "../homePageComponents/Button"

const Hero = ({ hero }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-6  px-8 py-16'>
      <div className='w-full md:w-1/2 space-y-6 text-left'>
        <h6 className='text-left uppercase text-lg font-semibold font-syne text-black'>{hero?.title}</h6>
        <h1 className='text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black'>{hero?.heading}</h1>
        <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 lg:w-[60%]'>{hero?.context1}</p>
        {hero?.context2 && <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 lg:w-[60%]'>{hero?.context2}</p>}
        <Button>{hero?.buttonText}</Button>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <img src={hero?.photo} alt="sdsds" className='w-[400px] h-[400px] object-cover rounded-[40px]' />
      </div>
    </div>
  )
}

export default Hero