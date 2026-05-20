import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <h2 className="section-title">The<br/>Developer<span>.</span></h2>
      <div className="about-grid">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I am a <strong>Data Science undergraduate</strong> at <strong>Manipal University Jaipur</strong> with 
            a keen interest in Software Development, AI/ML, and Generative AI.
          </p>
          <p>
            I am experienced in building academic and personal projects using <strong>Python, JavaScript, React, Node.js</strong>, 
            and machine learning libraries, built with the assistance of modern AI tools and APIs.
          </p>
          <div className="about-highlight">
            "Looking for internship opportunities to gain hands-on industry experience and grow as a developer."
          </div>
          <p>
            Currently learning backend development, full-stack application development, and GenAI 
            concepts such as <strong>RAG pipelines, prompt engineering, and LLM integration</strong>.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
