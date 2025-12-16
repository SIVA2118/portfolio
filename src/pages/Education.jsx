import React, { useEffect, useRef } from "react";
import "./Education.css";

import college from "../assets/education/college.png";

export default function Education() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.classList.add("revealed");
  }, []);

  return (
    <section className="education section-card" ref={ref}>
      <h2 className="edu-title">Education</h2>

      <div className="edu-timeline">

        {/* ================= MCA ================= */}
        <div className="edu-card">
          <span className="edu-dot"></span>

          <div className="edu-content">
            <div className="edu-header">
              <img src={college} alt="RVS College" />
              <div>
                <span className="edu-year">2023 – Present</span>
                <h3>MCA — RVS College, Sulur</h3>
              </div>
            </div>

            <div className="edu-body">
              <p>
                Specialized in Web Development, Database Systems, Software
                Engineering and Algorithms.
              </p>

              <div className="edu-image-card">
                <img src={college} alt="RVS Campus" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= BSc ================= */}
        <div className="edu-card">
          <span className="edu-dot"></span>

          <div className="edu-content">
            <div className="edu-header">
              <img src={college} alt="BSc College" />
              <div>
                <span className="edu-year">2019 – 2022</span>
                <h3>BSc Computer Science</h3>
              </div>
            </div>

            <div className="edu-body">
              <p>
                Strong foundation in programming fundamentals, data structures,
                operating systems and problem solving.
              </p>

              <div className="edu-image-card">
                <img src={college} alt="BSc Campus" />
              </div>
            </div>
          </div>
        </div>


{/* ================= BSc ================= */}
        <div className="edu-card">
          <span className="edu-dot"></span>

          <div className="edu-content">
            <div className="edu-header">
              <img src={college} alt="BSc College" />
              <div>
                <span className="edu-year">2019 – 2022</span>
                <h3>BSc Computer Science</h3>
              </div>
            </div>

            <div className="edu-body">
              <p>
                Strong foundation in programming fundamentals, data structures,
                operating systems and problem solving.
              </p>

              <div className="edu-image-card">
                <img src={college} alt="BSc Campus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
