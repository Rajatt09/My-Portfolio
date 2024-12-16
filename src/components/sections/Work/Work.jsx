import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Timeline from "./Timeline";
import "./Work.css";
import { text } from "framer-motion/client";
import cropcartel from "../../../assets/images/cropcartel.png";
import dulitfest from "../../../assets/images/dulitfest.png";
import collaber from "../../../assets/images/collaber.png";
import opticaforms from "../../../assets/images/opticaforms.png";

const Work = () => {
  const projects = [
    {
      id: "01",
      title: "Collaber ",
      subtitle:
        "Collaborate in real-time with video calls and chat features, whiteboard",
      tags: ["React", "WebRTC", "Socket.io", "Fabric.js", "GoogleOAuth"],
      image: collaber,
      website: "https://collab-lime.vercel.app/",
      github: "https://github.com/Rajatt09/Collaber",
      year: "2022 - 2024",
      text: "8 min Read",
    },
    {
      id: "04",
      title: "JIIT OPTICA Forms",
      subtitle:
        "customizable forms offering easy configuration using simple json file, seamless data integration with Google Sheets, and multiple unique themes for an engaging user experience.",
      tags: ["React", "Styled-Components"],
      image: opticaforms,
      website: "https://forms.jiitopticachapter.com/",
      github: "https://github.com/jiitopticachapter/JIIT-OPTICA-Forms",
      text: "4 min Read",
    },
    {
      id: "02",
      title: "DU LITFEST",
      subtitle:
        "Delhi University Literature Festival website managed around 5000 registrations",
      tags: ["React", "Firebase", "GoogleSheet Api", "Framer Motion"],
      github: "https://github.com/HarshSharma20503/DuLitFest",
      website: "https://dulitfest.org/",
      image: dulitfest,
      text: "4 min Read",
    },
    {
      id: "03",
      title: "Crop Cartel",
      subtitle:
        "Facilitates buying and selling of agricultural products through a bidding system",
      tags: ["Socket.io", "Express", "Node", "React", "MongoDB"],
      github: "https://github.com/Rajatt09/CropCartel",
      website: "https://cropcartel.onrender.com/",
      image: cropcartel,
      text: "5 min Read",
    },
  ];

  return (
    <section id="work" className="work-section">
      <div>
        <motion.h2
          // id="work"
          className="work-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.h2>

        <div className="project-card-container">
          {/* {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))} */}
          <ProjectCard {...projects[0]} />

          <div className="project-card-column">
            <div className="project-card-column-1">
              <ProjectCard {...projects[2]} />
            </div>
            <div className="project-card-column-2">
              <ProjectCard {...projects[3]} />
            </div>
          </div>

          <ProjectCard {...projects[1]} />
        </div>

        <div className="timeline-container">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default Work;
