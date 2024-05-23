import { blogDetails } from "../constants/constant"

const BlogCard = () => {

    return (
        <>
            <div className="carousel w-full py-10">

                {
                    blogDetails.map((blog) => (

                        <div key={blog.id} id={blog.id} className="carousel-item w-full flex justify-center">

                            <div className='flex flex-row gap-3 justify-center items-center '>

                                <div className="max-w-md rounded-[40px] overflow-hidden shadow-lg shadow-slate-200 bg-white">

                                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Card image" className='object-cover w-full' />

                                    <div className="p-8">
                                        <h4 className="font-no text-base mb-2">{blog.date}</h4>
                                        <p className="text-gray-700 text-lg font-semibold cursor-pointer">
                                            {blog.desc}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))
                }


            </div>

            <div className="flex justify-center w-full py-10 gap-2">

                {
                    blogDetails.map((blog) => (
                        
                        <a key={blog.id} href={`#${blog.id}`} className="w-3 h-3 rounded-full bg-black"></a>

                    ))
                }
            </div>



        </>
    )
}

export default BlogCard