import React from 'react';
import WelcomeSection from './Components/Welcomesection';
import ProjectsSection from './Components/ProjectSection';
import CertificatesSection from './Components/CertificateSection';
import SkillsSection from './Components/SkillsSection';
import ContactUs from './Components/Contactus';
import Navbar from './Components/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css'; // Example import for global styles

function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="welcome">
                <WelcomeSection />
            </section>
            <section id="projects">
                <ProjectsSection />
            </section>
            <section id="certificates">
                <CertificatesSection />
            </section>
            <section id="skills">
                <SkillsSection />
            </section>
            <section id="contact">
                <ContactUs />
            </section>
        </div>
    );
}

export default App;
