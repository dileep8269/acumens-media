import { blogDetails } from "../../constants/constant"

const BlogCard = () => {

    return (
        <>
            <div className="carousel w-full">

                {
                    blogDetails.map((blog) => (

                        <div key={blog.id} id={blog.id} className="carousel-item w-full flex justify-center">

                            <div className='flex flex-row justify-center items-center '>

                                <div className="max-w-md rounded-[40px] overflow-hidden shadow-lg shadow-slate-200 bg-white">

                                    <img src={blog.img} alt="Card image" className='object-cover w-full' />

                                    <div className="p-8">
                                        <h4 className="font-light font-kanit leading-6 tracking-normal text-base mb-2">{blog.date}</h4>
                                        <p className="text-black text-xl font-bold font-syne tracking-tighter leading-6 cursor-pointer">
                                            {blog.desc}
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
                    blogDetails.map((blog) => (
                        
                        <a key={blog.id} href={`#${blog.id}`} className="w-2 h-2 rounded-full bg-black"></a>

                    ))
                }
            </div>



        </>
    )
}

export default BlogCard