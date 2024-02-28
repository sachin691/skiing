import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const cardContent = [
  {
    title: "Local Knowledge",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo eum accusantium ipsa aspernatur natus aliquid cumque repellat impedit vitae, quas ipsum voluptatem libero maxime odio ad. Voluptates, tempore? Eaque.",
    linkText: "Learn More",
    linkUrl: "../",
  },
  {
    title: "Endless Terrain",
    description:
      "Discover endless terrain and create fully customizable trips tailored to your preferences. Whether it's mountains, forests, or beaches, explore your desired landscapes with ease and comfort.",
    linkText: "Learn More",
    linkUrl: "../",
  },
  {
    title: "Adventure Awaits",
    description:
      "Embark on unforgettable journeys to distant lands and immerse yourself in thrilling experiences. From adrenaline-pumping activities to serene getaways, find your next adventure here.",
    linkText: "Learn More",
    linkUrl: "../",
  },
];
const Guides = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-white p-[2rem] px-[5rem] gap-2">
      <h1 className="font-bold text-black text-5xl">
        Ski & <span className="text-[#bc3908]">Snowboard</span> Guides
      </h1>
      <p className="md:px-[22%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro pariatur natus quis deserunt saepe architecto
        distinctio laudantium velit? Temporibus, beatae nisi. Neque earum vitae eveniet aut nihil itaque eius numquam!
      </p>
      <div className="grid md:grid-cols-3 gap-[2rem] mt-[2rem]">
        {cardContent.map((card, index) => (
          <Card key={index} className="">
            <CardHeader>
              <Image src="https://images.unsplash.com/photo-1585919269458-6259dfe9f21a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
