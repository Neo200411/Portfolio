import React from 'react';

const Marquee = () => {
  const items = [
    "React.js", "Node.js", "Python", "MongoDB", "Machine Learning",
    "REST APIs", "Express.js", "C++", "Data Science", "Full-Stack"
  ];

  // Duplicate items to ensure smooth infinite scrolling
  const displayItems = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {displayItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
