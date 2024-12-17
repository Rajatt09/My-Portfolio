import React from "react";
// import MousePosition from "react-mouse-position";

const CustomCursor = ({ text }) => {
  return (
    <>
      {/* <MousePosition>
        {({ x, y }) => (
          <div
            style={{
              position: "fixed",
              left: x + 10,
              top: y + 10,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              background: "#007bff",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "5px",
              fontSize: "0.9rem",
              zIndex: 1000,
            }}
          >
            {text}
          </div>
        )}
      </MousePosition> */}
    </>
  );
};

// const App = () => {
//   return (
//     <div style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
//       <CustomCursor />
//       <div style={{ textAlign: "center", marginTop: "200px" }}>
//         <h1>Custom Cursor Hover Effect</h1>
//         <p>Move the mouse around to see the custom cursor effect.</p>
//       </div>
//     </div>
//   );
// };

export default CustomCursor;
