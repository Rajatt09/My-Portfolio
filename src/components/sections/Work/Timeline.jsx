import { color, motion } from "framer-motion";
import "./Timeline.css";

const Timeline = () => {
  const projects = [
    {
      year: "11/2024",
      name: "Rajat Bhati",
      type: "Source Code",
      tag: "My Portfolio Website",
      link: "",
      background: "#92d6c1",
      color: "#111111",
    },
    {
      year: "11/2024",
      name: "JIIT-OPTICA-Forms",
      type: "Live Preview",
      tag: "OPTICA'S own custom forms",
      link: "https://github.com/jiitopticachapter/JIIT-OPTICA-Forms",
      color: "#11111",
      background: "#aad0e3",
    },
    {
      year: "09/2024",
      name: "WhatsappMsg-GMail Sender",
      type: "Source Code",
      // tag: "hello",
      link: "https://github.com/Rajatt09/whatsapp-Message-mail-sender",
      background: "#92d6c1",
      color: "#111111",
    },
    {
      year: "06/2024",
      name: "Collaber",
      type: "Live Preview",
      tag: "Personal Project",
      link: "https://collab-lime.vercel.app/",
      color: "#11111",
      background: "#aad0e3",
    },
    {
      year: "05/2024",
      name: "Crop Cartel",
      type: "Live Preview",
      tag: "Hackathon Project",
      link: "https://cropcartel.onrender.com/",
      color: "#11111",
      background: "#aad0e3",
    },
    {
      year: "04/2024",
      name: "JSCOP 6.0 Website",
      type: "Live Preview",
      tag: "College Society Event Website",
      link: "https://jscop.jiitopticachapter.com/",
      color: "#11111",
      background: "#aad0e3",
    },
    {
      year: "02/2024",
      name: "CodeSphere",
      tag: "Hackathon Project",
      type: "Source Code",
      link: "https://github.com/Hackdata2024/26-li",
      background: "#92d6c1",
      color: "#111111",
    },
    {
      year: "02/2024",
      name: "DU LITFEST",
      tag: "Free Lancing Project",
      type: "Live Preview",
      link: "https://dulitfest.org/",
      color: "#11111",
      background: "#aad0e3",
    },
  ];

  return (
    <div id="timeline" className="timeline-container">
      <h3 className="timeline-title">Timeline</h3>
      <div className="timeline-list">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="timeline-item timeline-item-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-year">
              <span>Time (MM/YY)</span>
            </div>
            <div className="timeline-year project-head">
              <span>Projects</span>
            </div>
            <div
              className="timeline-button hidden-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buttons
            </div>
          </motion.div>
        </motion.div>
        {projects.map((project, index) => (
          <motion.div
            key={`${index}-${project.name}`}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-year">
              <span>{project.year}</span>
            </div>
            <div className="timeline-wrapper-box">
              <div className="timeline-name" style={{ textAlign: "center" }}>
                <span>
                  {project.name} <br />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "1rem",
                      fontWeight: "200",
                    }}
                  >
                    {project.tag}
                  </span>
                </span>
              </div>
              <a href={project.link} target="_blank">
                {" "}
                <motion.button
                  className="timeline-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: project.background,
                    color: project.color,
                  }}
                >
                  {project.type}
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
