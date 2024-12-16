import React from "react";
import "./HeroText.css";

const HeroText = ({ children, highlight }) => {
  if (!highlight) return <span>{children}</span>;

  return (
    <div className="highlighted-text">
      <span className="highlighted-text-content">{children}</span>
      <div className="highlighted-background" />
    </div>
  );
};

export default HeroText;
