import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function RotatingSpecialty() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const specialties = ["MERN Stack", "Aspiring Full Stack"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rotating-specialty">
      <AnimatePresence mode="wait">
        {/* <motion.div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "60px",
            width: "500px",
            backgroundColor: "#39dfaa",
          }}
            className="green-box"
        /> */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="specialty-text"
        >
          <span style={{ color: "rgba(142, 140, 140, 0.8)" }}>+</span>{" "}
          {specialties[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default RotatingSpecialty;
