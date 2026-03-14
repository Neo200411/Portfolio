import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, decimals = 0, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // Use IntersectionObserver to trigger when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Animate the count once triggered
  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationId;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(easedProgress * end);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [hasStarted, end, duration]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
