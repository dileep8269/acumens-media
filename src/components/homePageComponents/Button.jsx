import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({children, className=""}) => {
  return (
    <div className={`w-fit px-5 py-2 bg-black text-white transition-colors duration-700 hover:bg-blue-Purple rounded-full cursor-pointer text-[12px] font-bold font-syne uppercase shrink-0 ${className} flex justify-center items-center gap-1 `}>
        {children}
        <span className="text-2xl">
          <IoIosArrowRoundForward />
        </span>
    </div>
  )
}

export default Button