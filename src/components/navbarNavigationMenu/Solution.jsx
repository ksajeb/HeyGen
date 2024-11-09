import {
  Book,
  MapPinPlusInside,
  ShoppingCart,
  SquareCode,
  UsersRound,
  Volume2,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Solution = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-900 text-base font-semibold ">
              Solution
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] h-[350px] border border-slate-400 rounded-2xl flex">
                <div className="w-1/2 flex justify-start">
                  <div className=" my-10 mx-5">
                    <p className="text-xl font-medium text-gray-500 pb-6">
                      Industry
                    </p>

                    <div className="flex pb-4 space-x-2">
                      <UsersRound className="text-[#A34CDB]" />
                      <h1 className="text-lg">Agencies</h1>
                    </div>
                    <div className="flex pb-4 space-x-2 text-wrap">
                      <Book className="text-[#A34CDB]" />
                      <h1 className="text-lg text-wrap">E-learning</h1>
                    </div>
                  </div>
                  <div className="my-10 mx-5 ">
                    <p className="text-xl font-medium text-gray-500 pb-6">
                      Teams
                    </p>

                    <div className="flex pb-4 space-x-2">
                      <Volume2 className="text-[#A34CDB]" />
                      <h1 className="text-lg">Marketing</h1>
                    </div>
                    <div className="flex pb-4 space-x-2">
                      <SquareCode className="text-[#A34CDB]" />
                      <h1 className="text-lg">Learning & Development</h1>
                    </div>
                    <div className="flex pb-4 space-x-2">
                      <MapPinPlusInside className="text-[#A34CDB]" />
                      <h1 className="text-lg">Localization</h1>
                    </div>
                    <div className="flex pb-4 space-x-2">
                      <ShoppingCart className="text-[#A34CDB]" />
                      <h1 className="text-lg">Sales Enablement</h1>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-300 rounded-2xl w-[350px] mx-2 my-3 object-cover flex justify-end">
                  <img
                    src="/heygen.png"
                    alt=""
                    className="w-full h-full overflow-hidden"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Solution;
