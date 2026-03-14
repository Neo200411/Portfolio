import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Use refs to track position without triggering re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const magneticPos = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Instantly update the inner dot cursor via direct DOM manipulation
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mousePos.current.x}px`;
        cursorRef.current.style.top = `${mousePos.current.y}px`;
      }

      const target = e.target.closest('a, .btn, .project-item, .skill-block, .nav-logo');
      
      if (target) {
        setIsHovering(true);
        if (target.matches('.btn, .nav-logo, .nav-links a')) {
           const rect = target.getBoundingClientRect();
           const hx = rect.left + rect.width / 2;
           const hy = rect.top + rect.height / 2;
           const dx = (mousePos.current.x - hx) * 0.3;
           const dy = (mousePos.current.y - hy) * 0.3;
           
           target.style.transform = `translate(${dx}px, ${dy}px)`;
           magneticPos.current = { x: hx + dx * 0.5, y: hy + dy * 0.5 };
        } else {
           magneticPos.current = null;
        }
      } else {
        setIsHovering(false);
        magneticPos.current = null;
        document.querySelectorAll('.btn, .nav-logo, .nav-links a').forEach(el => {
            el.style.transform = 'translate(0px, 0px)';
        });
      }
    };

    const animateRing = () => {
      let rx = ringPos.current.x;
      let ry = ringPos.current.y;
      
      if (magneticPos.current) {
        rx += (magneticPos.current.x - rx) * 0.2;
        ry += (magneticPos.current.y - ry) * 0.2;
      } else {
        rx += (mousePos.current.x - rx) * 0.12;
        ry += (mousePos.current.y - ry) * 0.12;
      }
      
      ringPos.current = { x: rx, y: ry };
      
      // Update DOM directly for the ring
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      
      animationFrameId = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="cursor" 
        style={{ 
            transform: `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`
        }} 
      />
      <div 
        ref={ringRef}
        className="cursor-ring" 
        style={{ 
            width: isHovering ? '60px' : '34px',
            height: isHovering ? '60px' : '34px',
            backgroundColor: isHovering ? 'rgba(200, 255, 0, 0.1)' : 'transparent',
            mixBlendMode: isHovering ? 'screen' : 'normal',
            transform: 'translate(-50%, -50%)'
        }} 
      />
    </>
  );
};

export default Cursor;
