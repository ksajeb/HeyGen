import { Button } from "./ui/button";

const DoLive = () => {
  return (
    <div className="flex items-center justify-start mt-28 ml-64">
      <div className="border border-slate-200 rounded-2xl w-[500px] h-[640px] mb-10 overflow-hidden">
        <img
          src="https://banner2.cleanpng.com/20240121/liz/transparent-speech-public-speaking-speech-delivery-presentatio-woman-speaking-at-podium-with-microphone-and-1710912994640.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 ml-32 mb-36 ">
        <h1 className="font-normal text-6xl mb-16">Do it Live</h1>
        <p className="text-xl font-normal text-wrap">
          Your customers can speak to your avatar live. They ask questions and
          an avatar responds, using your knowledge base and an LLM to enable a
          natural conversation with a person, not a painful interaction with a
          chat-bot.
        </p>
        <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 w-32 h-10 text-lg mt-10">
          See a demo
        </Button>
      </div>
    </div>
  );
};

export default DoLive;
