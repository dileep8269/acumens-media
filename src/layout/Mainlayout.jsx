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
    </>
  )
}

export default Mainlayout
