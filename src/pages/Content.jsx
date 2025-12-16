import React, { useEffect, useRef, useState } from "react";
import "./Content.css";

export default function Content() {
  const ref = useRef(null);

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("revealed");
    }
  }, []);

  const sendMail = () => {
    const from = "sivakumarbca2021@gmail.com";

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${from}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="content-page section-card" ref={ref}>
      <h2 className="content-title">Contact</h2>

      <div className="content-grid">

        {/* COLUMN 2 – EMAIL */}
        <div className="mail-card">
          <h3>📧 Send Email</h3>

          <div className="mail-field">
            <label>From (fixed)</label>
            <input
              type="email"
              value="sivakumarbca2021@gmail.com"
              disabled
            />
          </div>

          <div className="mail-field">
            <label>To</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className="mail-field">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Mail subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mail-field">
            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="send-btn" onClick={sendMail}>
            Send via Gmail
          </button>
        </div>
 {/* COLUMN 1 – CONTACT INFO */}
<div className="contact-info-card">
  <h3>📞 Contact Me</h3>

  {/* 🔥 Animation GIF */}
  <img
    src="/contact/contact.png"
    alt="Contact animation"
    className="contact-gif"
  />
  <div className="contact-anim">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>


        {/* COLUMN 3 – LOCATION */}
        <div className="map-card">
          <h3>📍 My Location</h3>

          <div className="map-frame">
            <iframe
              title="Live Location"
              src="https://www.google.com/maps?q=Tiruppur,%20Tamil%20Nadu&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
