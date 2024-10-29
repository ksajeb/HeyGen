import HomeVideoCard from "./HomeVideoCard";
import { Button } from "./ui/button";

function VideoPage() {
  return (
    <>
      <div className="mx-auto">
        <h1 className="flex text-center font-thin text-7xl  justify-center pt-36">
          Create and translate videos with AI
        </h1>
        <p className="flex my-6 text-xl justify-center ">
          Produce studio-quality videos in 175 languages without a camera or
          crew.
        </p>
        <Button className="flex justify-center items-center text-lg font-light bg-black hover:bg-[#A34CDB] ease-in rounded-full duration-500  my-6 mx-auto w-56 h-12">
          Get started for free
        </Button>
        <p className="flex justify-center">
          Unlimited Videos | No credit card needed
        </p>
        <div>
          <HomeVideoCard />
        </div>
        <p className="p-6 flex items-center justify-center text-2xl font-normal">
          Trusted by over 45,000 Customers | <span> Logo </span> Rated 4.8/5 on
          G2
        </p>
      </div>
    </>
  );
}

export default VideoPage;
