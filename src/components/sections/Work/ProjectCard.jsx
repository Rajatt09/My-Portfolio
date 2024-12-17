import { motion } from "framer-motion";
import "./ProjectCard.css";
import ContinuousScript from "../../common/Effects/ContinuousText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CustomCursor from "../../common/Effects/HoverCursor";

const ProjectCard = ({
  id,
  title,
  subtitle,
  tags,
  images,
  stats,
  index,
  text,
  github,
  website,
}) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <CustomCursor text="View Project" />
      <div className="image-container" style={{ backgroundColor: "black" }}>
        <ContinuousScript text={text} />
        {/* <img src={image} alt={title} /> */}
        {images.length == 1 ? (
          <img src={images[0]} alt={title} />
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="project-carousel"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`${title} - slide ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="button-container">
          <a href={website} target="_blank">
            <button className="button">Live Website</button>
          </a>
          {/* <button className="button">
            Sound &nbsp; <span>▶</span>
          </button> */}
        </div>

        {stats && (
          <div className="stats">
            <div className="click-rate">{stats.clickRate}</div>
            <div className="click-rate-label">{stats.clickRateLabel}</div>
            <div className="increase">
              <div className="increase-value">{stats.increase}</div>
              <div className="increase-label">{stats.increaseLabel}</div>
            </div>
          </div>
        )}
      </div>

      <div className="content">
        <div className="case-study-label">
          <div className="line"></div> <div className="line2"></div> {id}
        </div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              • {tag}
            </span>
          ))}
        </div>

        <div style={{ textAlign: "right" }}>
          <a href={github} target="_blank">
            <motion.button
              className="view-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Source Code
            </motion.button>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
