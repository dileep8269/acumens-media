import './DisplayCard.css';
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { socialMediaServices } from '../constants/constant';

const DisplayCard = () => {
    return (

        <div className='div-container'>

            {
                socialMediaServices.map((service) => (

                    <div key={service.id} className="card select-none">
                        <div className="front-card">
                            <div className='flex flex-col justify-center items-center gap-4 px-4 h-full'>
                                <h1 className='text-xl text-center font-bold'>{service.header}</h1>
                                <span className='flex h-44 w-44 rounded-full border-[1px] border-slate-500 justify-center items-center'>
                                    <span className='flex flex-col gap-y-2 h-[138px] w-[138px] rounded-full border-[1px] border-blue-700 justify-center items-center p-6'>
                                        <span className='text-4xl font-bold'>{service.percentage}</span>
                                        <span className='text-3xl'><BiSolidUpArrowAlt /></span>
                                    </span>

                                </span>
                                <span className='text-md text-center font-semibold text-black'>
                                    {service.content}
                                </span>

                            </div>
                        </div>
                        <div className="back-card">
                            <ul className='flex flex-col gap-4 justify-center items-start h-[85%] list-none text-lg font-normal text-black'>
                                {
                                    service.list.map((service, index) => (

                                        <li key={index} className='hover:list-disc'>{service}</li>

                                    ))
                                }
                            </ul>
                            <div className='h-[15%] text-left'>
                                <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-medium uppercase text-sm">Get Details</a>
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>

    )
}

export default DisplayCard