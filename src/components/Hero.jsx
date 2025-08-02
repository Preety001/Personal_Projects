import React from 'react';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-greeting">
                        <span className="wave">👋</span>
                        <span>Hello, I'm</span>
                    </div>
                    <h1>
                        <span className="name-highlight">Preeti Singh</span>
                    </h1>
                    <p className="hero-title">Software Development Engineer</p>
                    <p className="hero-company">@ Amazon</p>
                    <p className="hero-description">
                        Building scalable solutions and solving complex problems with modern technologies. 
                        Passionate about cloud infrastructure, system design, and competitive programming.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">2024</span>
                            <span className="stat-label">Gold Medalist</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">489</span>
                            <span className="stat-label">Global Rank</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">AWS</span>
                            <span className="stat-label">Cloud Expert</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-card">
                        <div className="card-header">
                            <div className="card-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className="card-title">profile.json</span>
                        </div>
                        <div className="card-content">
                            <div className="code-line">
                                <span className="code-key">"name"</span>: 
                                <span className="code-value">"Preeti Singh"</span>,
                            </div>
                            <div className="code-line">
                                <span className="code-key">"role"</span>: 
                                <span className="code-value">"SDE @ Amazon"</span>,
                            </div>
                            <div className="code-line">
                                <span className="code-key">"skills"</span>: [
                            </div>
                            <div className="code-line indent">
                                <span className="code-value">"Java"</span>,
                                <span className="code-value">"AWS"</span>,
                                <span className="code-value">"React"</span>
                            </div>
                            <div className="code-line">],</div>
                            <div className="code-line">
                                <span className="code-key">"status"</span>: 
                                <span className="code-value">"Available"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-actions">
                <a href="#projects" className="cta-primary">View My Work</a>
                <a href="#contact" className="cta-secondary">Get In Touch</a>
            </div>
        </section>
    );
};

export default Hero;