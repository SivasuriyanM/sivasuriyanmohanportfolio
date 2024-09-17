import React from "react";
import "../styles/Projectscard.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { Button } from "@mui/material";
function Projectscard({ project }) {
  const highlights = project.highlights;
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{project.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{project.description}</Typography>
          <Typography>
            {highlights.map((highlight, index) => (
              <ul key={index}>
                <li>{highlight} </li>
              </ul>
            ))}
          </Typography>
          <Button>
            {" "}
            <Link to={project.link}>View Demo</Link>
          </Button>
        </AccordionDetails>
      </Accordion>
      <section className="pro-container">
        <div>
          <div className="pro-content">
            <h2>{project.name}</h2>
            <h4>{project.duration}</h4>
            <h4>Description : </h4>
            <p>{project.description}</p>
          </div>
          <div className="pro-info">
            <h4>Features :</h4>
          </div>
          <div className="btn">
            <Link to={project.link}>View Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projectscard;
