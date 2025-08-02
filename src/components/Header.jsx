import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            <header>
                <nav className="container">
                    <a href="#" className="logo">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <path d="M10 13h5c1.5 0 3 0.8 3 2.5s-1.5 2.5-3 2.5h-2v5m0-5h3c1.5 0 3 0.8 3 2.5s-1.5 2.5-3 2.5h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    
                    <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>

                    <div className="header-actions">
                        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12h18m-9-9v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <button className="hamburger" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-overlay" onClick={toggleSidebar}></div>
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <h3>Quick Info</h3>
                        <button className="sidebar-close" onClick={toggleSidebar}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div className="sidebar-section">
                        <h4>Current Role</h4>
                        <p>Software Development Engineer at Amazon</p>
                        <span className="status-badge">Available for opportunities</span>
                    </div>

                    <div className="sidebar-section">
                        <h4>Location</h4>
                        <p>📍 India</p>
                    </div>

                    <div className="sidebar-section">
                        <h4>Education</h4>
                        <p>🎓 NIT Jalandhar (2024)</p>
                        <p>Gold Medalist</p>
                    </div>

                    <div className="sidebar-section">
                        <h4>Top Skills</h4>
                        <div className="sidebar-skills">
                            <span>Java</span>
                            <span>AWS</span>
                            <span>React</span>
                            <span>System Design</span>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h4>Quick Links</h4>
                        <div className="quick-links">
                            <a href="mailto:singhpreety1008@gmail.com">📧 Email</a>
                            <a href="https://www.linkedin.com/in/preety-singh-327650202/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                            <a href="https://github.com/Preety001" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h4>Recent Achievement</h4>
                        <p>🏆 Global Rank 489 in CodeChef Starters 29</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;