import Button from "./Button"

const AiSection = () => {
  return (
    <>
    
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
            <div className='w-full h-full lg:w-[50%] text-left'>
                <div className="w-[80%] space-y-4 lg:space-y-8">
                <h4 className='text-base font-bold uppercase font-syne text-black '>ASCendance OF AI</h4>
                <h1 className='text-4xl lg:text-5xl font-bold font-syne text-black'>Precision in Digital Evolution: AI Unveiled</h1>
                <p className='text-base font-light font-kanit tracking-normal leading-6'>Discover the Future of Digital Excellence with Our AI-Powered Solutions. At Acumens Media, we leverage cutting-edge artificial intelligence technologies to drive innovation and transform your digital presence. Our advanced AI tools are meticulously crafted to propel your business into the future, ensuring unparalleled success in the dynamic digital landscape.</p>
                <Button>Collaborate with Acumens</Button>

                </div>


            </div>
            <div className='px-8 lg:w-[50%] w-full'>
            
                <div className='relative w-full bg-red-500'>
                    <img src="GettyImages-1436826358.webp" alt="GettyImages-1436826358" className='w-52 h-52 sm:w-96 sm:h-96 2xl:w-[450px] 2xl:h-[450px] rounded-[40px] absolute object-cover top-0 lg:-top-52 left-0' />
                    <img src="GettyImages-1437209359.webp" alt="GettyImages-1437209359" className='w-[170px] h-44 sm:w-64 sm:h-72 2xl:w-[350px] 2xl:h-[400px] rounded-[40px] absolute object-cover top-28 left-28 sm:top-44 sm:left-60 lg:-top-10 md:top-48 md:left-48 2xl:left-72  border-[15px] border-light-purple' />

                </div>
            </div>
        </div>       
    
    </>

  )
}

export default AiSection