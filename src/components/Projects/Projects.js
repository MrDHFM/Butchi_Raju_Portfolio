import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Projects.css";

const projectData = [
  {
    imgUrl: "",
    alt: "Movie Ticket Booking",
    projectName: "Movie Ticket Booking",
    github: "https://github.com/MrDHFM/Movie_Ticket_booking.git",
    live: " https://candid-unicorn-68d455.netlify.app/",
  },
  {
    imgUrl: "",
    alt: "Advice App",
    projectName: "Advice App",
    github: "https://github.com/MrDHFM/advice_app_react.git",
    live: "https://spiffy-gnome-904e3e.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div>
      <div>
        <hr />
      </div>
      <div>
        <h2>Projects</h2>
      </div>
      <div>
        <Card
          sx={{
            padding: "50px",
            borderRadius: "40px",
          }}
        >
          <div>
            {projectData.map((project, index) => {
              return (
                <Card
                  sx={{
                    marginTop: "20px",
                    borderRadius: "40px",
                    padding: "30px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={project.alt}
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.projectName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description about the App
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={project.github}>
                      GitHub
                    </Button>
                    <Button size="small" href={project.live}>
                      Live
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;