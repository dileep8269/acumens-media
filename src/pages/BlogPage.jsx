import { blogCard } from "../constants/blogConstant";

const BlogPage = () => {
    return (
        <div className="mt-24 mb-10">
        <div className="container mx-auto">
      <div className="bg-purple-200 rounded-3xl">
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-28 px-8">
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h6 className="text-left uppercase text-lg font-semibold font-syne text-black">
              May 12, 2023
            </h6>
            <h1 className="text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black">
              The evolution of live-stream content and short-form video: a look
              at the TikTok revolution
            </h1>
            <div>
              <a
                href=""
                className="underline underline-offset-8 decoration-2 decoration-purple-700 font-bold uppercase text-sm font-syne"
              >
                READ FULL STORY
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="https://acumensinc.com/wp-content/uploads/2023/05/milad-fakurian-58Z17lnVS4U-unsplash-Copy.webp"
              alt="sdsds"
              className="w-[400px] h-[400px] object-cover rounded-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  py-20 px-8">
        {blogCard?.map((blogCard, index) => (
          <div key={index} className="card w-auto md:w-auto  glass">
            <figure>
              <img src={blogCard.img} alt="car!" />
            </figure>
            <div className="card-body">
              <h6 className="text-left uppercase text-lg font-semibold font-syne text-black">
                {blogCard.date}
              </h6>
              <p className="text-left text-3xl font-bold font-syne text-black">
                {blogCard.context}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
        
      
      </div>
    );
};

export default BlogPage;