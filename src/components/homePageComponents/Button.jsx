const Button = ({children, className=""}) => {
  return (
    <div className={`w-fit px-5 py-2 bg-black text-white transition-colors duration-700 hover:bg-blue-Purple rounded-full cursor-pointer text-[12px] font-bold font-syne uppercase shrink-0 ${className} `}>
        {children}
    </div>
  )
}

export default Button