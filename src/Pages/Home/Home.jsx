import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Community from "./Community";
import Feedback from "./Feedback";
import Slider from "./Slider";
import PopulerService from "./PopulerService";
import { Helmet } from "react-helmet-async";
import PromotionalBanner from "./PromotionalBanner";
import Testimonials from "./Testimoials";
import FeaturedProviders from "./FeaturedProviders";

    // Hero.jsx
    // PopulerService.jsx
    // FeaturedProviders.jsx
    // HowItWorks.jsx
    // PromotionalBanner.jsx
    // Testimonials.jsx
    // FAQ.jsx
    // Feedback.jsx
    // CallToAction.jsx

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Skillora</title>
        <meta
          name="description"
          content="Welcome to Skillora, your go-to platform for learning and development."
        />
      </Helmet>
      <Hero />
      <PopulerService />
      <FeaturedProviders/>
      <HowItWorks />
      <PromotionalBanner/>
      <Testimonials/>
      <Community />
    </div>
  );
};

export default Home;
