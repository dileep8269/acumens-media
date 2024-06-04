import {
  MdGroups,
  MdMail,
  MdOutlineContentPaste,
  MdPeople,
  MdAddShoppingCart,
} from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { FaGoogle, FaCode, FaMobileAlt, FaSearchengin } from "react-icons/fa";

const aiSolDetail = [
  {
    icon: <MdGroups />,
    title: "AI-Infused Social Media Automation",
    desc: "Struggling to find Social Media Marketing experts who really understand your business & can actually drive long term results? Our AI-Technology combined with the",
    link: "#",
  },
  {
    icon: <FaSearchengin />,
    title: "Search Engine Services (SEO/SEM)",
    desc: "Imagine a world where your SEO & SEM strategies are not just data-driven but intelligence-driven. Join the era of AI-Powered SEO & SEM, where our experienced Marketing team injects",
    link: "#",
  },
  {
    icon: <FaGoogle />,
    title: "AI-Fueled Google Business Services",
    desc: "Expand your business visibility like never before with our AI-Fueled Google Service which covers Google's vast landscape like google Map, Google Business & AI-Created YouTube videos.",
    link: "#",
  },
  {
    icon: <MdMail />,
    title: "AI-Powered Email Marketing",
    desc: "When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.",
    link: "#",
  },
  {
    icon: <MdAddShoppingCart />,
    title: "AI-Driven E-Commerce Solutions",
    desc: "Offering online platforms for seamless transactions, expanding market reach, and enhancing customer experiences.",
    link: "#",
  },
  {
    icon: <FaCode />,
    title: "AI-Integrated Web Design & Hosting",
    desc: "Elevate your brand with a visually stunning website, supported by reliable hosting for a seamless digital experience.",
    link: "#",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Unlock innovation, engage users, and elevate your brand with customized, intuitive, and scalable mobile applications.",
    link: "#",
  },
  {
    icon: <RiRobot3Line />,
    title: "ERP / CRM / IT / ChatBots",
    desc: "Grow your brand with the help of our various web services infused with AI integration.",
    link: "#",
  },
  {
    icon: <MdOutlineContentPaste />,
    title: "Content Writing",
    desc: "Enhancing brand communication and audience engagement. Elevate your digital presence with tailored content, optimized for impact and resonance in the online realm.",
    link: "#",
  },
  {
    icon: <MdPeople />,
    title: "CCaaS / Outsourcing & Consulting",
    desc: "From cloud-based communication solutions to strategic consulting, unlock efficiency and innovation for sustained growth and success in the modern marketplace.",
    link: "#",
  },
];

const DetailsCard = () => {
  return (
    <div className="flex flex-row flex-wrap 3xl:gap-x-28 3xl:gap-y-10 2xl:gap-x-20 2xl:gap-y-8 xl:gap-x-16 xl:gap-y-12 lg:gap-x-9 lg:gap-y-7 gap-x-7 gap-y-5 justify-center mb-10 items-start">
      {aiSolDetail?.map((service, index) => (
        <div
          key={index}
          className="flex flex-col w-[220px] h-96 justify-items-start border border-transparent bg-white hover:shadow-xl p-5 space-y-4 rounded-2xl"
        >
          <span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-purple-900">
            {service?.icon}
          </span>
          <h6 className="font-bold text-base font-syne text-black">
            {service?.title}
          </h6>
          <p className="text-base font-light font-kanit leading-6 tracking-normal">
            {service?.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailsCard;
