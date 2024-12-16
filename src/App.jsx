import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Work from "./components/sections/Work/Work";
import Contact from "./components/sections/Contact/Contact";
import PageTransition from "./components/common/Effects/PageTransition";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieAnimation from "./assets/lottieAnimation.json";

// Components
// const Navbar = lazy(() => import("./components/layout/Navbar/Navbar"));
// const Hero = lazy(() => import("./components/sections/Hero"));
// const Work = lazy(() => import("./components/sections/Work"));
// const About = lazy(() => import("./components/sections/About"));
// const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  return (
    <PageTransition>
      <Router>
        <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
          <Player
            autoplay
            loop
            src={lottieAnimation}
            className="lottie-player1"
          />
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <Navbar />
            <main>
              <Hero />
              <Work />
              <Contact />
            </main>
          </Suspense>
        </div>
      </Router>
    </PageTransition>
  );
}

export default App;
