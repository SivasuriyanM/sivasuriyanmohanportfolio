import React from "react";
import "../styles/Educationcardport.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Educationcardport({ education }) {
  return (
    <>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {education.institution}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {education.duration}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{education.qualification}</Typography>
            <Typography>{education.percentage}</Typography>
            <Typography> Taken Resposibility As : {education.roles}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: ".8em" }}>
              {education.address}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* <section className="educ-container">
        <div className="edu-content">
          <h2>{education.institution}</h2>
          <h4>{education.duration}</h4>
          <p>{education.qualification}</p>
          <p>{education.percentage}</p>
        </div>
      </section> */}
    </>
  );
}

export default Educationcardport;
