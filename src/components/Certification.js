import React from "react";
import "../styles/Certifications.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img from "../assests/certificate/git.jpeg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Certification({ title, isActive, link, onClick, image }) {
  return (
    <Link className="cert-link" to={link} target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 180 }} image={img} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        {/* <CardActions> */}
        {/* <Button onclick={handleClick()} size="small">
          Learn More
        </Button> */}
        {/* </CardActions> */}
      </Card>
    </Link>
  );
}

export default Certification;
