import React, { useEffect, useState } from "react";
import "./Service.css";

export default function Service() {
  const services = [
    { title: "UI / UX Design", icon: "🎨" },
    { title: "Full-stack Development", icon: "💻" },
    { title: "2D & 3D Design", icon: "🧊" },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Auto step animation
  useEffect(() => {
    if (activeStep <= services.length) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [activeStep, services.length]);

  return (
    <section className="service section-card">

      {/* TITLE */}
      <h2 className="service-title">Services</h2>

      {/* STEP LINE + DOTS */}
      <div className="service-steps">
        <div
          className="step-progress"
          style={{
            width:
              activeStep <= 1
                ? "0%"
                : `${((activeStep - 1) / (services.length - 1)) * 65}%`,
          }}
        />

        {services.map((_, i) => (
          <span
            key={i}
            className={`step-dot ${activeStep > i ? "active" : ""}`}
          />
        ))}
      </div>

      {/* SERVICE CARDS */}
      <div className="service-grid">
        {services.map((service, i) => (
          <div
            key={i}
            className={`service-card ${activeStep > i ? "show" : ""}`}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}
