import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => { 
        if (window.scrollY >= s.offsetTop - 200) current = s.id; 
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#hero" className="nav-logo">N<span>.</span>M</a>
      <ul className="nav-links">
        <li>
          <a href="#about" style={{
            opacity: activeSection === 'about' ? '1' : '0.6',
            color: activeSection === 'about' ? 'var(--accent)' : ''
          }}>About</a>
        </li>
        <li>
          <a href="#skills" style={{
            opacity: activeSection === 'skills' ? '1' : '0.6',
            color: activeSection === 'skills' ? 'var(--accent)' : ''
          }}>Skills</a>
        </li>
        <li>
          <a href="#projects" style={{
            opacity: activeSection === 'projects' ? '1' : '0.6',
            color: activeSection === 'projects' ? 'var(--accent)' : ''
          }}>Projects</a>
        </li>
        <li>
          <a href="#contact" style={{
            opacity: activeSection === 'contact' ? '1' : '0.6',
            color: activeSection === 'contact' ? 'var(--accent)' : ''
          }}>Contact</a>
        </li>
      </ul>
      <div className="nav-available">
        <div className="nav-dot"></div>
        Available for work
      </div>
    </nav>
  );
};

export default Navbar;
