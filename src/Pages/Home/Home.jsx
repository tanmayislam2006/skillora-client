import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Community from "./Community";
import Feedback from "./Feedback";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider/>
      <HowItWorks />
      <Community />
      <Feedback />
    </div>
  );
};

export default Home;
