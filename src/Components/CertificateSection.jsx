import React from 'react';
import './CertificateSection.css';
import Certificate from "../assests/certificate.png";
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

const certificates = [
    { title: 'Power BI for Beginners', icon: Certificate, link: '#' },  // Replace '#' with actual link
    { title: 'Excel A-2-Z', icon: Certificate, link: '#' },  // Replace '#' with actual link
    { title: 'Azure Fundamentals (AZ-900)', icon: Certificate, link: '#' },  // Replace '#' with actual link
    { title: 'SQL (Basic)', icon: Certificate, link: '#' },  // Replace '#' with actual link
];

const CertificatesSection = () => {
    return (
        <>
            <div className="certificates-section">
                <h2>Certificates</h2>
                <Grid container spacing={3} className="certificates-grid">
                    {certificates.map((certificate, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <a href={certificate.link} className="certificate-link">
                                <div className="certificate-card">
                                    <img src={certificate.icon} alt={certificate.title} className="certificate-icon" />
                                    <h3 className="certificate-title">{certificate.title}</h3>
                                </div>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Divider className="custom-divider" />
        </>
    );
}

export default CertificatesSection;
