import { Button } from "../ui/button";

function Navbar() {
  return (
    <div className=" bg-slate-700 w-full h-20 flex justify-between fixed top-0 left-0">
      <div className="ml-4 p-2 w-40 h-40 ">
        <div className="flex items-center ">
          <img src="/heygen.png" alt="banner" />
          <ul className="flex items-center space-x-8 cursor-pointer pl-8 text-nowrap text-lg">
            <li>Products</li>
            <li>Use Cases</li>
            <li>Resources</li>
            <li>Company</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="flex text-nowrap">
        <ul className="flex items-center  px-8 space-x-4">
          <li className="cursor-pointer text-lg">Contact Sales</li>
          <Button className="rounded-full bg-black text-white hover:bg-[#A34CDB] ease-in duration-500 w-40 ">
            Sign up for free
          </Button>
          <Button className="rounded-full bg-black text-white hover:bg-[#A34CDB] ease-in duration-500 w-24">
            Login
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
