import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
function Experiencecard({ experience }) {
  const responsibility = experience.responsibility;
  return (
    <div>
      <TimelineItem>
        <TimelineOppositeContent color="primary">
          {experience.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>{experience.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {responsibility.map((res, index) => (
                  <ul key={index}>
                    <li>{res} </li>
                  </ul>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
}

export default Experiencecard;
