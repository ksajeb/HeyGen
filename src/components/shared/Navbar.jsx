import Company from "../navbarNavigationMenu/Company";
import Platform from "../navbarNavigationMenu/Platform";
import Pricing from "../navbarNavigationMenu/Pricing";
import Resources from "../navbarNavigationMenu/Resources";
import Solution from "../navbarNavigationMenu/Solution";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <div className=" bg-slate-900 w-full h-16 flex justify-between fixed top-0 left-0 z-50">
      <div className="ml-4 p-2 w-40 h-40 ">
        <div className="flex items-center ">
          <img src="/heygen.png" alt="banner" />
          <div className="flex items-center space-x-2 cursor-pointer pl-6  text-lg justify-between ">
            <Platform />
            <Pricing />
            <Resources />
            <Solution />
            <ul>
              <li className="text-lg">Enterprise</li>
            </ul>
            <Company />
          </div>
        </div>
      </div>
      <div className="flex text-nowrap">
        <ul className="flex items-center  px-8 space-x-4">
          <li className=" text-lg cursor-pointer">Login</li>
          <Button className=" border border-white rounded-full bg-slate-900 text-white w-40 ">
            Contact Sales
          </Button>
          <Button className="rounded-full bg-black text-white hover:bg-[#A34CDB] ease-in duration-500 w-40 ">
            Sign up for free
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
