import { Button, Input } from "@nextui-org/react";
import "./Home.css";
// import sofa from "../assets/lau.png";

const WhyChooseUs = () => {
  return (
    <div className="md:h-[35rem] h-auto w-auto bg-[#edede9] flex md:flex-row flex-col items-center justify-evenly">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem]">
        <div className="py-[1rem] px-[2rem]">
          <h1 className="text-black font-sans font-bold md:text-5xl text-3xl text-start">
            Track Your <span className="text-[#bc3908]">Package</span> On The Best Way Possible
          </h1>
        </div>
        <div className="py-[0.5rem] px-[2rem] ">
          <p className="text-gray-900 font-sans text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ipsam id odit recusandae, at iusto
            deleniti. Aut nostrum dicta illum at velit quos, assumenda sunt aperiam dolore. Inventore, itaque explicabo?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 xl:w-[50rem] md:w-[30rem]">
        <Input placeholder="Email Address" className="w-[18rem]" />
        <Input placeholder="Password" className="w-[18rem]" />
        <Button className="w-[18rem] bg-[#bc3908] text-white" size="lg">
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
