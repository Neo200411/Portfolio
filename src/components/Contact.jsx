import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-label">Contact</div>
      <div className="contact-inner">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-big">Let's<br/>Build<br/><span>Together</span></h2>
          <p className="contact-sub">
            Open to internships, collaborations, and interesting problems.<br/>
            Drop a message or reach out directly.
          </p>
          <div className="contact-links">
            <a href="mailto:kneom1234@gmail.com" className="contact-link-item">
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">kneom1234@gmail.com</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
            <a href="tel:+916387766856" className="contact-link-item">
              <div>
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-value">+91 63877 66856</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
            <a href="https://www.linkedin.com/in/neo-mishra-1372a0291/" target="_blank" rel="noreferrer" className="contact-link-item">
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">neo-mishra</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
            <a href="https://github.com/Neo200411" target="_blank" rel="noreferrer" className="contact-link-item">
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">Neo200411</div>
              </div>
              <div className="contact-link-arrow">↗</div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
