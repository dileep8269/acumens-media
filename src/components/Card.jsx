import { FaCheckCircle } from "react-icons/fa";
import { BiSolidUpArrowAlt } from "react-icons/bi";

const Card = () => {
  return (
    <div className='w-auto xl:w-[600px] p-4 rounded-2xl'>
      <h2 className="text-center text-xl font-semibold">AI-Smart Social Media Marketing.</h2>
      <div className='flex flex-col md:flex-row justify-center items-center pt-3'>

        <div className='p-4 w-full md:w-[60%]'>
          <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum itaque mollitia sequi sapiente, modi, perferendis blanditiis debitis a culpa, harum sed voluptatibus distinctio! Enim aspernatur harum blanditiis laborum voluptates!</p>
          <div className='my-5'>
            <ul className="font-normal">
              <li className="flex items-start"><span className="flex justify-center items-center mr-3 mt-1.5"><FaCheckCircle /></span>Lorem ipsum dolor sit amet consectetur</li>
              <li className="flex items-start"><span className="flex justify-center items-center mr-3 mt-1.5"><FaCheckCircle /></span> sdjkhsjhdsjkd</li>
              <li className="flex items-start"><span className="flex justify-center items-center mr-3 mt-1.5"><FaCheckCircle /></span> sdjkhsjhdsjkd</li>
              <li className="flex items-start"><span className="flex justify-center items-center mr-3 mt-1.5"><FaCheckCircle /></span> sdjkhsjhdsjkd</li>
              <li className="flex items-start"><span className="flex justify-center items-center mr-3 mt-1.5"><FaCheckCircle /></span> sdjkhsjhdsjkd</li>
            </ul>
          </div>
          <a href="" className="underline underline-offset-8 decoration-2 decoration-purple-700 font-medium uppercase text-sm">Get Details</a>
        </div>
        <div className="px-9 py-4 w-full bg-purple-500 flex flex-col items-center justify-center rounded-3xl md:w-[40%]">
          <div className="w-32 h-32 rounded-full border border-slate-400 flex justify-center items-center">
            <div className="w-24 h-24 rounded-full border border-blue-700 flex flex-col justify-center items-center">
              <span className="text-2xl">94%</span>
              <span className="text-2xl"><BiSolidUpArrowAlt /></span>
            </div>
          </div>
          <p className="mt-3 text-center text-md py-4 font-light">
            Of customers reported an increase in conversion rates through the social media marketing strategies
          </p>
        </div>


      </div>

    </div>
  )
}

export default Card;