import React from 'react'

const AiSection = () => {
  return (
    <>
    
        <div className='flex flex-col lg:flex-row justify-start items-center gap-6'>
            <div className='w-full px-8 h-full md:w-[50%] space-y-6'>

                <h4 className='text-base font-medium uppercase'>ASCendance OF AI</h4>
                <h1 className='text-4xl font-semibold'>Precision in Digital Evolution: AI Unveiled</h1>
                <p className='text-base'>Discover the Future of Digital Excellence with Our AI-Powered Solutions. At Acumens Media, we leverage cutting-edge artificial intelligence technologies to drive innovation and transform your digital presence. Our advanced AI tools are meticulously crafted to propel your business into the future, ensuring unparalleled success in the dynamic digital landscape.</p>
                <button className='btn btn-secondary font-medium uppercase'>Collaborate with Acumens</button>

            </div>
            <div className='px-8 md:px-[5%] md:w-[50%] w-full'>
            
                <div className='relative w-full bg-red-500'>
                    <img src="GettyImages-1436826358.webp" alt="GettyImages-1436826358" className='w-52 h-52 sm:w-80 sm:h-80 rounded-[40px] absolute object-cover top-0 lg:-top-32 left-0' />
                    <img src="GettyImages-1437209359.webp" alt="GettyImages-1437209359" className='w-44 h-44 sm:w-56 sm:h-56 rounded-[40px] absolute object-cover top-28 left-28 lg:top-9 md:top-48 md:left-48 border-[15px] border-white' />

                </div>
            </div>
        </div>       
    
    </>

  )
}

export default AiSection