import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setIsScrolledUp(true);
            } else {
                setIsScrolledUp(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${isScrolledUp ? 'scrolled-up' : ''}`}>
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
