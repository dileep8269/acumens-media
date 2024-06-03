import { MdPeople } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { FaSearchengin } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";

const aiSolDetail = [
    { icon: <TbBulbFilled />, title: "Transparency", desc: "Struggling to find Social Media Marketing experts who really understand your business & can actually drive long term results? Our AI-Technology combined with the", link:"#" },
    { icon: <MdPeople />, title: "Integrity", desc: "Imagine a world where your SEO & SEM strategies are not just data-driven but intelligence-driven. Join the era of AI-Powered SEO & SEM, where our experienced Marketing team injects", link:"#" },
    { icon: <FaSearchengin />, title: "Simplicity", desc: "Expand your business visibility like never before with our AI-Fueled Google Service which covers Google's vast landscape like google Map, Google Business & AI-Created YouTube videos.", link:"#" },
    { icon: <BsRocketTakeoffFill />, title: "AI-Powered Email Marketing", desc: "When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.", link:"#" },
   
]


const AboutDetailsCard = () => {
    return (
        <div className="container mx-auto">
        <div className="flex flex-row flex-wrap gap-6 px-6 justify-center mb-10 items-start">

        {
            aiSolDetail?.map((service, index) => (

                <div key={index} className='flex flex-col w-[300px] h-80 justify-items-start border border-transparent bg-white hover:shadow-xl p-5 space-y-4 rounded-2xl'>
                    <span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-purple-900">{service?.icon}</span>
                    <h6 className="font-bold text-base font-syne text-black">{service?.title}</h6>
                    <p className="text-base font-light font-kanit leading-6 tracking-normal">{service?.desc}</p>
                </div>
            ))
        }


    </div>

        </div>
    )
}

export default AboutDetailsCard