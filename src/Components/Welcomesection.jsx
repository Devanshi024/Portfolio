import React from 'react';
import './Welcomesection.css'; // Import the CSS file for styling
import Grid from '@mui/material/Grid';
import myImage from '../assests/devanshi.jpeg';
import Divider from '@mui/material/Divider';
import peerlist from "../assests/peerlist.jpg"; // Ensure correct import
import resume from "../assests/DA_DEVANSHI_THAKKAR_RESUME.pdf"
import resume_icon from "../assests/CV icon.png"
import linkedin from "../assests/linkedin.png"
import { FaGithub } from 'react-icons/fa';

const WelcomeSection = () => {
    return (
        <>
            <div className="welcome-section">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8} className='main-content'>
                        <Grid container className='welcome-data-container'>
                            <h1>Hello, I'm <span style={{color:"#f06c5b"}}> Devanshi</span></h1>
                            <h3><span style={{color:"#f06c5b"}}>Data Enthusiast | Excel | SQL | PowerBI | 4 Star HackerRank</span></h3>
                            <p>
                                "Empowering Insights: Connecting Data with Clarity for Future Challenges"
                            </p>
                            <p>
                                I am passionate about leveraging data to drive strategic decisions and solve complex problems.
                            </p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/devanshi-thakkar-aa2a981b4/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="CV" style={{ width: "40px", height: "40px" }} />
                                </a>
                                <a href="https://github.com/Devanshi024/" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} className="contact-icon" />
                                </a>
                                <a href="https://peerlist.io/devanshi24" target="_blank" rel="noopener noreferrer">
                                    <img src={peerlist} alt="Peerlist" style={{ width: "35px", height: "35px" }} />
                                </a>
                                <a href={resume} target="_blank" rel="noopener noreferrer">
                                    <img src={resume_icon} alt="CV" style={{ width: "40px", height: "40px" }} />
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="profile-picture">
                            <img src={myImage} alt="Devanshi" />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Divider className="custom-divider" />
        </>
    );
}

export default WelcomeSection;
