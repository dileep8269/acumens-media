import { SMPriceComparison } from "../../constants/pricingPageConstant";
import ReactHtmlParser from 'react-html-parser';

const SSLTableComparison = () => {
    return (
        <div>
            <h2 className="text-4xl lg:text-5xl font-syne text-center font-bold mb-10">Compare plan features</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="h-28">
                            <th className="py-2 px-4 rounded-s-xl font-kanit font-normal uppercase text-base border-r bg-black text-white w-[30%] lg:w-[30%]">
                                Package Plans
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal uppercase text-center border-r text-base bg-black text-white ">
                                <span className="">Basic</span>
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal uppercase text-base border-r bg-black text-white ">                           
                                <span className="">Growth</span>
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal uppercase text-base border-r bg-black text-white ">                           
                                <span className="">Dynamic Plus</span>
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal  uppercase text-base border-r bg-black text-white ">                          
                                <span className="">Ultimate Pro</span>
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal  uppercase text-base border-r bg-black text-white ">                       
                                <span className="">Ultimate Pro</span>
                            </th>
                            <th className="py-2 px-4 rounded-e-xl font-kanit font-normal  uppercase text-base bg-black text-white ">                         
                                <span className="">Ultimate Pro</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-2 text-left font-kanit border-r text-lg text-black">Pricing</td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $24.99/year
                                6Month: $34.99 /month
                                Monthly: $44.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $3.49/year
                                6Month: $3.99/month
                                Monthly: $4.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base text-left text-black">
                                Annually: $20.99/year
                                6Month: $22.99/month
                                Monthly: $24.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $0.006/year
                                6Month: $0.0075/month
                                Monthly: $0.01/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $899.99/year
                                6Month: $42.49/month
                                Monthly: $49.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $899.99/year
                                6Month: $899.99/month
                                Monthly: $89.99/month
                            </td>
                            
                        </tr>
                        {SMPriceComparison.map((item, index) => (
                            <tr key={index} className={`border-0 font-syne h-24 text-lg ${item.bgColor} ${item.textColor}`}>
                                <td className="py-2 border-r px-4 font-kanit rounded-s-xl text-start">{ReactHtmlParser(item.feature)}</td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.basic}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.growth}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.dynamicPlus}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center ">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.ultimatePro}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center ">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.ultimatePro}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-syne text-center rounded-e-xl">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.ultimatePro}
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

export default SSLTableComparison