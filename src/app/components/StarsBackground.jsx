import React from "react";

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Generate stars */}
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 2}s infinite ease-in-out`,
            opacity: Math.random(),
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarsBackground;
