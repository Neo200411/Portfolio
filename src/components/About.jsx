import React, { useEffect, useRef } from 'react';

export const useReveal = (refs) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        }
      });
    }, { threshold: 0.1 });

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs]);
};

const About = () => {
  const revealRef1 = useRef(null);
  const revealRef2 = useRef(null);
  useReveal([revealRef1, revealRef2]);

  return (
    <section id="about">
      <div className="section-label">About</div>
      <h2 className="section-title">The<br/>Developer<span>.</span></h2>
      <div className="about-grid">
        <div className="about-text reveal" ref={revealRef1}>
          <p>
            I'm <strong>Neo Mishra</strong> — a full-stack developer and aspiring engineer with a passion 
            for building systems that scale. Currently pursuing a B.Tech in Data Science at Manipal 
            University Jaipur, I blend software engineering fundamentals with modern web and ML tooling.
          </p>
          <p>
            My work spans from building <strong>ML-powered prediction models</strong> for e-commerce, 
            to architecting full-stack MERN applications with AI-driven features. I care deeply about 
            clean code, good architecture, and shipping things that actually work.
          </p>
          <div className="about-highlight">
            "Interested in developing scalable systems and solving real-world problems through clean, efficient code."
          </div>
          <p>
            Beyond coding, I've led national-level events as <strong>IIC Event Coordinator</strong> with 250+ 
            participants, and directed an editorial team — so I understand both building products and leading teams.
          </p>
        </div>
        
        <div className="reveal" ref={revealRef2}>
          <div className="about-details">
            <div className="detail-row">
              <span className="detail-key">Status</span>
              <span className="detail-val" style={{ color: 'var(--accent)' }}>● Available</span>
            </div>
            <div className="detail-row"><span className="detail-key">Location</span><span className="detail-val">India</span></div>
            <div className="detail-row"><span className="detail-key">Education</span><span className="detail-val">B.Tech Data Science<br/>Manipal Univ. Jaipur</span></div>
            <div className="detail-row"><span className="detail-key">Batch</span><span className="detail-val">2023 — 2027</span></div>
            <div className="detail-row"><span className="detail-key">CGPA</span><span className="detail-val" style={{ color: 'var(--accent)' }}>8.94 / 10</span></div>
            <div className="detail-row"><span className="detail-key">Phone</span><span className="detail-val">+91 63877 66856</span></div>
            <div className="detail-row"><span className="detail-key">Email</span><span className="detail-val"><a href="mailto:kneom1234@gmail.com">kneom1234@gmail.com</a></span></div>
            <div className="detail-row">
              <span className="detail-key">LinkedIn</span>
              <span className="detail-val"><a href="https://www.linkedin.com/in/neo-mishra-1372a0291/" target="_blank" rel="noreferrer">View Profile →</a></span>
            </div>
            <div className="detail-row">
              <span className="detail-key">GitHub</span>
              <span className="detail-val"><a href="https://github.com/Neo200411" target="_blank" rel="noreferrer">View Profile →</a></span>
            </div>
          </div>
          
          <div className="about-awards">
            <div className="award-title">// Certifications & Honors</div>
            <div className="award-item">NPTEL — Object-Oriented Programming using Java</div>
            <div className="award-item">NPTEL — Operating Systems</div>
            <div className="award-item">Dean's List Award — Academic Excellence</div>
            <div className="award-item">IIC Event Coordinator — 250+ national participants</div>
            <div className="award-item">Director, Editorial Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
