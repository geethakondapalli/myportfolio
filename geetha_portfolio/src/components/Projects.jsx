import React, { useState } from 'react';
import '../css/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      id: 1,
      title: " Order Management - Home Based Kitchen",
      description: "A comprehensive full-stack application for restaurant menu management and online ordering with scheduled menus, combo deals, and payment integration.",
      longDescription: "Built a feature-rich ordering platform that enables customers to browse scheduled menus, create custom orders, and complete payments online or offline. The system includes menu scheduling, combo deal management, customer information collection, and pickup/delivery options.",
      image: "/images/demo_cateroncloud_thumbnail.png",
      technologies: ["React", "FastAPI", "Postgres", "Stripe API"],
      features: [
        "Scheduled menu management with date-based availability",
        "Combo deal creation with multiple items",
        "Real-time order summary and cart management",
        "Customer information collection and validation",
        "Pickup and delivery options with address management",
        "Online and offline payment processing",
        "Responsive design for mobile and desktop"
      ],
      github: "https://github.com/geethakondapalli/caterOnCloud",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Letter of Credit Lifecycle on Hyperledger Fabric",
      description: "Built a blockchain-based LC system on Hyperledger Fabric connecting banks, shipping companies, and customs on a shared ledger for secure trade finance.",
      longDescription: "Developed a decentralized Letter of Credit (LC) system using Hyperledger Fabric to streamline trade finance processes. The application connects multiple stakeholders including banks, shipping companies, and customs authorities on a shared ledger, ensuring transparency and security in transactions.",
      image: "/images/LC_flow.png",
      technologies: [ "Hyperledger Fabric", "Smart Contracts/Chaincode"],
      features: [
        "Multi-organization network setup",
        "Smart contract development for LC processes",
        "Handling LC applications and approvals",
        "Document submission",
        "Verification Workflows",
      ],
      github: "https://github.com/geethakondapalli/LConFabric",
      category: "Blockchain"
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary"
                    onClick={() => openModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <span className="project-category">{selectedProject.category}</span>
                <h3>{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="project-tech">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;