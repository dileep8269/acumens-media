import BannerL from "../components/LandingPageComponents/BannerL"
import HeroL from "../components/LandingPageComponents/HeroL"

const LandingPage = () => {
  return (
    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
    <HeroL />
    <BannerL />
    </div>
  )
}

export default LandingPage
