import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <nav className="container">
                <a href="#" className="logo">Preeti</a>
                <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;