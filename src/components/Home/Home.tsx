// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Hero from "./subComponents/Hero";
import Clients from "./subComponents/Clients";
import Guides from "./subComponents/Guides";
import WhyChooseUs from "./subComponents/WhyChooseUs";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <>
      <Hero />
      <Clients />
      <Guides />
      <WhyChooseUs />
    </>
  );
};

export default Home;
