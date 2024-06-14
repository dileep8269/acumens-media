import { Link, Outlet } from "react-router-dom"
import Header from "../components/homePageComponents/Header"
import Footer from "../components/homePageComponents/Footer"
// import HomePageModal from "../components/homePageComponents/HomePageModal"

const Mainlayout = () => {


  return (
    <>
      <Header />

      <Outlet></Outlet>

      <div className="w-full bg-gray-100 mb-[46px] sm:mb-0">
        <div className="">
          <Footer />
        </div>
        <div className="footer footer-center p-4 text-base-content border-t-2 border-black">
          <aside>
            <div className="space-x-3 font-kanit font-light leading-6 tracking-normal text-base pb-2 sm:pb-0">

              <div className="relative inline-block rounded-full transition duration-300 ease-in-out ml-2">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  Copyright © 2016 - 2024 Acumens Media Inc.
                </span>
              </div>


              <div className="relative inline-block rounded-full transition duration-300 ease-in-out ml-2">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  <Link to='/terms-condition.htm'>Terms & Conditions</Link>
                </span>
              </div>

              <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  <Link to='/privacy-policy.htm'>Privacy Policy</Link>
                </span>
              </div>

            </div>
          </aside>
        </div>
      </div>
      <div className="fixed left-0 bottom-16 w-full sm:hidden pl-4 z-50">
        <span className="inline-block w-14 h-14">
        <Link to="https://api.whatsapp.com/send?phone=18163210322&text=Hello,%20Welcome%20to%20Acumens%20Media%20Inc.">
            <img src="WhatsApp-Icon.png" alt="WhatsApp-Icon" className="w-full h-full object-fill bg-transparent" />
        </Link>
        </span>

      </div >

      <div className="fixed left-0 bottom-0 w-full text-white text-center flex justify-center items-center gap-x-1 sm:hidden">
        <span className="inline-block w-1/2 px-1 py-4 xs:p-4 text-lg font-normal font-kanit bg-black rounded-[40px]" >
         <Link to='/contact.htm#contactForm' >Speak To Us</Link>
        </span>
        <span className="inline-block w-1/2 px-1 py-4 xs:p-4 text-lg font-normal font-kanit bg-black rounded-[40px]">
          <Link to={"tel:8884915291"} >
            8009694409
          </Link>
        </span>
      </div>

      {/* <HomePageModal /> */}
    </>
  )
}

export default Mainlayout;