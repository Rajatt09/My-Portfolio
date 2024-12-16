import { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(
        mousePosition.x,
        mousePosition.y
      );
      setIsPointer(
        hoveredElement?.tagName === "BUTTON" ||
          hoveredElement?.tagName === "A" ||
          hoveredElement?.closest("button") ||
          hoveredElement?.closest("a")
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateCursorType);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateCursorType);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div
      className={`custom-cursor ${isPointer ? "pointer" : ""}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: `scale(${isPointer ? 1.2 : 1})`,
      }}
    >
      <div className={`cursor-dot ${isPointer ? "pointer-dot" : ""}`} />
    </div>
  );
};

export default CustomCursor;
