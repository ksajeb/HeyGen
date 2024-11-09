import {
  ArrowRight,
  Award,
  Book,
  BookOpen,
  CircleHelp,
  MonitorPlay,
  NotebookPen,
  Smile,
  Users,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Resources = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-900 text-base font-semibold ">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px] h-[350px] border border-slate-400 rounded-2xl flex">
                <div className="w-1/2 flex justify-start">
                  <div className=" my-8 mx-5">
                    <div className="flex pb-4 space-x-2">
                      <NotebookPen className="text-[#A34CDB]" />
                      <h1 className="text-lg">Blog</h1>
                    </div>
                    <div className="flex pb-4 space-x-2 text-wrap">
                      <Smile className="text-[#A34CDB]" />
                      <h1 className="text-sm ">Customer Stories</h1>
                    </div>
                    <div className="flex pb-4 space-x-2 text-wrap">
                      <Award className="text-[#A34CDB]" />
                      <h1 className="text-lg text-wrap">Affiliate Program</h1>
                    </div>
                    <div className="flex pb-4 space-x-2 text-wrap">
                      <Users className="text-[#A34CDB]" />
                      <h1 className="text-lg text-wrap">Community</h1>
                    </div>
                  </div>
                  <div className="my-8 mx-5 ">
                    <div className="flex pb-4 space-x-2">
                      <MonitorPlay className="text-[#A34CDB]" />
                      <h1 className="text-lg">Webinar</h1>
                    </div>
                    <div className="flex pb-4 space-x-2">
                      <CircleHelp className="text-[#A34CDB]" />
                      <h1 className="text-lg">Help Center</h1>
                    </div>
                    <div className="flex pb-4 space-x-2">
                      <BookOpen className="text-[#A34CDB]" />
                      <h1 className="text-lg">API Docs</h1>
                    </div>
                    <div className="flex pb-4 space-x-2">
                      <Book className="text-[#A34CDB]" />
                      <h1 className="text-lg">How to Guides</h1>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-300 rounded-2xl w-[320px] mx-2 my-3 overflow-hidden">
                  <div className="bg-slate-600 h-[250px]">
                    <img
                      src="https://media.istockphoto.com/id/1400610605/photo/smiling-elderly-businessman-using-digital-tablet-while-sitting-on-couch-at-home.jpg?s=612x612&w=0&k=20&c=RHxfTNVFMXXbu0OYw3vyvzTcWEE4qvajTGohaRBdkA8="
                      alt=""
                      className="w-full h-full object-cover "
                    />
                    <div className="bg-slate-600">
                      <p className=" pl-4 font-normal text-base">
                        See how Trivago is creating with HeyGen
                      </p>
                      <h1 className="flex justify-end text-[#A34CDB] text-xl m-6 cursor-pointer ">
                        <ArrowRight className="mr-4  text-[#A34CDB]" />
                        Learn more
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Resources;
