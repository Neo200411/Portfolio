import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [magneticPos, setMagneticPos] = useState(null);

  useEffect(() => {
    let animationFrameId;
    let rx = 0;
    let ry = 0;
    let mx = 0;
    let my = 0;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      setCursorPos({ x: mx, y: my });

      // Handle magnetic buttons globally based on class or data attribute if we wanted,
      // but in React it's often better to handle magnetic state per-component, or globally 
      // by listening to events on specific elements. For simplicity matching vanilla JS:
      const target = e.target.closest('a, .btn, .project-item, .skill-block, .nav-logo');
      
      if (target) {
        setIsHovering(true);
        if (target.matches('.btn, .nav-logo, .nav-links a')) {
           const rect = target.getBoundingClientRect();
           const hx = rect.left + rect.width / 2;
           const hy = rect.top + rect.height / 2;
           const dx = (mx - hx) * 0.3;
           const dy = (my - hy) * 0.3;
           
           target.style.transform = `translate(${dx}px, ${dy}px)`;
           setMagneticPos({ x: hx + dx * 0.5, y: hy + dy * 0.5 });
        } else {
           setMagneticPos(null);
        }
      } else {
        setIsHovering(false);
        setMagneticPos(null);
        // Reset transforms
        document.querySelectorAll('.btn, .nav-logo, .nav-links a').forEach(el => {
            el.style.transform = 'translate(0px, 0px)';
        });
      }
    };

    const animateRing = () => {
      if (magneticPos) {
        rx += (magneticPos.x - rx) * 0.2;
        ry += (magneticPos.y - ry) * 0.2;
      } else {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
      }
      setRingPos({ x: rx, y: ry });
      animationFrameId = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [magneticPos]);

  return (
    <>
      <div 
        className="cursor" 
        style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`,
            transform: `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`
        }} 
      />
      <div 
        className="cursor-ring" 
        style={{ 
            left: `${ringPos.x}px`, 
            top: `${ringPos.y}px`,
            width: isHovering ? '60px' : '34px',
            height: isHovering ? '60px' : '34px',
            backgroundColor: isHovering ? 'rgba(200, 255, 0, 0.1)' : 'transparent',
            mixBlendMode: isHovering ? 'screen' : 'normal',
            transform: 'translate(-50%, -50%)' // magnetic pull is handled by pos
        }} 
      />
    </>
  );
};

export default Cursor;
