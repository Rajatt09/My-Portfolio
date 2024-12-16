import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const skills = [
    { id: 1, name: "Empathy", className: "small tilt-left" },
    { id: 2, name: "User Research", className: "dark tilt-right large" },
    { id: 3, name: "Wireframing", className: "large tilt-left" },
    { id: 4, name: "Prototyping", className: "tilt-right" },
    { id: 5, name: "User Flow", className: "small tilt-left" },
    { id: 6, name: "Collaboration", className: "tilt-right" },
    { id: 7, name: "Information Design", className: "small tilt-left" },
    { id: 8, name: "Critical Thinking", className: "dark large tilt-left" },
    { id: 9, name: "Communication", className: "tilt-right" },
    { id: 10, name: "&", className: "large dark tilt-left" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 2, duration: 2.5 } }}
      viewport={{ once: true }}
      className="skills"
    >
      <h2>th my skills in:</h2>
      <div className="skills-container-section">
        <span className={`skill-container-tag skill-tag-left `}>Bootstrap</span>
        <span
          className={`skill-container-tag `}
          style={{ backgroundColor: "#ffffff", color: "#111111" }}
        >
          React.js
        </span>
        <span className={`skill-container-tag `}>Node.js</span>
        <span className={`skill-container-tag font1-tag `}>Git</span>
        <span className={`skill-container-tag `}>Python</span>
        <span className={`skill-container-tag skill-tag-right `}>
          Socket & WebRTC
        </span>

        <div className="lower-skill">
          <span
            className={`skill-container-tag skill-tag skill-circular-left `}
          >
            C++
          </span>
          <span className={`skill-container-tag font2-tag `}>MongoDB</span>
          <span
            className={`skill-container-tag font3-tag `}
            style={{ backgroundColor: "#ffffff", color: "#111111" }}
          >
            MySQL
          </span>
          <span className={`skill-container-tag `}>Express</span>
          <span className={`skill-container-tag skill-circular-right `}>
            PHP
          </span>
        </div>
        {/* <div className={`skill-tag `}>Empathy</div>
        <div className={`skill-tag `}>Collaboration</div>
        <div className={`skill-tag skill-circular-left `}>Visual and UI</div>
        <div className={`skill-tag skill-circular-right `}>&</div> */}
        {/* {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-tag ${skill.className}`}
            style={{
              animationDelay: `${skill.id * 0.1}s`,
            }}
          >
            {skill.name}
          </div>
        ))} */}
      </div>
    </motion.div>
  );
}

export default Skills;
