import React, { useEffect, useRef } from "react";
import "./Youtube.css";

export default function Youtube() {
  const ref = useRef();

  useEffect(() => {
    ref.current.classList.add("revealed");
  }, []);

  return (
    <section className="youtube-modern section-card" ref={ref}>
      
      {/* TITLE */}
      <h2 className="youtube-title">YouTube</h2>

      {/* VIDEO CARD */}
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        className="youtube-card"
      >
        {/* Glow */}
        <span className="youtube-glow"></span>

        {/* Thumbnail */}
        <div className="youtube-thumb">
          <span className="play-btn">▶</span>
        </div>

        {/* Info */}
        <div className="youtube-info">
          <h3>Latest Coding Tutorials</h3>
          <p>React • JavaScript • Node.js • Real Projects</p>
        </div>
      </a>

    </section>
  );
}
