import React, { useEffect, useRef } from 'react';

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
          <div className="hero-tag" ref={tagRef}>
            Full-Stack Developer • ML Enthusiast • Learning Generative AI
          </div>

          <h1 className="hero-name">
            <span className="outline">NEO</span><br/>
            <span>MISHRA</span>
          </h1>

          <p className="hero-desc">
            Computer Science student passionate about building scalable web applications,
            machine learning solutions, and exploring Generative AI technologies.
            Strong foundation in DSA, DBMS, and Operating Systems.
            Currently pursuing B.Tech in Data Science at
            <strong style={{ color: 'var(--text)' }}> Manipal University Jaipur</strong>.
          </p>

          <div className="hero-cta">
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
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stat">
            <div className="hero-stat-num">8<span>.94</span></div>
            <div className="hero-stat-label">CGPA / 10</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">3<span>+</span></div>
            <div className="hero-stat-label">Projects Built</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">AI<span>+</span></div>
            <div className="hero-stat-label">Learning Gen-AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
