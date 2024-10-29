import { Button } from "./ui/button";

function NewSpokePersonCard() {
  return (
    <>
      <div className="flex p-8">
        <div className=" grid grid-rows-2 grid-flow-col">
          <div className="w-[400px] h-[300px] border border-slate-300 rounded-2xl row-span-2 mt-8 mb-6">
            1
          </div>
          <h1 className="w-[400px] h-[300px] border border-slate-300 rounded-2xl  col-span-2">
            2
          </h1>
          <div className="w-[380px] border border-slate-300 rounded-2xl row-span-3 mt-8 ml-8">
            3
          </div>
        </div>
        <div className="mt-16 p-24">
          <h1 className="text-7xl font-normal">Meet your new spokesperson.</h1>
          <p className="mt-16 font-normal text-xl text-balance">
            It&apos;s you. Well, an AI version of you that speaks 175 languages,
            moves naturally, and always follows the script. Create your own
            avatar with just a webcam, or use one of our avatars. Change voice,
            clothes, or background with a click.
          </p>
          <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 w-52 mt-10 h-12 text-lg">
            Sign up for free
          </Button>
        </div>
      </div>
    </>
  );
}

export default NewSpokePersonCard;
