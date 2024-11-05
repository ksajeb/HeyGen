import { Button } from "./ui/button";

const WordNeed = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-48 w-full">
        <div className="">
          <h1 className="text-7xl">All you needs is words </h1>
          <p className=" text-center break-words whitespace-normal">
            Write your script (or get some help with built-in ChatGPT), and
            watch an avatar read it flawlessly in one take. Need to change
            something? No reshoots necessary, just edit the text.
          </p>
          <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 w-52 mt-10 h-12 text-lg ">
            Get started for free
          </Button>
          <div className="flex ">
            <div className="w-[700px] h-[350px] border border-slate-400 rounded-xl my-20 ml-60">
              image
            </div>
            <div className="flex justify-start items-start">kdfdiu</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordNeed;
