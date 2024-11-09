import { CircleDollarSign, NotebookPen } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Pricing = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-900 text-base font-semibold ">
              Pricing
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[580px] h-[400px] border border-slate-400 rounded-2xl flex">
                <div className="w-full items-center m-10 ">
                  <div className="flex pb-4 space-x-2">
                    <NotebookPen className="text-[#A34CDB]" />
                    <h1 className="text-base font-semibold">Pricing Plan</h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <CircleDollarSign className="text-[#A34CDB]" />
                    <h1 className="text-base font-semibold">API Pricing</h1>
                  </div>
                </div>
                <div className=" border border-slate-300 rounded-3xl w-[950px] object-cover my-4 mx-5">
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

export default Pricing;
