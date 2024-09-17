import React from "react";
import data from "../data/mydata.json";
import Experiencecard from "../components/Experiencecard";
import Leardership from "../components/Leardership";
import Timeline from "@mui/lab/Timeline";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import "../styles/Experience.css";

function Experince() {
  const experiences = data.experience;
  const learderships = data.leadership_experience;

  return (
    <>
      <div>
        <h2>Work Experience</h2>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
          position="alternate"
        >
          {experiences.map((experience, title) => (
            <Experiencecard key={title} experience={experience} />
          ))}
        </Timeline>
      </div>
    </>
  );
}

export default Experince;
