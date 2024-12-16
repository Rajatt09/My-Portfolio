import { motion } from "framer-motion";
import Container from "../../common/Container/Container";
import HeroText from "./HeroText";
import "./Hero.css";
import Skills from "../Skills/Skills";
import Home from "../HomePage/HomePage";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieAnimation from "./../../../assets/lottieAnimation.json";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <p className="hero-description">
            Hi, I am Rajat✌️,
            <br />
            MERN Stack Developer
            <br />
            who loves building cool, impactful web solutions and exploring
            creative tech ideas.
          </p>
        </motion.div> */}

        <Home />
        <Skills />
      </Container>
    </section>
  );
};

export default Hero;
