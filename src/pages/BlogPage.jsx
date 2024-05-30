import Hero from "../components/blogPageComponents/Hero"
import BlogCard from "../components/blogPageComponents/BlogCard"

const BlogPage = () => {
    return (
        <div>
            <div className="w-full px-8">
                <div className="container mx-auto rounded-[40px] bg-purple-200 p-8 mt-28">
                    <Hero />
                </div>
            </div>

            <div className="container mx-auto mt-8">
                <BlogCard />
            </div>

        </div>
    )
}

export default BlogPage