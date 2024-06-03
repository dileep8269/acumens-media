import { TiArrowUpThick } from "react-icons/ti";
import Button from "../homePageComponents/Button";

const ResultsCard = () => {
  return (
    <div className="box-border h-auto w-auto p-14 bg-light-gray rounded-2xl">
      <h1 className=" font-syne text-3xl font-bold mb-8">
        Driving Real Results:
      </h1>
      <div className="flex flex-wrap flex-row justify-center items-center gap-16">
        <div className="border border-gray-300 w-44 h-44 rounded-full">
          <div className="border border-blue-Purple w-32 h-32 m-6 ml-[23px] rounded-full">
            <h1 className=" text-3xl font-syne font-bold m-6 mt-10">
              500+ <br />
              <TiArrowUpThick className="ml-6" />
            </h1>
          </div>
          <h1 className=" text-center font-syne text-base mt-10 text-black font-bold">
            International Clients
          </h1>
        </div>
        <div className="border border-gray-300 w-44 h-44 rounded-full">
          <div className="border border-blue-Purple w-32 h-32 m-6 ml-[23px] rounded-full">
            <h1 className=" text-3xl font-syne font-bold m-6 mt-10">
              100% <br />
              <TiArrowUpThick className="ml-6" />
            </h1>
          </div>
          <h1 className=" text-center font-syne text-base text-black mt-10 font-bold">
            Guaranteed Growth
          </h1>
        </div>
        <div className="border border-gray-300 w-44 h-44 rounded-full">
          <div className="border border-blue-Purple w-32 h-32 m-6 ml-[23px] rounded-full">
            <h1 className=" text-3xl font-syne font-bold m-6 mt-10">
              15m <br />
              <TiArrowUpThick className="ml-6" />
            </h1>
          </div>
          <h1 className=" text-center font-syne text-base text-black mt-10 font-bold">
            Managed budgets
          </h1>
        </div>
        <div className=" flex flex-col border bg-lightest-purple w-96 h-48 rounded-2xl">
          <h1 className=" text-3xl font-syne text-center font-bold mt-10">
            282,000+
          </h1>
          <p className=" text-sm font-syne text-center font-bold">
            Leads generated so far… <br />
          </p>
          <Button className=" self-center mt-4">Contact Us:</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;