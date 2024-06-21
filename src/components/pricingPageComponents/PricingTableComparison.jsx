import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const PricingTableComparison = () => {
    const data = [
        {
            feature: "22 AI-Generated Posts per day / Social media account (incl. Video posts)",
            planA: <FaCheck />,
            planB: <FaCheck />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
        {
            feature: "5 Social Media Accounts",
            planA: <FaCheck />,
            planB: <FaCheck />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-white",
            textColor: "text-black"
        },
        {
            feature: "1 Free Professional Social Media Accounts / Page creation (included)",
            planA: <FaCheck />,
            planB: <FaCheck />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
        {
            feature: "10 AI-Created YouTube videos / Month (upto 1 min Duration)",
            planA: <FaCheck />,
            planB: <FaCheck />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-white",
            textColor: "text-black"
        },
        {
            feature: "Scheduled Posts (fully managed by our experts)",
            planA: <FaCheck />,
            planB: <FaCheck />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
        {
            feature: "upto 33 Video posts / Month",
            planA: <FaCheck />,
            planB: <FaCheck />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-white",
            textColor: "text-black"
        },
        {
            feature: "Web Designing / Development (Upto 15 Pages) Basic",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
        {
            feature: "3 Months of AI-Enhanced Core SEO (Search Engine Optimization)",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-white",
            textColor: "text-black"
        },
        {
            feature: "1 year of Web Hosting Included*",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
        {
            feature: "6 Months Social Media Ads campaign management & optimization (example facebook ads, Instagram Ads) 6 Months Search Engine Ads campaign management & optimization (example google ads, Microsoft / Bing Ads)",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <FaCheck />,
            planD: <FaCheck />,
            bgColor: "bg-white",
            textColor: "text-black"
        },
        {
            feature: "Social Media Ads campaign budget or spends*",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <ImCross />,
            planD: <ImCross />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
        {
            feature: "Search Engine Ads campaign budget or spends*",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <ImCross />,
            planD: <ImCross />,
            bgColor: "bg-white",
            textColor: "text-black"
        },
        {
            feature: "SSL (Secure Socket Layer) Certificate*",
            planA: <ImCross />,
            planB: <ImCross />,
            planC: <ImCross />,
            planD: <ImCross />,
            bgColor: "bg-blue-Purple",
            textColor: "text-white"
        },
    ];
    return (
        <div className="container mx-auto p-4 mt-20">
            <h2 className="text-2xl font-bold mb-4">Price Comparison</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="h-28">
                            <th className="py-2 px-4 rounded-s-xl font-syne font-semibold uppercase text-base border-r bg-black text-white lg:w-[40%]">Card</th>
                            <th className="py-2 px-4 font-semibold font-syne uppercase text-center border-r text-base bg-black text-white lg:w-[15%]"><span className="bg-blue-Purple mb-2 p-[5px] rounded-xl w-12 text-sm">Low Price</span><br />Basic</th>
                            <th className="py-2 px-4 font-semibold font-syne uppercase text-base border-r bg-black text-white lg:w-[15%]">Growth</th>
                            <th className="py-2 px-4 font-semibold font-syne uppercase text-base border-r bg-black text-white lg:w-[15%]">Dynamic Plus</th>
                            <th className="py-2 px-4 rounded-e-xl font-syne font-semibold uppercase text-base bg-black text-white lg:w-[15%]"><span className="bg-blue-Purple p-[5px] rounded-xl w-12 text-sm">Best Value</span><br />Ultimate Pro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-2 text-left font-syne border-r text-lg text-black">Pricing</td>
                            <td className="p-4 font-kanit text-lg border-r text-left text-black">
                                Annually:$57.99/month
                                6Month:$69.99/month
                                Monthly:$99.99/month
                            </td>
                            <td className="p-2 font-kanit text-lg border-r text-left text-black">
                                Annually: $115.99/month
                                6Month: $139.99/month
                                Monthly: $199.99/month
                            </td>
                            <td className="p-2 font-kanit text-lg border-r text-left text-black">
                                Annually: $173.99/month
                                6Month: $299.99/month
                                Monthly: $209.99/month
                            </td>
                            <td className="p-2 font-kanit text-lg border-r text-left text-black">
                                Annually: $173.99/month
                                6Month: $299.99/month
                                Monthly: $209.99/month
                            </td>
                        </tr>
                        {data.map((item, index) => (
                            <tr key={index} className={`border-0 font-syne h-24 text-lg ${item.bgColor} ${item.textColor}`}>
                                <td className="py-2 border-r px-4 font-kanit rounded-s-xl text-start">{item.feature}</td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.planA}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.planB}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.planC}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-syne text-center rounded-e-xl">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.planD}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PricingTableComparison