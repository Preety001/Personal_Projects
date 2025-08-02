@@ .. @@
 import React from 'react';

 const Hero = () => {
     return (
         <section className="hero container">
-            <h1>Hi, I'm Preeti</h1>
-            <p className="subtitle">A Software Development Engineer at Amazon</p>
+            <div className="hero-content">
+                <div className="hero-badge">
+                    <span>👋 Hello, I'm</span>
+                </div>
+                <h1>Preeti Singh</h1>
+                <p className="subtitle">Software Development Engineer at Amazon</p>
+                <p className="hero-description">
+                    Passionate about building scalable solutions and solving complex problems with modern technologies
+                </p>
+            </div>
             <a href="#projects" className="cta-button">View My Work</a>
         </section>
     );
 };

 export default Hero;