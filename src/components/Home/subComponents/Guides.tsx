import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const cardContent = [
  {
    title: "Local Knowledge",
    description:
      "Unlock insider tips and local knowledge on the best skiing spots, hidden gems, and must-try trails. Elevate your experience with personalized recommendations from our experienced team of skiing enthusiasts.",
    linkText: "Learn More",
    linkUrl:
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Endless Terrain",
    description:
      "Discover endless terrain and create fully customizable trips tailored to your preferences. Whether it's mountains, forests, or beaches, explore your desired landscapes with ease and comfort.",
    linkText: "Learn More",
    linkUrl:
      "https://images.unsplash.com/photo-1516706443377-10e1c05a3346?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Adventure Awaits",
    description:
      "Embark on unforgettable journeys to distant lands and immerse yourself in thrilling experiences. From adrenaline-pumping activities to serene getaways, find your next adventure here.",
    linkText: "Learn More",
    linkUrl:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Guides = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-white px-[3rem]  md:px-[5rem] py-[5rem] gap-2">
      <h1 className="font-bold text-black text-5xl">
        Ski & <span className="text-[#bc3908]">Snowboard</span> Guides
      </h1>
      <p className="md:px-[22%]">
        Expert guides for unforgettable ski and snowboard adventures. Discover pristine slopes and exhilarating runs
        with our experienced team.
      </p>
      <div className="grid md:grid-cols-3 gap-[2rem] mt-[2rem]">
        {cardContent.map((card, index) => (
          <Card key={index} className="">
            <CardHeader>
              <Image src={card.linkUrl} />
            </CardHeader>
            <CardBody className="px-[1rem] py-[2rem]">
              <h1 className="font-bold text-xl">{card.title}</h1>
              <p>{card.description}</p>
            </CardBody>
            <CardFooter className="p-[2rem] mt-[1rem]">
              <Link
                to={card.linkUrl}
                className="mt-2 flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#bc3908]"
              >
                <p>{card.linkText}</p>
                <FaArrowRightLong className="mt-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Guides;
