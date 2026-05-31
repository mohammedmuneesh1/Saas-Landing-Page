"use client"
import ArrowRight from "@/assets/arrow-right.svg";
import logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className=" sticky top-0 z-50 ">

{/* TOP BLACK BANNER START*/}
    <div className="w-full flex justify-center items-center py-3 bg-black text-white text-sm gap-3 capitalize">
      <h2 className=" text-white/60 hidden md:block">Streamline your workflow and boost your productivity </h2>
      <div className="inline-flex gap-1 items-center">
      <h3 className=" font-semibold">Get Started for free </h3>
<div className="relative w-4 h-4 ">
  <Image
    src={ArrowRight}
    alt="Arrow Right"
    loading="eager"
     className="invert"
    fill
  />
</div>
      </div>
    </div>
    {/* TOP BLACK BANNER END*/}



    {/* HEADER START*/}
    <div
    className="py-5   w-full max-w-full"
    //  className="w-full flex justify-between items-center py-6 px-4 md:px-12"
     >

      <div
       className="custom-layout"
//        className="
// w-full
// mx-auto
// px-5
// max-w-[375px]
// md:max-w-[768px]
// xl:max-w-[1200px]
// xl:px-20
// bg-red-500

      >

        <div 
        className="flex items-center justify-between"
        >

          {/*APP LOGO */}
        <Image 
        src={logo}
        alt="Logo"
        width={40}
        height={40}
        loading="eager"
        />

        <Image 
        src={MenuIcon}
        alt="Logo"
        width={20}
        height={20}
        loading="eager"
        className="md:hidden"
        />



        <nav className="hidden md:flex items-center text-black gap-6  ">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 ">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 ">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 ">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            Contact
          </a>

          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex tracking-tight">
            Get Started
          </button>
        </nav>

        
        

        </div>
      </div>
    


    </div>
    {/* HEADER END*/}



    </header>
  )
};
export default Header;
