import React, { useRef } from 'react';
import { useReveal } from './About'; // Reuse our reveal logic

const Skills = () => {
  const revealRef = useRef(null);
  useReveal([revealRef]);

  const skillsData = [
    { num: '01', title: 'Languages', tags: ['C++', 'C', 'Python', 'JavaScript'] },
    { num: '02', title: 'Frontend', tags: ['React.js', 'HTML', 'CSS', 'JavaScript'] },
    { num: '03', title: 'Backend', tags: ['Node.js', 'Express.js', 'REST APIs'] },
    { num: '04', title: 'Databases', tags: ['MongoDB', 'NoSQL'] },
    { num: '05', title: 'AI / ML', tags: ['Scikit-learn', 'Random Forest', 'XGBoost', 'K-Means', 'NLP', 'Generative AI', 'Transformers', 'LLMs', 'HuggingFace'] },
    { num: '06', title: 'Core CS & Tools', tags: ['DSA', 'DBMS', 'OS', 'Networks', 'Git', 'GitHub', 'VS Code'] }
  ];

  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <h2 className="section-title">Tech<br/>Stack<span>.</span></h2>
      <div className="skills-grid reveal" ref={revealRef}>
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-block">
            <div className="skill-block-num">{skill.num}</div>
            <div className="skill-block-title">{skill.title}</div>
            <div className="skill-tags">
              {skill.tags.map((tag, tIndex) => (
                <span key={tIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
