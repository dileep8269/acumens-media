import BannerL from "../components/LandingPageComponents/BannerL";
import HeroL from "../components/LandingPageComponents/HeroL";
import Review from "../components/LandingPageComponents/Review";
import { landingPageReview } from "../constants/landingPageConstant";

const LandingPage = () => {
  return (
    <div className="py-10">

      <div className="mt-6 p-10">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <HeroL
            borderColor={"border-black"}
            buttonBg={"bg-blue-Purple"}
            listColor={"text-blue-Purple"}
            bgColor={"bg-black"}
          />
          <BannerL color={"text-black"} />
          <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-black"}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-10">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <HeroL
            borderColor={"border-black"}
            buttonBg={"bg-blue-Purple"}
            listColor={"text-blue-Purple"}
            bgColor={"bg-black"}
          />
          <BannerL color={"text-black"} />
          <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-black"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black p-10 text-white ">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <HeroL
            borderColor={"border-white"}
            buttonBg={"bg-blue-Purple"}
            listColor={"text-blue-Purple"}
            bgColor={"bg-white"}

          />

          <BannerL color={"text-white"} />

          <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-white"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-Purple p-10 text-white ">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <HeroL
            borderColor={"border-white"}
            buttonBg={"bg-dark"}
            listColor={"text-black"}
            bgColor={"bg-white"}
          />

          <BannerL color={"text-white"} />

          <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-white"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
