import { blogDetails } from "../../constants/constant"
import { homePageBlogDetails } from "../../constants/constant"

const BlogCard = () => {

    return (
        <>
            <div className="carousel w-full">

                {
                    homePageBlogDetails.map((blog) => (

                        <div key={blog.id} id={blog.id} className="carousel-item w-full flex justify-center">

                            <div className='flex flex-row justify-center items-start gap-2 py-10 md:p-5 md:py-0'>

                                <div className="max-w-[50%] overflow-hidden shadow-lg bg-white rounded-[40px] h-[450px] lg:h-[560px]">
                                    <img src={blog.img1} alt="Card image" className='object-cover w-full' />
                                    <div className="p-8">
                                        <h4 className="font-light font-kanit leading-6 tracking-normal text-base mb-2">{blog.date1}</h4>
                                        <p className="text-black text-xl font-bold font-syne tracking-tighter leading-6 cursor-pointer">
                                            {blog.desc1}
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-[50%] overflow-hidden shadow-lg bg-white rounded-[40px] h-[450px] lg:h-[560px]">
                                    <img src={blog.img2} alt="Card image" className='object-cover w-full' />
                                    <div className="p-8">
                                        <h4 className="font-light font-kanit leading-6 tracking-normal text-base mb-2">{blog.date2}</h4>
                                        <p className="text-black text-xl font-bold font-syne tracking-tighter leading-6 cursor-pointer">
                                            {blog.desc2}
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))
                }


            </div>

            <div className="flex justify-center w-full py-8 gap-2">

                {
                    homePageBlogDetails.map((blog) => (

                        <a key={blog.id} href={`#${blog.id}`} className="w-2 h-2 rounded-full bg-black"></a>

                    ))
                }
            </div>



        </>
    )
}

export default BlogCard