import React, { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.classList.add("revealed");
  }, []);

  const skills = [
    { name: "React.js", icon: "/icons/react.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "Node.js", icon: "/icons/node.png" },
    { name: "MongoDB", icon: "/icons/mongo.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "Express", icon: "/icons/express.png" },
    { name: "Git", icon: "/icons/git.png" },
  ];

  return (
    <section className="skills section-card" ref={ref}>
      {/* TITLE */}
      <h2 className="skills-title">Skills</h2>

      {/* GRID */}
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <img src={skill.icon} alt={skill.name} />
            <strong>{skill.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
