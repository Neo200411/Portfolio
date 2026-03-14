import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {

  const skillsData = [
    { num: '01', title: 'Languages', tags: ['C++', 'C', 'Python', 'JavaScript'] },
    { num: '02', title: 'Frontend', tags: ['React.js', 'HTML', 'CSS', 'JavaScript'] },
    { num: '03', title: 'Backend', tags: ['Node.js', 'Express.js', 'REST APIs'] },
    { num: '04', title: 'Databases', tags: ['MongoDB', 'NoSQL'] },
    { num: '05', title: 'AI / ML', tags: ['Scikit-learn', 'Random Forest', 'XGBoost', 'K-Means', 'NLP', 'Generative AI', 'Transformers', 'LLMs', 'HuggingFace'] },
    { num: '06', title: 'Core CS & Tools', tags: ['DSA', 'DBMS', 'OS', 'Networks', 'Git', 'GitHub', 'VS Code'] }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <h2 className="section-title">Tech<br/>Stack<span>.</span></h2>
      <motion.div 
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div variants={item} key={index} className="skill-block">
            <div className="skill-block-num">{skill.num}</div>
            <div className="skill-block-title">{skill.title}</div>
            <div className="skill-tags">
              {skill.tags.map((tag, tIndex) => (
                <span key={tIndex} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
