import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/400x200",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image: "https://via.placeholder.com/400x200",
      tech: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
