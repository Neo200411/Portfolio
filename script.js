
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === '#' + current;
      a.style.opacity = active ? '1' : '0.6';
      a.style.color = active ? 'var(--accent)' : '';
    });
  });

  // --- NEW EFFECTS ---

  // 1. Cursor Expansion on Clickables
  const clickables = document.querySelectorAll('a, .btn, .project-item, .skill-block');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.backgroundColor = 'rgba(200, 255, 0, 0.1)';
      ring.style.mixBlendMode = 'screen';
      cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.backgroundColor = 'transparent';
      ring.style.mixBlendMode = 'normal';
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = `translate(-50%, -50%)`; // Reset magnetic pull
    });
  });

  // 2. Magnetic Buttons
  const magneticElements = document.querySelectorAll('.btn, .nav-logo, .nav-links a');
  magneticElements.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const hx = rect.left + rect.width / 2;
      const hy = rect.top + rect.height / 2;
      const dx = (e.clientX - hx) * 0.3;
      const dy = (e.clientY - hy) * 0.3;
      
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
      // Pull the cursor ring towards the center of the button
      ring.style.transform = `translate(calc(-50% + ${dx*0.5}px), calc(-50% + ${dy*0.5}px))`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

  // 3. 3D Card Hover Tilt
  const tiltCards = document.querySelectorAll('.project-item, .skill-block, .hero-stat');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // 4. Hacker Text Scramble Effect
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const scrambleElements = document.querySelectorAll('.hero-tag, .section-label, .project-highlight');
  
  scrambleElements.forEach(el => {
    const originalText = el.innerText;
    
    el.addEventListener('mouseover', event => {
      // Don't scramble if it has children we don't want to mess up (like icons)
      if(el.children.length > 0 && !el.classList.contains('hero-tag')) return; 

      let iterations = 0;
      const originalString = el.dataset.value || originalText;
      el.dataset.value = originalString; // Store original
      
      clearInterval(el.interval);
      
      el.interval = setInterval(() => {
        event.target.innerText = originalString
          .split("")
          .map((letter, index) => {
            if(index < iterations) {
              return originalString[index];
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iterations >= originalString.length){ 
          clearInterval(el.interval);
        }
        
        iterations += 1 / 3;
      }, 30);
    });
  });
