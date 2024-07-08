import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Welcomesection.css'; // Import the CSS file for styling
import Grid from '@mui/material/Grid';
import myImage from '../assests/devanshi.jpeg';
import Divider from '@mui/material/Divider';
import peerlist from "../assests/peerlist.jpg"; // Ensure correct import

const WelcomeSection = () => {
    return (
        <>
            <div className="welcome-section">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8} className='main-content'>
                        <Grid container className='welcome-data-container'>
                            <h1>Hello, I'm <span style={{color:"#f06c5b"}}> Devanshi</span></h1>
                            <h3><span style={{color:"#f06c5b"}}>Data Enthusiast | Excel | SQL | PowerBI </span></h3>
                            <p>
                                "Empowering Insights: Connecting Data with Clarity for Future Challenges"
                            </p>
                            <p>
                                I am passionate about leveraging data to drive strategic decisions and solve complex problems.
                            </p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/devanshi-thakkar-aa2a981b4/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Devanshi024/" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://peerlist.io/devanshi24" target="_blank" rel="noopener noreferrer">
                                    <img src={peerlist} alt="Peerlist" style={{ width: "30px", height: "30px" }} />
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
