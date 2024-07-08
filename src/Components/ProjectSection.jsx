import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProjectSection.css'; // Import the CSS file for styling
import { Grid } from '@mui/material';
import HR_Cover_Page from "../assests/HR Cover page.webp"
import Pizza_Sales_Cover_Page from "../assests/Pizza_Sales cover page.jpg"
import SuperStore_Cover_Page from "../assests/Super store cover page.png"
import Telecom_Cover_page from "../assests/Telecom Cover Page.webp"
import Divider from '@mui/material/Divider';

const projects = [
    {
        title: 'Telecom Customer Churn Analysis',
        description: 'Analyzed telecommunications dataset to reduce churn rate by 14%, using Excel for data cleaning, EDA, and visualization.',
        image: Telecom_Cover_page,
        githubLink: 'https://github.com/your-profile/telecom-churn-analysis',
        readMoreLink: 'https://drive.google.com/drive/folders/1h31Ut1u6kFYSP1Os-HTd-cxW-RE5wEdA?usp=drive_link',
    },
    {
        title: 'Adecco HR Analytics',
        description: 'Conducted HR analytics for Adecco India, revealing a 16% attrition rate and identifying key factors impacting attrition using Excel.',
        image: HR_Cover_Page,
        githubLink: 'https://github.com/your-profile/adecco-hr-analytics',
        readMoreLink: 'https://drive.google.com/drive/folders/14a3lztNPGgqIl1nWsIDepQLKzcXGv-iP?usp=drive_link',
    },
    {
        title: 'Pizza Sales Analysis',
        description: 'Utilized SQL for data analytics to optimize inventory management and enhance revenue and customer satisfaction in pizza sales.',
        image: Pizza_Sales_Cover_Page,
        githubLink: 'https://github.com/your-profile/pizza-sales-analysis',
        readMoreLink: 'https://drive.google.com/drive/folders/1-MsqJclYOmLjhWFCG-l3gTog89329r6E?usp=sharing',
    },
    {
        title: 'Global Store Analysis',
        description: 'Conducted global store analysis, focusing on sales aggregation by quarter and detailed regional/category insights to drive strategic decisions.',
        image: SuperStore_Cover_Page,
        githubLink: 'https://github.com/your-profile/global-store-analysis',
        readMoreLink: 'https://drive.google.com/drive/folders/1u8BlzklWlwHlhXDj1hF7JG5Y1focne0f?usp=sharing',
    },
];

const ProjectsSection = () => {
    return (
        <>
            <div className="projects-section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Grid container justifyContent="space-between" alignItems="center" className='link-data'>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='github-a'>
                                        <FaGithub />
                                    </a>
                                    <a href={project.readMoreLink} target="_blank" rel="noopener noreferrer" className='btn-style-read-more'>Read More</a>
                                </Grid>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Divider className="custom-divider" />
        </>
    );
}

export default ProjectsSection;
