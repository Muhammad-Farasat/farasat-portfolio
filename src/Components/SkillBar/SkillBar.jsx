// SkillBar.jsx
import React from "react";

export default function SkillBar({ skillName, percentage, color }) {
  return (
    <div className="skill-bar-container flex flex-col items-start mb-4">
      <p className="font-orbitronBold text-sm tracking-widest mb-2 max-sm:text-xs ">{skillName}</p>
      <div className="relative w-full h-4 bg-gray-300 rounded-md">
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color || "#000000",
            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 0%, calc(100% - 10px) 100%, 0 100%)",
          }}
        ></div>
        <span
          className="absolute top-0 right-0 text-xs text-gray-800 bg-gray-300 pr-2"
          style={{ transform: "translateY(-50%)", top: "50%" }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}
