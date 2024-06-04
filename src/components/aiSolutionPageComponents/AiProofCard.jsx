import { GoGraph } from "react-icons/go";

const AiProofCard = ({ proofs }) => {
  return (
    <div className="flex justify-center items-start gap-6 3xl:gap-44 flex-wrap">
      {proofs?.map((card, index) => (
        <div key={index} className='space-y-6 border border-slate-200 rounded-[40px] w-[300px] min-h-[250px] px-4 py-8'>
          <div className="flex justify-between items-center">
            <div className="w-[80%]">
              <h1 className='text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[63%] text-black'>{card.percentage}</h1>
            </div>
            <div className="w-[20%]">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex justify-center items-center">
                <span className="text-xl text-blue-Purple font-bold"><GoGraph /></span>
              </div>
            </div>
          </div>
          <div className="text-left">
            <p className="text-base font-light font-kanit leading-6 tracking-normal">{card.context}</p>
          </div>

        </div>

      ))}

    </div>

  )
}

export default AiProofCard