import React from 'react';
import './CertificateSection.css';
import Certificate from "../assests/certificate.png";
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

const certificates = [
    { title: 'Power BI for Beginners', icon: Certificate, link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjg3NzcwMF8xNzIwMzMxMDY5LnBuZyIsInVzZXJuYW1lIjoiRGV2YW5zaGkgVGhha2thciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4211%2FPower-BI-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1339149328215579194&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVNzYwKYvKyQgz9E4CAM05iRElAAAA' },  // Replace '#' with actual link
    { title: 'Excel A-2-Z', icon: Certificate, link: 'https://www.jobaajlearnings.com/certificate?file=certificate-100008-11-0.jpeg' },  // Replace '#' with actual link
    { title: 'Azure Fundamentals (AZ-900)', icon: Certificate, link: 'https://learn.microsoft.com/en-us/users/57765680/credentials/af2c7c3d12b71fe3' },  // Replace '#' with actual link
    { title: 'SQL (Basic)', icon: Certificate, link: 'https://www.hackerrank.com/certificates/4a37c99e0ec8' },  // Replace '#' with actual link
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
