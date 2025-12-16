import React, { useEffect, useRef } from "react";
import "./About.css";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-timeline section-card" ref={ref}>
      {/* HEADER */}
      <div className="about-header">
        <img src={profileImg} alt="Sivakumar" />
        <h2>My Journey</h2>
        <p>MCA Student • Web Developer • UI Enthusiast</p>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="content">
            <h4>Started Programming</h4>
            <p>
              Learned fundamentals of programming, logic building, and problem
              solving using C, Java, and Python.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="content">
            <h4>Web Development</h4>
            <p>
              Built responsive websites using HTML, CSS, JavaScript and explored
              modern UI & animations.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="content">
            <h4>React & Backend</h4>
            <p>
              Developed full-stack applications using React, Node.js and MongoDB
              with authentication and APIs.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="content">
            <h4>Present</h4>
            <p>
              MCA student at RVS College, Sulur — open for freelance and full-time
              opportunities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
