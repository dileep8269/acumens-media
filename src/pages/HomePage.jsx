
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
import { useContext } from "react"
import { MyContext } from "../context api/MyProvider"
// import { Link } from "react-router-dom"


const HomePage = () => {
  const { setIsModalOpen } = useContext(MyContext);

  const toggleModal = () => {
    setIsModalOpen((prevValue) => !prevValue);
  }
  return (
    <div>

      <div className="w-full bg-blue-Purple">
        <div className="w-[1400px] mx-auto ">
          <Hero />
        </div>
      </div>

      <ImageSlider images={partnerImages} />

      <div className="w-[1400px] mx-auto">
        <AboutUs about={whatWeDo} />
      </div>

      <div className="w-[1400px] mx-auto py-10">
        <DisplayCard />
      </div>

      <div className="w-[1400px] mx-auto">
        <AboutUs about={aboutAcumensic} />
      </div>

      <div className="w-full py-10 bg-gradient-to-b from-light-purple to-gray-100">
        <div className="w-[1400px] mx-auto text-center space-y-8 px-10 mb-20">
          <h6 className="text-base font-bold font-syne text-black"> OUR CLIENTS ARE SOME OF THE WORLD&apos;S... </h6>
          <h1 className="text-4xl lg:text-5xl font-bold font-syne lg:px-[20%] text-black">Fastest growing companies & Brands.</h1>
          <Button className={"mx-auto"}>View All</Button>
          <div className="flex flex-row justify-center items-center flex-wrap gap-10">
            <BrandCard />
          </div>
        </div>
        <div className="w-[1400px] mx-auto space-y-8 px-10">
          <p className="text-base font-bold text-center font-syne text-black"> WHY ACUMENS </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-center font-syne lg:px-[20%] text-black">Managing your business has never been easier.</h1>
          <DetailingCard />
        </div>
      </div>

      <div className="w-full bg-gray-200 py-10">
        <div className="w-[1400px] mx-auto">
          <AcumensReview />
        </div>
        <ImageSlider images={brandImages} />
      </div>


      <div className="w-full min-h-[920px] md:min-h-[930px] lg:min-h-[650px] py-10 bg-light-purple">
        <div className="w-[1400px] mx-auto px-8 ">
          <AiSection />

        </div>
      </div>

      <div className="w-full px-2 py-10 bg-white">
        <div className="w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-8">
            <div className="w-full md:w-[30%] ">

              <div className="w-full px-8 space-y-7 lg:space-y-24 text-left ">
                <h4 className="text-base font-bold font-syne text-black">BLOG</h4>
                <h1 className="text-4xl lg:text-5xl font-bold font-syne text-black">Digital marketing & industry insights</h1>
                <Button className=" md:mx-0">View More</Button>
              </div>

            </div>

            <div className="w-full md:w-[70%]">

              <BlogCard />

            </div>

          </div>

        </div>

      </div>

      <div className="w-full px-8 py-20 bg-blue-Purple text-white rounded-t-[40px]">
        <div className="w-[1400px] mx-auto">

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold font-syne lg:px-[3rem]">Unlock a Complimentary Consultation to Supercharge Your Business</h1>
              <p className="text-base font-light font-kanit tracking-normal leading-6 lg:px-[3rem]">Experience a comprehensive marketing analysis, assessing the effectiveness of your company&apos;s marketing initiatives. Here&apos;s what awaits you:</p>

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
            <div className="w-full md:w-[50%] flex flex-col justify-center md:justify-start items-center">
              <CustomForm fields={inputFields} />

            </div>

          </div>
        </div>

      </div>
      <div className="fixed left-0 bottom-16 w-full sm:hidden pl-4">
        <span className="inline-block w-14 h-14">
            <img src="WhatsApp-Icon.png" alt="WhatsApp-Icon" className="w-full h-full object-fill bg-transparent" />
        </span>

      </div >

      <div className="fixed left-0 bottom-0 w-full text-white text-center flex justify-center items-center gap-x-1 sm:hidden">
        <span className="inline-block w-1/2 px-1 py-4 xs:p-4 text-lg font-normal font-kanit bg-black rounded-[40px]" onClick={toggleModal}>
          Speak To Us
        </span>
        <span className="inline-block w-1/2 px-1 py-4 xs:p-4 text-lg font-normal font-kanit bg-black rounded-[40px]">
          884915291
        </span>
      </div>

    
    </div>
  )
}

export default HomePage