import Hero from "../components/homePageComponents/Hero"
import ImageSlider from "../components/homePageComponents/ImageSlider"
import AboutUs from "../components/homePageComponents/AboutUs"
import BrandCard from "../components/homePageComponents/BrandCard"
import DetailingCard from "../components/homePageComponents/DetailingCard"
import BlogCard from "../components/homePageComponents/BlogCard"

import AiSection from "../components/homePageComponents/AiSection"
import AcumensReview from "../components/homePageComponents/AcumensReview"
import DisplayCard from "../components/homePageComponents/DisplayCard"
import CustomForm from "../components/homePageComponents/CustomForm"
import Button from "../components/homePageComponents/Button"

// importing constants from constant folder
import { whatWeDo, aboutAcumensic, partnerImages, brandImages, marketingList, awardedImages, inputFields } from "../constants/constant"

// importing react icons
import { FaCheckCircle } from "react-icons/fa";

const HomePage = () => {

  return (
    <div>
      <div className="bg-[#f7f7fa]">
        <div className="w-full bg-blue-Purple rounded-b-[40px]">
          <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto ">
            <Hero />
          </div>
        </div>
      </div>

      <div className="bg-[#f7f7fa] rounded-b-[40px]">
        <div className="flex justify-center items-center lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <div className="w-[15%] p-2 font-syne font-bold text-lg tracking-tight uppercase leading-6 text-black">
            A PARTNER, NOT <br /> A VENDOR
          </div>
          <div className="w-[85%]">
            <ImageSlider images={partnerImages} />
          </div>
        </div>
      </div>

      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto px-8 pt-10 lg:px-0">
        <AboutUs about={whatWeDo} />
      </div>

      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto py-10  ">
        <DisplayCard />
      </div>

      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto px-8 lg:px-0">
        <AboutUs about={aboutAcumensic} />
      </div>

      <div className="w-full py-10 bg-gradient-to-b from-light-purple to-[#fff] rounded-t-[40px] space-y-20">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto text-center space-y-10 px-8 lg:px-0">
          <h6 className="text-base font-bold font-syne text-black"> OUR CLIENTS ARE SOME OF THE WORLD&apos;S... </h6>
          <h1 className="text-4xl lg:text-5xl font-bold font-syne text-black">Fastest growing companies & Brands.</h1>
          <Button className={"mx-auto"}>View All</Button>
          <div className="grid grid-col-1 lg:grid-cols-3 place-content-center gap-10">
            <BrandCard />
          </div>
        </div>
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-10 px-8 lg:px-0">
          <p className="text-base font-bold text-center font-syne text-black"> WHY ACUMENS </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-center font-syne text-black">Managing your business has never been easier.</h1>
          <DetailingCard />
        </div>
      </div>

      {/* Adding Background Color for Acumens Review Section and wrapping the Ai section and blog section inside it */}

      <div className="bg-gray-200 rounded-t-[40px]">

        {/* Review Section */}

        <div className="w-full bg-gray-200 py-10 rounded-t-[40px]">
          <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
            <AcumensReview />
            <div className="flex flex-col justify-between items-center gap-16 lg:flex-row py-8 px-8 lg:px-0">
              {
                brandImages.map((image, index) => (

                  <div key={index}>

                    <img src={image} alt={image} />

                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* Adding Background Color for Aisection and wrapping the blog section inside it */}

        <div className="bg-light-purple rounded-t-[40px]">

          {/* Ai Section  */}

          <div className="w-full min-h-[920px] md:min-h-[930px] lg:min-h-[650px] py-10 bg-light-purple rounded-t-[40px]">
            <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto px-8 lg:px-0 ">
              <AiSection />

            </div>
          </div>

          {/* Blog Section */}

          <div className="w-full py-10 bg-white rounded-t-[40px]">
            <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto px-8 lg:px-0">
              <div className="flex flex-col md:flex-row justify-center items-center gap-x-8">
                <div className="w-full md:w-[30%] ">

                  <div className="w-full space-y-7 lg:space-y-24 text-left ">
                    <h4 className="text-base font-bold font-syne text-black">BLOG</h4>
                    <h1 className="text-4xl lg:text-5xl font-bold font-syne text-black">Digital marketing & industry insights</h1>
                    <Button className=" md:mx-0">View More</Button>
                  </div>

                </div>

                <div className="w-full h-[580px] 3xl:h-[620px] md:w-[70%] py-10 lg:py-0">

                  <BlogCard />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="w-full px-8 lg:px-0 py-20 bg-blue-Purple text-white rounded-t-[40px]">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold font-syne">Unlock a Complimentary Consultation to Supercharge Your Business</h1>
              <p className="text-base font-light font-kanit tracking-normal leading-6">Experience a comprehensive marketing analysis, assessing the effectiveness of your company&apos;s marketing initiatives. Here&apos;s what awaits you:</p>

              <hr className="w-full h-2 " />

              <ul className="space-y-4">
                {
                  marketingList.map((list, index) => (

                    <li key={index} className="flex gap-x-5 items-start justify-start text-base font-light font-kanit tracking-normal leading-6"><span className="text-xl mt-1"><FaCheckCircle /></span>{list}</li>
                  ))
                }


              </ul>

              <div className="w-full text-center">
                <h1 className="text-3xl font-bold font-syne text-black">Awarded Marketing Agency</h1>
                <ul className="flex flex-row justify-between items-center mt-10">
                  {
                    awardedImages.map((image, index) => (

                      <li key={index}><img src={image} alt="" className="h-auto w-28 object-cover" /></li>
                    ))
                  }
                </ul>
              </div>

            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-center md:justify-start items-center md:items-end">
              <CustomForm fields={inputFields} message="Get you free audit" />

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default HomePage