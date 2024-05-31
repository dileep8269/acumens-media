import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context api/MyProvider";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import acumensLogo from "../../assets/acumens-logoo_new2.webp";
import acumensStyleLogo from "../../assets/acumenslogo2.webp";
import DropdownButton from "./DropdownButton";
import Button from "./Button";

// importing dropdown list from constant folder
import {
  AiSolutionsDropdown,
  WhoWeAreDropdown,
  FollowUs,
  AiSolutionsDropdownMobile
} from "../../constants/constant";

const Header = () => {
  const { menuOpen, setMenuOpen } = useContext(MyContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const buttonTabs = ["Login", "Sign Up", "Lets Talk"];

  return (
    <>
      <header className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg p-4 text-black  w-full  ">
        {/* Desktop View */}
        <div className="hidden xl:flex flex-1 justify-between items-center gap-x-6 container mx-auto">
          {/* Logo */}
          <Link to='/'>
          <div className="flex items-center shrink-0">
            <img
              src={acumensStyleLogo}
              alt="Acumens Logo"
              className="w-8 h-8 xl:h-10 xl:w-10 mr-2"
            />
            <img src={acumensLogo} alt="Acumens Logo" className="h-8 xl:h-10" />
          </div>
          </Link>
          {/* Dropdown Menu */}
          <div>
            <ul className="flex flex-row gap-x-2 items-center">
              <Link to="/" className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
                <span className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                  Home
                </span>
              </Link>
              <li className="cursor-pointer">
                <DropdownButton dropdown={AiSolutionsDropdown} classname="w-72">
                  <Link to='/Ai-Solutions.htm'>Ai Solutions</Link>
                </DropdownButton>
              </li>
          <li className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
          <Link to="/pricing.htm" >
                <span className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                  Pricing
                </span>
              </Link>
          </li>
              <li className="cursor-pointer">
                <DropdownButton dropdown={WhoWeAreDropdown} classname="w-36">
                  Who We Are
                </DropdownButton>
              </li>
              <li className="cursor-pointer">
                <DropdownButton dropdown={FollowUs} classname="w-72">
                  Follow Us
                </DropdownButton>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-center items-center gap-4">

            <Link to={'/contact.htm'} className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
              <p className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                Support
              </p>
              <p className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                8884915291
              </p>
            </Link>

            <Link to={'/contact.htm'} className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
              <p className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                Sales
              </p>
              <p className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                8009694409
              </p>
            </Link>

            <Button>
              <Link to="#">Lets Talk</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile view */}
      <header className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg p-4 flex justify-between items-center xl:hidden -mt-8 fixed top-8 left-0 w-full z-50">
        {/* Logo */}
      <Link to="/">
      <div className="flex items-center" onClick={toggleMenu}>
          <img
            src={acumensStyleLogo}
            alt="Acumens Logo"
            className="h-10 w-10 mr-2"
          />
          <img src={acumensLogo} alt="Acumens Logo" className="h-10" />
        </div>
      </Link>

        {/* Mobile menu */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-white bg-opacity-100 backdrop-blur-md shadow-lg text-white text-lg font-semibold p-4 transition-opacity duration-700 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col space-y-5">
            <Link to="/" className=" cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-gray-700 w-fit">
              <span className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase" onClick={toggleMenu} >
                Home
              </span>
            </Link>
            <li className=" cursor-pointer">
              <DropdownButton dropdown={AiSolutionsDropdownMobile} classname="w-72">
                Ai Solutions
              </DropdownButton>
            </li>
            <li className=" cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-gray-700 w-fit">
              <Link
                to="/pricing.htm"
                className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            </li>

            <li className="cursor-pointer">
              <DropdownButton dropdown={WhoWeAreDropdown} classname="w-36">
                Who We Are
              </DropdownButton>
            </li>

            <li className=" cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-gray-700 w-fit">
              <Link
                to="/contact.htm"
                className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {buttonTabs.map((button, index) => {
              return (
                <Button key={index}>
                  <Link to="#" onClick={toggleMenu}>
                    {button}
                  </Link>
                </Button>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu icon */}
        <div className="flex flex-row justify-center items-center gap-6">
          <div className="hidden sm:block">
            <Link
              to=""
              className="underline underline-offset-8 decoration-2 decoration-black font-normal uppercase text-[14px] md:text-base font-kanit"
            >
              speak to us
            </Link>
          </div>
          <div className="hidden sm:flex flex-col justify-center items-center gap-y-3 ">
            <Link
              to=""
              className="underline underline-offset-8 decoration-2 decoration-black font-normal uppercase text-[8px] md:text-[10px] font-kanit"
            >
              8884915291
            </Link>
            <Link
              to=""
              className="underline underline-offset-8 decoration-2 decoration-black font-normal uppercase text-[8px] md:text-[10px] font-kanit"
            >
              8009694409
            </Link>
          </div>
          <div>
            <button className="text-black" onClick={toggleMenu}>
              {menuOpen ? (
                <span className={`text-3xl`}>
                  <RxCross1 />
                </span>
              ) : (
                <span className={`text-3xl`}>
                  <RxHamburgerMenu />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;