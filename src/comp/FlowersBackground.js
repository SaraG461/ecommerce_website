import React from "react";
import "./FlowersBackground.css";

const FlowersBackground = () => {
  const flowers = Array.from({ length: 25 }); // number of flowers

  return (
    <div className="flower-bg">
      {flowers.map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            fontSize: `${12 + Math.random() * 14}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❀
        </span>
      ))}
    </div>
  );
};

export default FlowersBackground;
