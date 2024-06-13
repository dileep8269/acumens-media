import { Link, Outlet } from "react-router-dom"
import Header from "../components/homePageComponents/Header"
import Footer from "../components/homePageComponents/Footer"
import HomePageModal from "../components/homePageComponents/HomePageModal"

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

      <HomePageModal />
    </>
  )
}

export default Mainlayout;