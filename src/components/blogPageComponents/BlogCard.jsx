import { blogCardDetails } from "../../constants/blogPageConstants"


const BlogCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-10 px-8">

            {
                blogCardDetails?.map((cardDetail,index) => (

                    <div key={index} className="max-w-sm overflow-hidden shadow-lg bg-white bg-opacity-50 backdrop-blur-md rounded-[40px]">
                        <img className="w-full" src="GettyImages-1436826358.webp" alt="Sample Image" />
                        <div className="px-6 py-4">
                            <h6 className="font-bold text-xl mb-2">{cardDetail.date}</h6>
                            <p className="text-gray-700 text-base">
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