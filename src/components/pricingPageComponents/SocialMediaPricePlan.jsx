
import Button from '../homePageComponents/Button'
import { Link } from 'react-router-dom'

const SocialMediaPricePlan = ({price, plan}) => {

    const formatPrice = (price) => `$${price.toFixed(2)}`;

    return (
        <div className="relative bg-black w-[330px] h-[830px] rounded-[40px] shrink-0">
           {plan?.badge && <div className='absolute left-[35%] -top-7 z-50 bg-blue-Purple py-2 px-6 rounded-[40px]'>
                <p className='text-lg font-normal font-kanit leading-6 text-white tracking-wide'>{plan.badge}</p>
            </div>}
            <div className="absolute inset-y-[-6px] left-2.5 w-[330px] h-[830px] bg-white rounded-[40px] border border-black py-8 space-y-4 px-3 shrink-0">

                <h1 className='text-center font-syne text-3xl font-bold text-black'>{plan.pricePlan}</h1>
                <h1 className="text-3xl text-center font-kanit font-light text-gray-900 pb-4 mb-4 leading-none">
                    {formatPrice(price)}
                    <span className='text-lg font-syne font-normal text-black'> /month</span>
                </h1>
                {
                    plan?.plans.map((feature, index) => (

                        <p key={index} className='flex flex-row gap-x-3 justify-start items-start'>
                            <span className={`${feature.color} text-xl mt-0.5`}> {feature.icon} </span>
                            <span className='font-kanit text-lg font-light leading-6 text-black'>{feature.text}</span>
                        </p>

                    ))
                }
                <p className='flex flex-row gap-x-3 justify-start items-start'>
                    <span className={`${plan.color} text-xl mt-0.5`}> {plan.icon} </span>
                    <span className='font-kanit text-lg font-light leading-6 text-black'>
                        {plan.threeMonthPlan1}
                        <br /> -OR- <br />
                        {plan.threeMonthPlan2}
                    </span>
                </p>

                <Button className='uppercase mx-auto'>{plan.buttonText}</Button>

                <div className='text-center'>
                    <Link className='font-kanit font-light text-lg leading-6 text-black hover:text-blue-Purple transition-colors duration-500'>Compare Plans</Link>
                </div>

            </div>
        </div>
    )
}

export default SocialMediaPricePlan