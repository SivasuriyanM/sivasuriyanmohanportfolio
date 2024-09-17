import data from "../data/mydata.json";
import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Projectsport() {
  const projects = data.projects;
  return (
    <Timeline position="alternate">
      {projects.map((project, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="primary"
          >
            {project.duration}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
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
                  {project.highlights.map((highlight, index) => (
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
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default Projectsport;
