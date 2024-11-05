import { Button } from "./ui/button";

function NewSpokePersonCard() {
  return (
    <>
      <div className="flex p-8">
        <div className=" grid grid-rows-2 grid-flow-col">
          <div className="w-[400px] h-[300px] border border-slate-300 rounded-2xl row-span-2 mt-8 mb-6 overflow-hidden">
            <img src="https://media.istockphoto.com/id/1400610605/photo/smiling-elderly-businessman-using-digital-tablet-while-sitting-on-couch-at-home.jpg?s=612x612&w=0&k=20&c=RHxfTNVFMXXbu0OYw3vyvzTcWEE4qvajTGohaRBdkA8=" alt="" className="w-full h-full object-cover" />
          </div>
          <h1 className="w-[400px] h-[300px] border border-slate-300 rounded-2xl  col-span-2 overflow-hidden">
            <img src="https://media.istockphoto.com/id/1286489527/photo/education-for-muslim-women-black-student-lady-in-hijab-posing-outdoors.jpg?s=612x612&w=0&k=20&c=9UKSiHmLIqCUCOohzJaXDvp3JjBwf-acENSM4HGyZrU=" alt="" className="w-full h-full object-cover"/>
          </h1>
          <div className="w-[380px] border border-slate-300 rounded-2xl row-span-3 mt-8 ml-8  overflow-hidden">
            <img src="https://thumbs.dreamstime.com/b/young-african-american-man-standing-arms-crossed-full-length-portrait-isolated-white-background-45819818.jpg" alt="" className="w-full h-full object-cover"/>
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
