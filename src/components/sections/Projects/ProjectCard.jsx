import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";
import ContinuousScript from "../../common/Effects/ContinuousText";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demoUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="image-container">
        <ContinuousScript />
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-stack">
          {tech.map((item) => (
            <span key={item} className="tech-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
