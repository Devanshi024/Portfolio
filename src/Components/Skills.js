import React, { useEffect } from "react";
import './style.css';

// Importing TagCloud package
import TagCloud from "TagCloud";

const Skills = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JAVA",
        "JavaScript",
        "ReactJS",
        "Bootstrap",
        "Python",
        "Django",
        "Software Testing",
        "Jira",
        "PHP",
        "GIT",
        "GITHUB",
        "IOT",
        "FireBase",
        "SQLite",
        "MySQL",
        "Azure",
        
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
    <h1 style={{ padding: "30px",display: 'flex',alignItems: 'center',justifyContent: 'center' }}>SKILLS</h1>
            <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr> <br />
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Skills;
          