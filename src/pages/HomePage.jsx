import Header from "../components/Header"
import Hero from "../components/Hero"
import ImageSlider from "../components/ImageSlider"
import AboutUs from "../components/AboutUs"
import BrandCard from "../components/BrandCard"
import DetailingCard from "../components/DetailingCard"
import BlogCard from "../components/BlogCard"
import Footer from "../components/Footer"
import AiSection from "../components/AiSection"
import AcumensReview from "../components/AcumensReview"
import DisplayCard from "../components/DisplayCard"

// importing constants from constant folder
import { whatWeDo, aboutAcumensic, partnerImages, brandImages } from "../constants/constant"


const items = ["item1", "item2", "item3", "item4"];

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="w-full bg-gray-100">
        <div className="container mx-auto bg-gray-100">
          <Hero />
        </div>
      </div>

      <ImageSlider images={partnerImages} />

      <div className="container mx-auto">
        <AboutUs about={whatWeDo} />
      </div>

      <div className="container mx-auto py-20">
        <DisplayCard />
      </div>

      <div className="container mx-auto">
        <AboutUs about={aboutAcumensic}/>
      </div>

      <div className="w-full py-20 bg-gray-100">
        <div className="container mx-auto text-center space-y-8 px-10">
          <p className="text-base font-medium"> OUR CLIENTS ARE SOME OF THE WORLD'S... </p>
          <h1 className="text-4xl font-semibold">Fastest growing companies & Brands.</h1>
          <button className="btn btn-secondary text-lg">View All</button>
          <div className="flex flex-row justify-center items-center flex-wrap gap-10">
            <BrandCard />
          </div>
        </div>
      </div>

      <div className="w-full py-20">
        <div className="container mx-auto space-y-8 px-10">
          <p className="text-base font-medium text-center"> WHY ACUMENS </p>
          <h1 className="text-4xl font-semibold text-center">Managing your business has never been easier.</h1>
          <DetailingCard />
        </div>
      </div>

      <div className="w-full bg-gray-100 py-20">
        <div className="container mx-auto">
          <AcumensReview />
        </div>
      </div>

      <ImageSlider images={brandImages}/>

      <div className="w-full min-h-[880px] md:min-h-[1000px] lg:min-h-[480px] py-20">
        <div className="container mx-auto ">
          <AiSection />

        </div>
      </div>

      <div className="w-full px-8 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-[50%] ">

              <div className="w-full px-8 space-y-14 text-center xs:text-left ">
                <h4 className="text-lg font-medium ">BLOG</h4>
                <h1 className="text-5xl md:text-6xl font-medium ">Digital marketing & industry insights</h1>
                <button className="btn btn-secondary uppercase text-md font-medium">View More</button>
              </div>

            </div>

            {/* Carousel Container */}

            <div className="w-full md:w-[50%]">

              <BlogCard />

            </div>

          </div>

        </div>

      </div>

      <div className="w-full bg-gray-100">
        <div className="container mx-auto">
          <Footer />
        </div>
        <div className="footer footer-center p-4 text-base-content border-t-2 border-black">
          <aside>
            <p>Copyright © 2024 - All right reserved by <span>Salegully Retail Private Ltd</span></p>
          </aside>
        </div>
      </div>

    </div>
  )
}

export default HomePage