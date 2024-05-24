import React from 'react'

const AboutUs = ({about}) => {
    return (
        <div className='p-7'>
            <h2 className='text-left uppercase text-lg font-semibold font-syne text-black'>{about.title}</h2>
            <div className='flex flex-col md:flex-row justify-center items-start gap-x-7'>
                <div className='w-full md:w-1/2 py-5'>
                    <p className='text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black'>{about.overView}</p>
                </div>
                <div className='w-full md:w-1/2 py-5'>
                    <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 lg:w-[80%]'>{about.about}</p>

                    <a href="" className="underline underline-offset-8 decoration-2 decoration-blue-Purple font-bold uppercase text-sm font-syne">{about.buttonTitle}</a>
                </div>
            </div>

        </div>
    )
}

export default AboutUs