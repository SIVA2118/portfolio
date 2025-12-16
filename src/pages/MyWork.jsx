import React, { useEffect, useRef } from "react";
import "./MyWork.css";

const projects = [
  {
    title: "CrackersWorld",
    desc: "E-commerce demo for festival products",
    tags: ["React", "Node", "MongoDB"],
    link: "https://example.com/crackersworld",
    image: "/images/profile.png",
  },
  {
    title: "Pac-Man",
    desc: "Classic Pac-Man game recreated using JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/pacman",
    image: "/images/pacman.png",
  },
  {
    title: "College Canteen",
    desc: "Full-stack canteen ordering application",
    tags: ["React", "Node", "MongoDB"],
    link: "https://example.com/canteen",
    image: "/images/canteen.png",
  },
  {
    title: "Library Management",
    desc: "College library system with issue & return tracking",
    tags: ["Node", "MongoDB", "EJS"],
    link: "https://example.com/library",
    image: "/images/library.png",
  },
  {
    title: "Vehicle Rental System",
    desc: "Online vehicle booking with admin & user roles",
    tags: ["React", "Node", "MongoDB"],
    link: "https://example.com/vehicle",
    image: "/images/vehicle.png",
  },
  {
    title: "Complaint Register App",
    desc: "Student & faculty complaint management system",
    tags: ["React", "JWT", "MongoDB"],
    link: "https://example.com/complaint",
    image: "/images/complaint.png",
  },
];


export default function MyWork() {
  const ref = useRef();

  useEffect(() => {
    ref.current.classList.add("revealed");
  }, []);

  return (
    <section className="mywork section-card" ref={ref}>
      <h2 className="mywork-title">Projects</h2>

      <div className="mywork-grid">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="proj-card"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Chain Icon */}
            <span className="link-icon">🔗</span>

            <div className="proj-thumb" />
            <h3>{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>

            <div className="tags">
              {p.tags.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
