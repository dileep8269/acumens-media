import React from 'react'

const AboutUs = ({about}) => {
    return (
        <div className='p-7'>
            <h2 className='text-left uppercase text-base font-semibold text-black'>{about.title}</h2>
            <div className='flex flex-col md:flex-row justify-center items-start gap-x-7'>
                <div className='w-full md:w-1/2 py-5'>
                    <p className='text-left text-3xl font-semibold'>{about.overView}</p>
                </div>
                <div className='w-full md:w-1/2 py-5'>
                    <p className='text-left text-base mb-5'>{about.about}</p>

                    <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-medium uppercase text-sm">{about.buttonTitle}</a>
                </div>
            </div>

        </div>
    )
}

export default AboutUs