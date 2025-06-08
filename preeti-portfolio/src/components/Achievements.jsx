import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="about container">
            <h2>Achievements</h2>
            {/* Note the double curly braces for style objects in JSX */}
            <div className="skills" style={{ flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <p>🏅 <strong>Gold Medalist</strong> at NIT Jalandhar, Batch of 2024.</p>
                <p>🏆 Global Rank of <strong>489</strong> in CodeChef Starters 29.</p>
                <p>🏆 Global Rank of <strong>856</strong> in CodeChef Starters 41.</p>
            </div>
        </section>
    );
};

export default Achievements;