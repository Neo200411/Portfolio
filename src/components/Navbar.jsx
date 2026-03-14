import React, { useEffect, useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <button 
          onClick={toggleTheme} 
          className="btn" 
          style={{ 
            background: 'transparent', 
            border: 'none', 
            padding: '0 10px',
            color: 'var(--text)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
        <div className="nav-available">
          <div className="nav-dot"></div>
          Available for work
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
