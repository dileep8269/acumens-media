/* eslint-disable react/prop-types */
import "../homePageComponents/DisplayCard.css"

const ServiceCard = ({ services }) => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 p-4'>

            {
                services?.map((service, index) => (

                    <div key={index} className="card select-none">
                        <div className="front-card">
                            <div className='flex flex-col justify-center items-center gap-y-6 px-4 h-full'>
                                <h1 className='text-xl text-center font-bold font-syne text-black'>{service?.title}</h1>
                                <p className='text-base text-justify font-light font-kanit leading-6 tracking-normal text-black'>
                                    {service?.context}
                                </p>
                            </div>
                        </div>
                        <div className="back-card">
                            <div className='flex flex-col justify-center items-center gap-y-24 px-4 h-full'>
                                <p className='text-lg text-center font-light font-kanit leading-6 tracking-normal text-black'>{service?.header}
                                </p>
                                <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-bold uppercase text-sm font-syne">Get An Audit</a>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default ServiceCard