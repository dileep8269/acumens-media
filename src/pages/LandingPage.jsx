import BannerL from "../components/LandingPageComponents/BannerL"
import HeroL from "../components/LandingPageComponents/HeroL"
import Review from "../components/LandingPageComponents/Review"
import { landingPageReview } from "../constants/landingPageConstant"

const LandingPage = () => {
  return (
    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto pt-10">
      <HeroL />
      <BannerL />
      <div className="flex justify-between items-center gap-6 flex-wrap ">
        {
          landingPageReview.map((review, index) => (

            <Review key={index} review={review} />

          ))
        }
      </div>
      <HeroL index={2} />
      <BannerL />
      <div className="flex justify-between items-center gap-6 flex-wrap ">
        {
          landingPageReview.map((review, index) => (

            <Review key={index} review={review} />

          ))
        }
      </div>
    </div>
  )
}

export default LandingPage
