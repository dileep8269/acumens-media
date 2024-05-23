import { companyReview } from "../constants/constant"

const BrandCard = () => {
    return (
        <>
            {
                companyReview.map((company) => (

                    <div key={company.id} className='w-[340px] h-[440px] relative'>
                        <div className='w-full h-full bg-blue-600 absolute top-3 left-3 rounded-[35px]'></div>
                        <div className='w-full h-full bg-white absolute rounded-[35px] border border-gray-400 grid grid-cols-1 divide-y px-5 divide-slate-600'>
                            <div className='flex justify-center items-center flex-col gap-y-4 '>
                                <h1 className='text-3xl font-bold leading-relaxed'>{company.companyName}</h1>
                                <p className='text-lg font-medium'>{company.companyOccupation}</p>
                                <p className='text-4xl font-medium'>{company.percentage}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p>{company.domain}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-medium uppercase text-sm">{company.button}</a>
                            </div>
                        </div>
                    </div>

                ))
            }

        </>


    )
}

export default BrandCard