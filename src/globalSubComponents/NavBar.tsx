// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import icon from "../globalAssets/icon.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";
import { updateToLoginStatus } from "../store/toLoginSlice";
import ButtonElement from "../globalElements/ButtonElement";
import UserAvatar from "./UserAvatar";
import { getCookie } from "../utils/cookies";
const menuItems = ["Home", "Services", "About", "Contact", "Pricing", "Blog", "Log In"];

const NavBar = () => {
  const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={() => {
        dispatch(updateNavStatus(!navOpenStatus));
      }}
      className="h-[5rem] nav z-[200] bg-white"
      maxWidth="xl"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        <div className="bg-white hidden lg:block">
          <Image width={60} src={icon} alt="logo" radius="none" />
        </div>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <div className="bg-white p-[1rem] flex justify-center items-center max-h-[5rem] ribbon">
            <Image width={60} src={icon} alt="logo" radius="none" />
          </div>
        </Link>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Packages
          </Link>
        </NavbarItem>
      </NavbarContent>{" "}
      <NavbarContent justify="end">
        <NavbarItem>
          <ButtonElement
            to="../Auth"
            variant="solid"
            label="Get Started"
            radius="none"
            className="w-[8rem] px-[8px] py-[10px] font-semibold bg-[#bc3908] text-white"
            onClickFunction={() => dispatch(updateToLoginStatus(false))}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-[1rem] bg-[rgba(0,0,0,0.4)] z-[200]">
        {menuItems.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={curTab === item ? "active" : "notActive"}
                to={index === 6 ? "../Auth" : `../${item}`}
                onClick={() => {
                  dispatch(updateNavStatus(!navOpenStatus));
                  dispatch(updateToLoginStatus(item === "Log In" ? true : false));
                }}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
