import React from 'react';
import { Grid } from '@mui/material';
import "./SkillsSection.css";
import excel from "../assests/office365.png";
import database from "../assests/database.png";
import powerbi from "../assests/powerbi.png";
import datacleaning from "../assests/data-cleaning.jpg";
import wrangling from "../assests/6111169.jpg";
import datavisulization from "../assests/data-visualization-vector-icon-can-be-used-data-analytics-iconset_120816-75955-removebg-preview.png";
import Divider from '@mui/material/Divider';

const skills = [
  { icon: excel, title: "Excel" },
  { icon: database, title: "SQL" },
  { icon: wrangling, title: "Data Wrangling" },
  { icon: powerbi, title: "PowerBI" },
  { icon: datacleaning, title: "Data Cleaning" },
  { icon: datavisulization, title: "Data Visualization" },
];

function Skills() {
  return (
    <>
      <div className="App">
        <h2 style={{ height: "40px" }}>Skills</h2>
        <div className="skills-container">
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className='skill-item'>
                <div className="skill">
                  <div className="icon">
                    <img src={skill.icon} alt={skill.title} />
                  </div>
                  <div className="title">{skill.title}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Divider className="custom-divider" />
    </>
  );
}

export default Skills;
