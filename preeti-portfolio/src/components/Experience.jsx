import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="projects container">
            <h2>Experience</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Software Development Engineer</h3>
                    <p><strong>Amazon | Aug 2024 - Present</strong></p>
                    <p>Working on AWS infrastructure setup (VPC, endpoints, DNS) using TypeScript, automating cloud processes, and developing a new payment method for an EU launch.</p>
                </div>
                <div className="project-card">
                    <h3>Software Developer Intern</h3>
                    <p><strong>Amazon | May 2023 - July 2023</strong></p>
                    <p>Redesigned a data partitioning strategy for a high-volume data stream. This optimization reduced processing delays and significantly improved overall system performance.</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;