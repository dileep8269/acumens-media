const AboutSocialMediaSevices = ({ services }) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 px-6 justify-center items-start">

            {
                services?.map((service, index) => (

                    <div key={index} className='flex flex-col w-[380px] h-auto justify-items-start p-5 space-y-4 rounded-2xl'>
                        <span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-purple-900">{service?.icon}</span>
                        <h6 className="font-bold text-base font-syne text-black">{service?.heading}</h6>
                        <p className="text-base font-light font-kanit leading-6 tracking-normal">{service?.context}</p>
                    </div>
                ))
            }


        </div>
    )
}

export default AboutSocialMediaSevices