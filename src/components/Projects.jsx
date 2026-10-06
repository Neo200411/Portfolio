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
            <div className="project-name">InterviewPrep AI<br/>Mock Platform</div>
            <p className="project-desc">
              Built a sophisticated, AI-driven mock interview platform simulating technical assessments. 
              Integrated Groq (LLaMA 3.3 70B) for context-aware resume analysis from uploaded PDFs, smart question generation, 
              and dynamic follow-up questions. Features timed practice mode, non-revealing AI hints, and 
              detailed evaluation scoring.
            </p>
            <div className="project-stack">
              <span className="stack-tag">React.js</span>
              <span className="stack-tag">Node.js</span>
              <span className="stack-tag">Express.js</span>
              <span className="stack-tag">MongoDB</span>
              <span className="stack-tag">LangChain</span>
              <span className="stack-tag">Groq (LLaMA 3)</span>
            </div>
            <div className="project-metric">AI Resume Parsing · Groq LLaMA 3.3 · Mock Simulation</div>
          </div>
          <div className="project-highlight">AI · Full-Stack</div>
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
            <div className="project-name">DocFlow AI<br/>Multi-Tenant Document Intelligence</div>
            <p className="project-desc">
              Built a multi-tenant document workflow platform with layered RBAC/ABAC access control spanning tenant, 
              project, team, role, and sensitivity levels. Features stage-based review & approval pipelines, document 
              versioning, and audit trails. Powers grounded RAG Q&A over project documents using Docling parsing, 
              Qdrant vector search with reranking, and Groq LLaMA agents for drafting and review.
            </p>
            <div className="project-stack">
              <span className="stack-tag">Python</span>
              <span className="stack-tag">FastAPI</span>
              <span className="stack-tag">PostgreSQL</span>
              <span className="stack-tag">SQLAlchemy</span>
              <span className="stack-tag">Qdrant</span>
              <span className="stack-tag">Docling</span>
              <span className="stack-tag">Groq (LLaMA)</span>
              <span className="stack-tag">React</span>
            </div>
            <div className="project-metric">RAG · RBAC/ABAC · Approval Workflows · Multi-Tenant</div>
          </div>
          <div className="project-highlight">AI · Enterprise</div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
