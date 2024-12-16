import { motion } from "framer-motion";
import "./Button.css";

const Button = ({ children, href, variant = "primary", className = "" }) => {
  const baseStyles = "button-base";
  const variants = {
    primary: "button-primary",
    outline: "button-outline",
    link: "button-link",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;
