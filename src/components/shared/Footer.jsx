import { Button } from "../ui/button";

function Footer() {
  return (
    <div className="bg-slate-300 ">
      <div className=" flex items-start  h-[550px]">
        <div className="border border-green-200 rounded-lg h-[380px] w-72 bg-green-200  ml-8 my-auto flex flex-col items-center justify-center">
          <img src="" alt="" />
          <Button className="rounded-full bg-black hover:bg-[#A34CDB] ease-in duration-500 text-lg font-light mt-72">
            Get started for free
          </Button>
        </div>
        <div className="pl-16 my-20 ">
          <h1 className="text-2xl font-normal ">Use Cases</h1>
          <ul className="cursor-pointer mt-8">
            <li>Agencies</li>
            <li>Marketing</li>
            <li>Sales</li>
            <li>
              Learning & <span>Development</span>
            </li>
            <li>Product Overviews</li>
            <li>Scaled Outreach</li>
          </ul>
        </div>

        <div className="pl-40 my-20">
          <h1 className="text-2xl font-normal">Features</h1>
          <ul className="cursor-pointer mt-8">
            <li>AI Avatar</li>
            <li>AI Voices</li>
            <li>Video Translate</li>
            <li>Personalized Video</li>
            <li>Interactive Avatar</li>
            <li>Zapier</li>
          </ul>
        </div>

        <div className="pl-40 my-20">
          <h1 className="text-2xl font-normal">Resources</h1>
          <ul className="cursor-pointer mt-8">
            <li>API Documentation</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Tutorial</li>
            <li>Weekly Webinar</li>
            <li>Case Studies</li>
            <li>Help Center</li>
            <li>Alternative</li>
            <li>Affiliate Marketing</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="pl-40 my-20">
          <h1 className="text-2xl font-normal">Company</h1>
          <ul className="cursor-pointer mt-8">
            <li>About</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Security Portal</li>
            <li>Ethics</li>
            <li>Moderation Policy</li>
            <li>Cookie Preferences</li>
            <li>Contact</li>
            <li>Halloween Contest 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
