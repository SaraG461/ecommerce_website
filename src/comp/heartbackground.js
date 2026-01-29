import React from "react";
import "./HeartsBackground.css";

const HeartsBackground = () => {
  const hearts = Array.from({ length: 30 }); // 30 hearts

  return (
    <div className="heart-bg">
      {hearts.map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,             // random horizontal start
            animationDuration: `${3 + Math.random() * 3}s`, // random speed
            fontSize: `${16 + Math.random() * 24}px`,    // random size
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

export default HeartsBackground;