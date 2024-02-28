// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Hero from "./subComponents/Hero";
import Clients from "./subComponents/Clients";
import Guides from "./subComponents/Guides";
import WhyChooseUs from "./subComponents/WhyChooseUs";
import Project from "./subComponents/Project";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <>
      <Hero />
      <Guides />
      <Project />
      <Clients />
      <WhyChooseUs />
    </>
  );
};

export default Home;
