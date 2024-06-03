

const MeetTheTeam = () => {
    return (
      <div className="flex flex-col md:flex-row justify-start items-start gap-6 mt-28 px-8">
            <div className="w-full md:w-1/2 space-y-6 text-left">
              <h6 className="text-left uppercase text-lg font-semibold font-syne text-black">
                 team
              </h6>
              <h1 className="text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black">
              Meet the Acumens Founder
              </h1>
            </div>
            <div className=" flex flex-col w-auto md:w-[350px] md:h-[350px] h-auto justify-center items-start md:py-14">
                 <img src='./pexels-ono-kosuki-5648103.webp' className=' rounded-[35px]'/>
                 <h1 className='text-xl font-syne pt-3 font-bold text-start '> Patrick Murphy </h1>
            </div>
          </div>
    )
  }
  
  export default MeetTheTeam