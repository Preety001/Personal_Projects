@@ .. @@
 import React, { useState } from 'react';

 const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
     const closeMenu = () => setIsMenuOpen(false);

     return (
         <header>
             <nav className="container">
-                <a href="#" className="logo">Preeti</a>
+                <a href="#" className="logo">
+                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
+                        <path d="M12 16h6c2 0 4 1 4 3s-2 3-4 3h-2v6m0-6h4c2 0 4 1 4 3s-2 3-4 3h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                    </svg>
+                    <span>Preeti Singh</span>
+                </a>
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