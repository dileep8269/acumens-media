const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-start gap-y-10 gap-x-6'>
            <div className='w-full md:w-1/2 space-y-6 md:space-y-16 text-left align-middle'>
                <h6 className='text-left uppercase text-lg font-semibold font-syne text-black'>May 12, 2023</h6>
                <h1 className='text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[90%] text-black'>
                    The evolution of live-stream content and short-form video: a look at the TikTok revolution
                </h1>
                <div>
                    <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-bold uppercase text-sm font-syne">
                        READ FULL STORY
                    </a>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <img src="GettyImages-1436826358.webp" alt="Hero-Img" className='w-[400px] object-cover rounded-[40px]' />
            </div>
        </div>
    )
}

export default Hero