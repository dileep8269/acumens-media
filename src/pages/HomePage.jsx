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
import CustomForm from "../components/CustomForm"

// importing constants from constant folder
import { whatWeDo, aboutAcumensic, partnerImages, brandImages, marketingList, awardedImages, inputFields } from "../constants/constant"

// importing react icons
import { FaCheckCircle } from "react-icons/fa";


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

      <div className="container mx-auto py-10">
        <DisplayCard />
      </div>

      <div className="container mx-auto">
        <AboutUs about={aboutAcumensic} />
      </div>

      <div className="w-full py-10 bg-gray-100">
        <div className="container mx-auto text-center space-y-8 px-10">
          <p className="text-base font-medium"> OUR CLIENTS ARE SOME OF THE WORLD'S... </p>
          <h1 className="text-4xl font-semibold">Fastest growing companies & Brands.</h1>
          <button className="btn btn-secondary text-lg">View All</button>
          <div className="flex flex-row justify-center items-center flex-wrap gap-10">
            <BrandCard />
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="container mx-auto space-y-8 px-10">
          <p className="text-base font-medium text-center"> WHY ACUMENS </p>
          <h1 className="text-4xl font-semibold text-center">Managing your business has never been easier.</h1>
          <DetailingCard />
        </div>
      </div>

      <div className="w-full bg-gray-100 py-10">
        <div className="container mx-auto">
          <AcumensReview />
        </div>
      </div>

      <ImageSlider images={brandImages} />

      <div className="w-full min-h-[880px] md:min-h-[1000px] lg:min-h-[480px] py-10">
        <div className="container mx-auto ">
          <AiSection />

        </div>
      </div>

      <div className="w-full px-8 py-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-[50%] ">

              <div className="w-full px-8 space-y-14 text-center xs:text-left ">
                <h4 className="text-lg font-medium ">BLOG</h4>
                <h1 className="text-5xl md:text-6xl font-medium ">Digital marketing & industry insights</h1>
                <button className="btn btn-secondary uppercase text-md font-medium">View More</button>
              </div>

            </div>

            <div className="w-full md:w-[50%]">

              <BlogCard />

            </div>

          </div>

        </div>

      </div>

      <div className="w-full px-8 py-20">
        <div className="container mx-auto">

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-y-5">
              <h1 className="text-3xl font-bold lg:px-[3rem]">Unlock a Complimentary Consultation to Supercharge Your Business</h1>
              <p className="text-sm font-normal lg:px-[3rem]">Experience a comprehensive marketing analysis, assessing the effectiveness of your company's marketing initiatives. Here's what awaits you:</p>

              <hr className="w-full h-2 "/>

              <ul className="space-y-4">
                {
                  marketingList.map((list, index) => (
                    
                    <li key={index} className="flex gap-x-5 items-start justify-start text-sm"><span className="text-xl mt-0.5"><FaCheckCircle /></span>{list}</li>
                  ))
                }
              
              
              </ul>

              <div className="w-full text-center">
                <h1 className="text-2xl font-semibold">Awarded Marketing Agency</h1>
                <ul className="flex flex-row justify-between items-center mt-10">
                  {
                    awardedImages.map((image,index) => (
                      
                      <li key={index}><img src={image} alt="" className="h-auto w-28 object-cover"/></li>
                    ))
                  }
                </ul>
              </div>

            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
              <CustomForm fields={inputFields} />

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