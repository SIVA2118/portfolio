import React, { useEffect, useRef } from "react";
import "./Home.css";

export default function Home() {
  const heroRef = useRef();

  useEffect(() => {
    const el = heroRef.current;
    requestAnimationFrame(() => el.classList.add("revealed"));
  }, []);

  return (
    <>
      {/* BACKGROUND BUBBLES */}
      <div className="bg-bubbles">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <section className="home-hero section-card" ref={heroRef}>
        <div className="hero-inner">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1 className="name">
              Hi, I'm <span>Sivakumar</span>
            </h1>

            <p className="tagline">
              MCA Student • Web Developer • React enthusiast — I build modern,
              animated portfolios and apps.
            </p>

            <div className="cta-row">
              <a className="btn primary" href="/my-work">View Work</a>
              <a className="btn ghost" href="/content">Contact</a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-right">
            <div className="image-area">

              {/* Main PNG Image */}
              <img
                src="/images/profile.png"
                alt="Developer Illustration"
                className="hero-image"
              />

              {/* Big Orb */}
              <div className="floating-orb" />

              {/* Small Orbs */}
              <div className="mini-orb orb-1"></div>
              <div className="mini-orb orb-2"></div>

              {/* Floating Tech Icons */}
              <img src="/icons/react.png" className="float-icon react" alt="React" />
              <img src="/icons/node.png" className="float-icon node" alt="Node" />
              <img src="/icons/mongo.png" className="float-icon mongo" alt="MongoDB" />
              <img src="/icons/php.png" className="float-icon php" alt="PHP" />
              <img src="/icons/java.png" className="float-icon java" alt="Java" />
              <img src="/icons/python.png" className="float-icon python" alt="Python" />
              <img src="/icons/c-.png" className="float-icon c" alt="C" />
              <img src="/icons/sql.png" className="float-icon sql" alt="SQL" />
            </div>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="social-links">
            <a href="https://github.com/SIVA2118" target="_blank" rel="noreferrer">
              <img src="/social/github.png" alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/sivakumar-s1821/" target="_blank" rel="noreferrer">
              <img src="/social/linkedin.png" alt="LinkedIn" />
            </a>

            <a href="https://www.instagram.com/mr_attitude_sk_/" target="_blank" rel="noreferrer">
              <img src="/social/instagram.png" alt="Instagram" />
            </a>

            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
              <img src="/social/twitter.png" alt="Twitter" />
            </a>

            <a href="mailto:sivakumarbca2021@gmail.com">
              <img src="/social/gmail.png" alt="Email" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
