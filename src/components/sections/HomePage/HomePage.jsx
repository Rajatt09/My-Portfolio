import { motion } from "framer-motion";
import PageTransition from "../../common/Effects/PageTransition";
import RotatingText from "../../common/Effects/RotatingText";
import ScrollIndicator from "../../common/Effects/ScrollingIndicator";
import "./HomePage.css";

function Home() {
  return (
    <div className="home-page">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.4 }}
      >
        <h2 style={{ margin: "0" }}>Hi, I am Rajat</h2>
        <div className="home-title-container">
          <div className="home-developer-title">
            <h1 style={{ margin: "0", color: "#aad0e3" }}>Developer</h1>
            <div className="home-title-line"></div>
          </div>

          <RotatingText />
          <div className="hero-about-me">
            {" "}
            who loves building cool, impactful web solutions and exploring
            creative tech ideas.
          </div>
        </div>
      </motion.div>
      <ScrollIndicator />
    </div>
  );
}

export default Home;
