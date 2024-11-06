import { Button } from "./ui/button";

function videoNeed() {
  return (
    <div className="flex mt-40">
      <div className="w-full h-[800px] m-8 border border-slate-300 rounded-3xl flex">
        <div className="flex flex-col justify-start w-1/2 p-16 ml-10">
          <h1 className="font-normal text-7xl p-5 text-wrap ">
            Every video you have in every language you need.
          </h1>
          <p className="text-wrap text-lg p-5 font-normal">
            Update existing videos to 175 languages and dialects in minutes. We
            can even translate for you or add subtitles, making sure lips and
            voice match perfectly for the world’s easiest, most effective
            localization.
          </p>
          <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 w-32 mt-5 h-10 text-lg ml-6">
            Learn More
          </Button>
        </div>
        <div className="w-1/2 flex flex-col justify-start m-16">
          <div className="w-[550px] h-[780px] border border-slate-300 rounded-3xl ml-40 overflow-hidden">
            <img
              src="https://clipart-library.com/images/8cGb5AnMi.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default videoNeed;
