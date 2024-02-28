import { Button, Input } from "@nextui-org/react";
import "./Home.css";
// import sofa from "../assets/lau.png";

const WhyChooseUs = () => {
  return (
    <div className="md:h-[35rem] h-auto w-auto bg-[#edede9] flex md:flex-row flex-col items-center justify-evenly py-[5rem]">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem]">
        <div className="py-[1rem] px-[2rem]">
          <h1 className="text-black font-sans font-bold md:text-5xl text-3xl text-start">
            Hurry !! <span className="text-[#bc3908]">Book</span> Your Spot Now .
          </h1>
        </div>
        <div className="py-[0.5rem] px-[2rem] ">
          <p className="text-gray-900 font-sans text-start max-w-[90rem]">
            Don't miss out on the ultimate skiing adventure! Secure your spot now and embark on an unforgettable journey
            through snow-covered mountains and breathtaking landscapes. Whether you're a beginner or an expert, reserve
            your spot today for an experience of a lifetime!
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
