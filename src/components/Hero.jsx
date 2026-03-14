import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

// Extracted scramble function so it can be reused
export const useScramble = (ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalText = el.innerText;
    
    const handleMouseOver = (event) => {
      if(el.children.length > 0 && !el.classList.contains('hero-tag')) return; 

      let iterations = 0;
      const originalString = el.dataset.value || originalText;
      el.dataset.value = originalString;
      
      clearInterval(el.interval);
      
      el.interval = setInterval(() => {
        event.target.innerText = originalString
          .split("")
          .map((letter, index) => {
            if(index < iterations) return originalString[index];
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iterations >= originalString.length){ 
          clearInterval(el.interval);
        }
        iterations += 1 / 3;
      }, 30);
    };

    el.addEventListener('mouseover', handleMouseOver);
    return () => el.removeEventListener('mouseover', handleMouseOver);
  }, [ref]);
};

const Hero = () => {
  const tagRef = useRef(null);
  useScramble(tagRef);

  return (
    <section id="hero">
      <div className="hero-bg-text">NEO</div>
      <div className="hero-grid">
        <div>
          <motion.div 
            className="hero-tag" ref={tagRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Full-Stack Developer • ML Enthusiast • Learning Generative AI
          </motion.div>

          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <span className="outline">NEO</span><br/>
            <span>MISHRA</span>
          </motion.h1>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            Computer Science student passionate about building scalable web applications,
            machine learning solutions, and exploring Generative AI technologies.
            Strong foundation in DSA, DBMS, and Operating Systems.
            Currently pursuing B.Tech in Data Science at
            <strong style={{ color: 'var(--text)' }}> Manipal University Jaipur</strong>.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Work →
            </a>
            <a href="/src/assets/Neo_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">
              Resume →
            </a>
            <a href="https://github.com/Neo200411" target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub →
            </a>
            <a href="https://www.linkedin.com/in/neo-mishra-1372a0291/" target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn →
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="hero-stat">
            <div className="hero-stat-num"><AnimatedCounter end={8} suffix="" /><span><AnimatedCounter end={94} prefix="." duration={2500} /></span></div>
            <div className="hero-stat-label">CGPA / 10</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num"><AnimatedCounter end={3} /><span>+</span></div>
            <div className="hero-stat-label">Projects Built</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">AI<span>+</span></div>
            <div className="hero-stat-label">Learning Gen-AI</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
