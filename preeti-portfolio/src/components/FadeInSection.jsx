import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    // Stop observing after it's visible
                    observer.unobserve(entry.target);
                }
            });
        });
        
        const { current } = domRef;
        observer.observe(current);
        
        // Cleanup observer on unmount
        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            className={`fade-in ${isVisible ? 'visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;