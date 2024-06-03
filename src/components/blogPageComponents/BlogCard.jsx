import { blogCardDetails } from "../../constants/blogPageConstants"


const BlogCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-10 px-8">

            {
                blogCardDetails?.map((cardDetail,index) => (

                    <div key={index} className="md:w-[400px] h-[480px] w-[350px] overflow-hidden shadow-lg bg-white bg-opacity-50 backdrop-blur-md rounded-[40px] ">
                        <img className="w-full h-[270px]" src={cardDetail?.img} alt="Sample Image" />
                        <div className="px-6 py-6">
                            <h6 className=" text-base mb-2">{cardDetail.date}</h6>
                            <p className="text-black text-lg font-medium">
                                {cardDetail.context}
                            </p>
                        </div>
                    </div>

                ))
            }

        </div>
    )
}

export default BlogCard