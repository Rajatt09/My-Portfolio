import React from "react";
import { FaStar } from "react-icons/fa";
import "./Effects.css";

const ContinuousScript = ({ text = "4 mint Read" }) => {
  const repeatedText = new Array(16).fill(text);
  return (
    <div className="rssBlock">
      <p className="cnnContents">
        <span className="marqueeStyle">
          &nbsp;
          {repeatedText.map((item, index) => (
            <React.Fragment key={index}>
              <FaStar
                style={{
                  color: "white",
                  fontSize: "0.5rem",
                }}
              />{" "}
              {item} &nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
          ))}
        </span>
        <span className="marqueeStyle2">
          {repeatedText.map((item, index) => (
            <React.Fragment key={index}>
              <FaStar
                style={{
                  color: "white",
                  fontSize: "0.5rem",
                }}
              />{" "}
              {item} &nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
          ))}
        </span>
      </p>
    </div>
  );
};

export default ContinuousScript;
