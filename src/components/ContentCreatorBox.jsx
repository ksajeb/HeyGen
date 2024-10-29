import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ContentCreatorBox = () => {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="items-center pt-36">
          <div className="items-center flex flex-col">
            <h1 className="text-5xl">Video for content creators like you.</h1>
            <h3 className="items-center flex justify-center p-8 text-xl">
              Whatever you do, whoever you work with — here&apos;s how HeyGen
              can help.
            </h3>
          </div>
        </div>
        <div className="ml-80 py-12 flex">
          <div className="border border-gray-200 w-[610px] h-[370px] rounded-xl  items-center">
            image
          </div>
          <div className="flex items-center justify-end ml-20 text-2xl font-medium  ">
            <Accordion type="single" collapsible className="w-[400px]">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline font-normal">
                  Marketing
                </AccordionTrigger>
                <AccordionContent>
                  <p className="">
                    Make product explainers and how-to&apos;s for
                    anyone,anywhere,instantly.
                  </p>
                  <h1 className="flex justify-end text-[#A34CDB] text-xl mt-6 cursor-pointer">
                    <ArrowRight className="mr-4 mt-1 text-[#A34CDB]" />
                    Learn more
                  </h1>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline font-normal">
                  Sales
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Train new reps,provide the latest competitive
                    intelligence,and teach reps to sell new products with
                    localized,engaging videos they can watch on-demand.Or reach
                    out to leads with personalized videos made just for them.
                  </p>
                  <h1 className="flex justify-end text-[#A34CDB] text-xl mt-6 cursor-pointer">
                    <ArrowRight className="mr-4 mt-1 text-[#A34CDB]" />
                    Learn more
                  </h1>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline font-normal">
                  Learning & Development
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Nobody wants to read training docs and e-learning
                    content,and now they don&apos;t have to.
                  </p>
                  <h1 className="flex justify-end text-[#A34CDB] text-xl mt-6 cursor-pointer">
                    <ArrowRight className="mr-4 mt-1 text-[#A34CDB]" />
                    Learn more
                  </h1>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline font-normal">
                  Localization
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Translate ads,courses,video podcasts and more to reach your
                    global audience.Say sayonara to dubbing and bonjour to AI
                    voice and lip sync.
                  </p>
                  <h1 className="flex justify-end text-[#A34CDB] text-xl mt-6 cursor-pointer">
                    <ArrowRight className="mr-4 mt-1 text-[#A34CDB]" />
                    Learn more
                  </h1>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCreatorBox;
