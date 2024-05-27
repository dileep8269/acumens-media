import { Outlet } from "react-router-dom"
import Header from "../components/homePageComponents/Header"
import Footer from "../components/homePageComponents/Footer"

const Mainlayout = () => {
  return (
    <>
    <Header />
    <Outlet></Outlet>
    <div className="w-full bg-gray-100 mb-[46px] sm:mb-0">
        <div className="container mx-auto">
          <Footer />
        </div>
        <div className="footer footer-center p-4 text-base-content border-t-2 border-black">
          <aside>
            <p className="space-x-3 font-kanit font-light leading-6 tracking-normal text-base pb-2 sm:pb-0">Copyright © 2016 - 2024 <span>Acumens Media Inc.</span> <span>Terms & Conditions</span> <span>Privacy Policy</span></p>
          </aside>
        </div>
      </div>
      {/*Contact popup section is added:*/}  
      <div className="fixed left-0 bottom-0 w-full text-white text-center flex justify-center items-center gap-x-1 sm:hidden">
        <span className="inline-block w-1/2 px-1 py-4 xs:p-4  bg-blue-Purple text-lg font-normal font-kanit">
          Speak To Us
        </span>
        {/* <span className="inline-block w-1/2 px-1 py-4 xs:p-4  bg-blue-Purple text-lg font-normal font-kanit">
          884915291
        </span> */}
        <span className="flex flex-col gap-y-2 w-1/2 px-1 py-4 xs:p-4  bg-blue-Purple font-normal font-kanit text-sm">
          <span>884915291</span>
          <span>884915291</span>
        </span>
      </div>
    </>
  )
}

export default Mainlayout
