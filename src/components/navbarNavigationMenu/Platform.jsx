import { Contact, Film, Hand, Video } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Platform = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-900 text-base font-semibold active:text-[#A34CDB]">
              Platform
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[580px] h-[400px] border border-slate-400 rounded-2xl flex">
                <div className="w-full items-center m-10 ">
                  <p className="text-xl font-medium text-gray-500 pb-6">
                    Products
                  </p>

                  <div className="flex pb-4 space-x-2">
                    <Contact className="text-[#A34CDB]" />
                    <h1 className="text-base font-semibold">Avatar Videos</h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <Film className="text-[#A34CDB]" />
                    <h1 className="text-base font-semibold">
                      Video Translation
                    </h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <Video className="text-[#A34CDB]" />
                    <h1 className="text-base font-semibold">
                      Personalized Video
                    </h1>
                  </div>
                  <div className="flex pb-4 space-x-2">
                    <Hand className="text-[#A34CDB]" />
                    <h1 className="text-base font-semibold">
                      Interactive Avatar
                    </h1>
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

export default Platform;
