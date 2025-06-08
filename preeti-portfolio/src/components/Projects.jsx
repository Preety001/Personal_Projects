import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects container">
            <h2>My Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x250/0D1117/00f2ea?text=NAV-IC+Project" alt="NAV-IC Project" />
                    <h3>NAV-IC: ISRO Funded Project</h3>
                    <p>A real-time asset tracking application utilizing a hardware location device from ISRO. Integrated Bhuvan Maps to plot coordinates and deployed a control server to handle up to 200 devices.</p>
                    <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>
                <div className="project-card">
                    <img src="https://via.placeholder.com/400x250/0D1117/00f2ea?text=Job+Tracker+App" alt="Job Tracker App" />
                    <h3>Job Application Tracker</h3>
                    <p>A full-stack application to streamline and monitor job applications. Features user-friendly data visualization with integrated bar charts and tables to easily track statuses.</p>
                    <div className="project-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;