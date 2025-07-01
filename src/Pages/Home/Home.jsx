import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Community from "./Community";
import Feedback from "./Feedback";
import Slider from "./Slider";
import PopulerService from "./PopulerService";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="*:border">
      <Helmet>
        <title>Home | Skillora</title>
        <meta
          name="description"
          content="Welcome to Skillora, your go-to platform for learning and development."
        />
      </Helmet>
      <Hero />
      <PopulerService />
      <HowItWorks />
      <Community />
      <Feedback />
    </div>
  );
};

export default Home;
