import BannerL from "../components/LandingPageComponents/BannerL"
import HeroL from "../components/LandingPageComponents/HeroL"
import Review from "../components/LandingPageComponents/Review"
import { landingPageReview } from "../constants/landingPageConstant"

const LandingPage = () => {
  return (
    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto py-10 space-y-6">

      <div className="mt-16">
      <HeroL borderColor={"border-black"} buttonBg={"bg-blue-Purple"} listColor={"text-blue-Purple"} />
      <BannerL color={"text-black"} />
      <div className="flex justify-between items-center gap-6 flex-wrap py-10">
        {
          landingPageReview.map((review, index) => (

            <Review key={index} review={review} borderColor={"border-black"} />

          ))
        }
      </div>

      </div>

      <div className="bg-gray-100 p-10 rounded-[40px]">
        <HeroL borderColor={"border-black"} buttonBg={"bg-blue-Purple"} listColor={"text-blue-Purple"}/>
        <BannerL color={"text-black"} />
        <div className="flex justify-between items-center gap-6 flex-wrap py-10">
          {
            landingPageReview.map((review, index) => (

              <Review key={index} review={review} borderColor={"border-black"} />

            ))
          }
        </div>
      </div>

      <div className="bg-black p-10 rounded-[40px] text-white ">
        <HeroL borderColor={"border-white"} buttonBg={"bg-blue-Purple"} listColor={"text-blue-Purple"} />

        <BannerL color={"text-white"} />


        <div className="flex justify-between items-center gap-6 flex-wrap py-10">
          {
            landingPageReview.map((review, index) => (

              <Review key={index} review={review} borderColor={"border-white"} />

            ))
          }
        </div>
      </div>

      <div className="bg-blue-Purple p-10 rounded-[40px] text-white ">
        <HeroL borderColor={"border-white"} buttonBg={"bg-dark"} listColor={"text-black"} />

        <BannerL color={"text-white"} />


        <div className="flex justify-between items-center gap-6 flex-wrap py-10">
          {
            landingPageReview.map((review, index) => (

              <Review key={index} review={review} borderColor={"border-white"}/>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LandingPage
