import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import './Navbar.css'; // Import Navbar CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close navbar on mobile after click
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => scrollTo('welcome')}>
                        Home
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => scrollTo('projects')}>
                        Projects
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => scrollTo('certificates')}>
                        Certificates
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => scrollTo('skills')}>
                        Skills
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={() => scrollTo('contact')}>
                        Contact Us
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
