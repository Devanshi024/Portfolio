// src/Components/ContactUs.js
import React from 'react';
import { Grid, Typography, Container, Link } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Contactus.css";

function ContactUs() {
  return (
    <Container maxWidth="sm" className="contact-container">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link href="mailto:devanshithakkar02@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={40} className="contact-icon" />
          </Link>
          <Typography variant="subtitle1">Gmail</Typography>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/devanshi-thakkar-aa2a981b4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="contact-icon" />
          </Link>
          <Typography variant="subtitle1">LinkedIn</Typography>
        </Grid>
        <Grid item>
          <Link href="https://github.com/Devanshi024/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className="contact-icon" />
          </Link>
          <Typography variant="subtitle1">GitHub</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
