import { Contact, Film, Hand, Video } from "lucide-react";
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
              <div className="w-[700px] h-[400px] border border-slate-400 rounded-2xl flex">
                <div className="w-1/2 items-center m-10 ">
                  <p className="text-xl font-medium text-gray-500 pb-10">
                    Industry
                  </p>

                  <div className="flex pb-4 space-x-2">
                    <Contact className="text-[#A34CDB]" />
                    <h1 className="text-lg">Avatar Videos</h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <Film className="text-[#A34CDB]" />
                    <h1 className="text-lg">Video Translation</h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <Video className="text-[#A34CDB]" />
                    <h1 className="text-lg">Personalized Video</h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <Hand className="text-[#A34CDB]" />
                    <h1 className="text-lg">Interactive Avatar</h1>
                  </div>
                </div>
                <div className="flex flex-1 border border-slate-300 rounded-2xl w-[200px] object-cover">
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
