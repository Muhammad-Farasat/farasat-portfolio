import React, { useEffect, useRef } from "react";
import BackgroundDesign from "../Components/BgDesign/BackgroundDesign";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { title: "HTML & CSS", details: ["Semantic markup", "Responsive layouts", "Flexbox, Grid", "Accessible UI"] },
  { title: "JavaScript/TypeSrcipt", details: ["Async programming", "API handling", "Modular patterns", "DOM optimization"] },
  { title: "React", details: ["Hooks", "Components", "Routing", "Performance"] },
  { title: "Express.js", details: ["REST APIs", "Middleware", "Authentication", "Structure"] },
  { title: "MongoDB", details: ["Schema design", "CRUD", "Aggregation", "Indexes"] },
  { title: "Socket.IO", details: ["Real-time messaging", "Events", "Live updates"] },
  { title: "Supabase", details: ["Auth", "Postgres", "Edge functions", "Realtime"] },
  { title: "Neon/Postgres", details: ["Serverless DB", "Branching", "SQL performance"] },
  { title: "Drizzle ORM", details: ["Type-safe SQL", "Schema-first", "Migrations"] },
  { title: "BetterAuth", details: ["Modern auth", "Secure sessions", "Easy integration"] },
  { title: "n8n", details: ["Automation", "Background jobs", "Integrations"] },
  { title: "WATI", details: ["WhatsApp APIs", "Automation", "Workflows"] },
  { title: "Agora", details: ["RTC", "Voice/video calls", "Streaming"] }
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = document.querySelectorAll(".skill-item");

    // Register custom internal scroller
    ScrollTrigger.create({
      id: "skills-scroll",
      trigger: container,
      scroller: container,
    });

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            scroller: container,
            start: "top 95%",
            end: "top 70%",
            scrub: false,
          },
        }
      );
    });
  }, []);



  return (
    <>
      <BackgroundDesign />

      <section className="-mt-52 max-sm:-mt-56 w-full overflow-hidden relative z-50 ">
        <main className="max-w-5xl mx-auto px-4 h-full flex flex-col">

          <h1 className="text-4xl font-orbitronBold tracking-wide mb-10 text-center">
            Skills & Expertise
          </h1>

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="overflow-y-auto no-scrollbar "
            style={{ height: "50vh" }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item flex justify-between items-start py-6 border-b border-gray-300"
              >
                <h3 className="text-lg font-semibold text-[#111] w-48 shrink-0">
                  {skill.title}
                </h3>

                <ul className="text-sm text-[#111] space-y-1">
                  {skill.details.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </main>
      </section>
    </>
  );
};

export default Skills;
