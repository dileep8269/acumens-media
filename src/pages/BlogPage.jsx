import Hero from "../components/blogPageComponents/Hero"
import BlogCard from "../components/blogPageComponents/BlogCard"
import Contact from "../components/aiSolutionPageComponents/Contact"

const BlogPage = () => {
    return (
        <div className="py-12" style={{ backgroundImage: 'linear-gradient(to bottom, #EEEBFF 5%, #ffffff 20%)' }}>
            <div className="w-full px-8">
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto rounded-[40px] bg-purple-200 p-8 mt-14">
                    <Hero />
                </div>
            </div>

            <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto mt-8">
                <BlogCard />
            </div>
            <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
                <Contact message="See how we can help your business grow with digital marketing" />
            </div>

        </div>
    )
}

export default BlogPage