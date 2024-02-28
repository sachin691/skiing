// Dependencies
import { Button, Divider, Image, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const footerLinks = [
  {
    type: "Company",
    data: [
      { key: "About Us", value: "About Us", link: "", state: {} },
      { key: "Careers", value: "Careers", link: "", state: {} },
      { key: "Blog", value: "Blog", link: "", state: {} },
      { key: "Pricing", value: "Pricing", link: "", state: {} },
    ],
  },
  {
    type: "Resources",
    data: [
      { key: "Templates", value: "Templates", link: "", state: { id: 0 } },
      { key: "Tutorials", value: "Tutorials", link: "", state: { id: 1 } },
      { key: "Free Resources", value: "Free Resources", link: "", state: { id: 2 } },
      { key: "Contract Templates", value: "Contract Templates", link: "", state: { id: 3 } },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[6rem] gap-[2rem] text-black bg-white">
      <div className="flex upperFooter justify-evenly sm:w-[70%]">
        <div className="max-w-[20rem] flex flex-col gap-[2rem] companySection md:mr-[8rem]">
          <Image width={150} src={logo} alt="logo" className="bg-white p-[1rem]" />

          <Link to="/Privacy" className="text-[#bc3908]">
            Privacy & Policy
          </Link>
        </div>

        <div className="flex justify-between w-full footerLinks gap-[2rem] mt-[3rem] ">
          {footerLinks.map((ele, index) => (
            <div key={index} className="flex flex-col gap-[1rem]">
              <p className="font-sans text-[#bc3908] font-bold text-[1.1rem]">{ele.type}</p>
              <Listbox items={ele.data} aria-label="navigation" className="dark" variant="light">
                {(item) => (
                  <ListboxItem key={item.key} className="px-[0]" textValue={item.key}>
                    <Link to={`../${item.link}`} state={item.state}>
                      {item.value}
                    </Link>
                  </ListboxItem>
                )}
              </Listbox>
            </div>
          ))}
          <div className="flex flex-col gap-[1rem] max-w-[20rem]">
            <h1 className="font-sans text-[#bc3908] font-bold text-[1.1rem]">Join Our Newsletter</h1>
            <div className="flex flex-row gap-x-2">
              <Input placeholder="Your email" size="sm" radius="none" className="h-[4rem]" />
              <Button className="bg-[#bc3908] text-white h-[2.95rem]" radius="none">
                Subscribe
              </Button>
            </div>
            <p>*Will send you weekly updates for your better finance management</p>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <Divider className="" />
        <Divider className="" />
        <Divider className="" />
      </div>

      <p>© 2024 SKIING • All Rights Reserved</p>
    </div>
  );
};

export default Footer;
