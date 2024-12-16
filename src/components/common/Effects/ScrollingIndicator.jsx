import { motion } from "framer-motion";
import "./Effects.css";

function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div className="scroll-text">Scroll down</div>
    </motion.div>
  );
}

export default ScrollIndicator;
