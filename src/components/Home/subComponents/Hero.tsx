import { Button } from "@nextui-org/react";
import "./Home.css";
const Hero = () => {
  return (
    <div className="h-screen w-auto flex md:flex-row flex-col items-center justify-evenly bg">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem]">
        <div className="py-[1rem] px-[2rem]">
          <h1 className="text-white font-sans font-bold md:text-6xl text-3xl text-start">
            Outstanding Range <br /> of <span className="text-[#bc3908]">Activities</span>
            <br />
            to enjoy
          </h1>
        </div>
        <div className="py-[0.5rem] px-[2rem] ">
          <p className="text-white font-sans text-start max-w-[40rem]">
            Experience Premium Skiing Services with Our Expert Team. From Equipment Rentals to Slope-side Assistance, We
            Guarantee a Seamless Experience Every Time.
          </p>
        </div>
        <div className="flex flex-row  items-start justify-between gap-2 py-[1rem] px-[2rem] ">
          <Button className="bg-[#bc3908] text-white" size="lg">
            Explore Now
          </Button>
          <Button className="bg-[#bc3908] text-white" size="lg">
            Select Package
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
