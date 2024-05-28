const AiProcess = ({blog}) => {
    return (
        <div className='py-10 px-8 space-y-6'>
            <h6 className='text-center uppercase text-lg font-semibold font-syne text-black'>{blog?.heading}</h6>
            <div className='flex justify-center items-center'>
                <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[63%] text-black'>{blog?.subHeading}</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12 py-10'>
                <div className='w-full md:w-1/2 space-y-6'>
                    <h1 className='text-left text-4xl font-bold font-syne  text-black'>{blog?.blog1.header}</h1>
                    <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog1.context}</p>
                    {blog?.blog1.context2 && <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog1.context2}</p>}
                    {blog?.blog1.context3 && <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog1.context3}</p>}
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img src={blog?.blog1.photo} alt="sdsds" className='w-[500px] h-[400px] object-cover rounded-[40px]' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12 py-10'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start items-center'>
                    <img src={blog?.blog2.photo} alt="sdsds" className='w-[500px] h-[400px] object-cover rounded-[40px]' />
                </div>
                <div className='w-full md:w-1/2 space-y-6 flex flex-col justify-end items-center'>
                    <h1 className='text-left text-4xl font-bold font-syne text-black'>{blog?.blog2.header}</h1>
                    <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog2.context}</p>
                    {blog?.blog2.context2 &&<p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog2.context2}</p>}
                    {blog?.blog2.context3 &&<p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog2.context3}</p>}
                </div>
            </div>
            {blog?.blog3 && <div className='flex flex-col md:flex-row justify-center items-center gap-12 py-10'>
                <div className='w-full md:w-1/2 space-y-6'>
                    <h1 className='text-left text-4xl font-bold font-syne text-black'>{blog?.blog3.header}</h1>
                    <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog3.context}</p>
                    {blog?.blog3.context2 && <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog3.context2}</p>}
                    {blog?.blog3.context3 && <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog3.context3}</p>}
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img src={blog?.blog3.photo} alt="sdsds" className='w-[500px] h-[400px] object-cover rounded-[40px]' />
                </div>
            </div>}
            {blog?.blog4 && <div className='flex flex-col md:flex-row justify-center items-center gap-12 py-10'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start items-center'>
                    <img src={blog?.blog4.photo} alt="sdsds" className='w-[500px] h-[400px] object-cover rounded-[40px]' />
                </div>
                <div className='w-full md:w-1/2 space-y-6 flex flex-col justify-end items-center'>
                    <h1 className='text-left text-4xl font-bold font-syne text-black'>{blog?.blog4.header}</h1>
                    <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog4.context}</p>
                    {blog?.blog2.context2 &&<p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog4.context2}</p>}
                    {blog?.blog2.context3 &&<p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5'>{blog?.blog4.context3}</p>}
                </div>
            </div>}
        </div>
    )
}

export default AiProcess