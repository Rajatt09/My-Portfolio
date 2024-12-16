import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? (
        <FiSun className="icon-sun" />
      ) : (
        <FiMoon className="icon-moon" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
