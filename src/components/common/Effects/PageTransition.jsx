import { motion } from "framer-motion";
import "./Effects.css";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      className="page-transition"
    >
      <motion.div
        className="slide-dark"
        initial={{ width: "0%", opacity: 1 }} // Start with zero width and some opacity
        animate={{ width: "100%", opacity: 1 }} // Expand to full width with reduced opacity
        exit={{
          width: "0%", // Keep width at 100% during the delay
          opacity: 1, // Keep opacity reduced
          transition: {
            delay: 0.2, // Delay the shrinking
            width: { duration: 0.6 }, // Duration for shrinking
            opacity: { duration: 0.4 },
          },
        }}
        transition={{
          duration: 1, // Total duration for expanding
          ease: [0.4, 0, 0.2, 1], // Smooth cubic Bezier easing
        }}
      />
      {children}
    </motion.div>
  );
}

export default PageTransition;
