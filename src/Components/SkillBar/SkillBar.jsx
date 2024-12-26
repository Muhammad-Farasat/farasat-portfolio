// SkillBar.jsx
import React, {  useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SkillBar({ skillName, percentage, color }) {
  const barRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      barRef.current,
      { width: "0%" }, // Start at 0%
      {
        width: `${percentage}%`, // Animate to the specified percentage
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, [percentage]);

  return (
    <div className="skill-bar-container flex flex-col items-start mb-4">
      <p className="font-orbitronBold text-sm tracking-widest mb-2 max-sm:text-xs">
        {skillName}
      </p>
      <div className="relative w-full h-4 bg-gray-300 rounded-md overflow-hidden">
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full"
          style={{
            backgroundColor: color || "#000000",
            clipPath:
              "polygon(0 0, calc(100% - 10px) 0, 100% 0%, calc(100% - 10px) 100%, 0 100%)",
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
