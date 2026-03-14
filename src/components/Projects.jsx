import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <h2 className="section-title">Selected<br/>Work<span>.</span></h2>
      <div className="projects-list">
        
        <motion.div 
          className="project-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-num">01</div>
          <div>
            <div className="project-name">E-Commerce Sales Prediction<br/>& Customer Segmentation</div>
            <p className="project-desc">
              Built an end-to-end ML pipeline to predict e-commerce sales using ensemble techniques. 
              Performed data preprocessing, feature engineering, and implemented Random Forest & XGBoost models 
              with hyperparameter tuning. Applied K-Means clustering for customer segmentation to derive 
              actionable business insights.
            </p>
            <div className="project-stack">
              <span className="stack-tag">Python</span>
              <span className="stack-tag">Machine Learning</span>
              <span className="stack-tag">Random Forest</span>
              <span className="stack-tag">XGBoost</span>
              <span className="stack-tag">Scikit-learn</span>
              <span className="stack-tag">K-Means</span>
            </div>
            <div className="project-metric">R² Score: 0.75 — Evaluated with RMSE & MAE</div>
          </div>
          <div className="project-highlight">ML · Data</div>
        </motion.div>

        <motion.div 
          className="project-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-num">02</div>
          <div>
            <div className="project-name">AI-Powered Resume Builder<br/>Web Application</div>
            <p className="project-desc">
              Full-stack MERN application enabling users to create, edit, and manage professional resumes. 
              Integrated AI/NLP-based content suggestions for summaries, skills, and project descriptions. 
              Built secure RESTful APIs for authentication and designed a responsive React.js interface 
              with real-time preview.
            </p>
            <div className="project-stack">
              <span className="stack-tag">MongoDB</span>
              <span className="stack-tag">Express.js</span>
              <span className="stack-tag">React.js</span>
              <span className="stack-tag">Node.js</span>
              <span className="stack-tag">REST APIs</span>
              <span className="stack-tag">AI/NLP</span>
            </div>
            <div className="project-metric">MERN Stack · Full-Stack · AI Integration</div>
          </div>
          <div className="project-highlight">MERN · AI</div>
        </motion.div>

        <motion.div 
          className="project-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-num">03</div>
          <div>
            <div className="project-name">Hostel-Based Peer-to-Peer<br/>Marketplace Platform</div>
            <p className="project-desc">
              A marketplace for hostel students to act as both buyers and sellers using a unified account. 
              Designed RESTful APIs and MongoDB schemas for users, products, and orders. Implemented product 
              listing, hostel-based filtering, order placement and tracking, plus AI-assisted image-based product listing.
            </p>
            <div className="project-stack">
              <span className="stack-tag">JavaScript</span>
              <span className="stack-tag">Node.js</span>
              <span className="stack-tag">Express.js</span>
              <span className="stack-tag">MongoDB</span>
              <span className="stack-tag">React.js</span>
            </div>
            <div className="project-metric">AI Image Recognition · P2P Commerce</div>
          </div>
          <div className="project-highlight">P2P · Commerce</div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
