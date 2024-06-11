import { FaStar } from "react-icons/fa";

const Review = ({ review,borderColor }) => {

    return (
        <div className="space-y-4">

            <h1 className='text-lg font-syne font-bold leading-6 tracking-normal'>{review.companyName}</h1>

            <div className="flex justify-start items-center gap-4 ">
                {
                    review.rating.map((rating, index) => (

                        <div key={index} className='text-2xl text-green-700'><FaStar /></div>

                    ))
                }

            </div>
            
            <p> Rating : <span className={`border-r-[1px] ${borderColor} pr-1 font-kanit font-normal leading-6 tracking-normal`}>{review.scores.ratingScore}</span> <span className='font-kanit font-normal leading-6 tracking-normal'>{review.scores.reviewsCount}</span> reviews</p>
            
        </div>
    )
}

export default Review