import { Globe, Play } from "lucide-react";
import { Button } from "./ui/button";

const WordNeed = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-48 ">
        <div className="">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-7xl">All you needs is words </h1>
            <p className="mt-10 font-medium text-lg ">
              Write your script (or get some help with built-in ChatGPT), and
              watch an avatar read it flawlessly in one take. Need to change
              something? No reshoots necessary, just edit the text.
            </p>
            <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 w-52 mt-10 h-12 text-lg ">
              Get started for free
            </Button>
          </div>
          <div className="flex items-center justify-center mr-52">
            <div className="w-[350px] h-[220px] border border-slate-400 rounded-xl my-20 ml-60 z-10 bg-slate-300">
              <div className="w-[100px] h-[30px] border border-black rounded-lg m-4 flex">
                <Globe className="m-1" />
                <p className="text-base ">Alloy</p>
              </div>
              {/* <div className=" mt-3">
                <Play />
              </div> */}

              <div className="w-[318px] h-[140px] border border-black rounded-xl m-4 ">
                <p className="p-2 text-wrap font-normal text-xl">
                  Welcome to HeyGen! Give me a script to read, and make edits
                  any time you want.
                </p>
              </div>
            </div>
            <div className="w-[675px] h-[380px] border border-slate-400 rounded-xl my-20 -ml-16 overflow-hidden ">
              <img
                src="https://t4.ftcdn.net/jpg/06/50/90/67/360_F_650906734_X3cz4b75H6gKeS02eeFnt4nVmDtOL2w3.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="w-[200px] h-[200px] border border-black">
                <p>dsgdhxfigsdufdukghdfughdngkgcjdghodg;ku foughughudfhg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordNeed;
