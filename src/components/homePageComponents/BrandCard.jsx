import { companyReview } from "../../constants/constant"

const BrandCard = () => {
    return (
        <>
            {
                companyReview.map((company) => (

                    <div key={company.id} className='2xl:w-[400px] w-[340px] h-[440px] relative'>
                        <div className='w-full h-full bg-blue-Purple absolute top-3 left-3 rounded-[35px]'></div>
                        <div className='w-full h-full bg-white absolute rounded-[35px] border border-gray-400 grid grid-cols-1 divide-y px-5 divide-slate-600'>
                            <div className='flex justify-center items-center flex-col gap-y-4 '>
                                <h1 className='text-5xl font-bold tracking-tight leading-10 font-syne text-black'>{company.companyName}</h1>
                                <p className='text-xl font-normal font-kanit text-black'>{company.companyOccupation}</p>
                                <p className='text-5xl font-bold font-syne text-blue-Purple tracking-tighter'>{company.percentage}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className="font-kanit text-base font-light">{company.domain}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="" className="underline underline-offset-8 decoration-2 decoration-blue-Purple font-bold uppercase text-sm font-syne">{company.button}</a>
                            </div>
                        </div>
                    </div>

                ))
            }

        </>


    )
}

export default BrandCard