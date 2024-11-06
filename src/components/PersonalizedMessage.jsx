import { Button } from "./ui/button";

const PersonalizedMessage = () => {
  return (
    <div className="flex mt-16 ">
      <div className="w-full m-6 h-[800px] border border-slate-300 rounded-3xl ">
        <div className="w-1/2 flex  flex-col  ml-20 mt-48 ">
          <h1 className="font-light text-7xl">
            Personalized <br />
            messages without a person.
          </h1>
          <p className="text-xl text-wrap mt-10 font-medium">
            Use your avatar to send personalized videos and branded landed pages
            to each contact in your CRM. Bump up qualified leads and conversion
            rates with videos crafted for individuals, made at scale.
          </p>
          <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 w-40 mt-10 h-12 text-lg">
            Learn more
          </Button>
        </div>
        <div className="flex justify-end">
          <p className="w-1/2 h-1/2 border border-slate-200 rounded-xl">dgf</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedMessage;
