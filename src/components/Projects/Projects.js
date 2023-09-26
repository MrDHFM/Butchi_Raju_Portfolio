import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import movie from "../../Images/Movie.png";
import twitter from "../../Images/twitter.png";
import store from "../../Images/store.png";
import advice from "../../Images/advice.png";
import "./Projects.css";

const projectData = [
  {
    imgUrl: twitter,
    alt: "Twitter clone",
    projectName: "Twitter Clone",
    github: "https://github.com/MrDHFM/Twitter_clone",
    live: "https://twitter-clone35.netlify.app",
  },
  {
    imgUrl: store,
    alt: "Store",
    projectName: "Online Store",
    github: "https://github.com/MrDHFM/Store",
    live: " https://raju-store.netlify.app/",
  },
  {
    imgUrl: movie,
    alt: "Movie Ticket Booking",
    projectName: "Movie Ticket Booking",
    github: "https://github.com/MrDHFM/Movie_Ticket_booking.git",
    live: " https://candid-unicorn-68d455.netlify.app/",
  },
  {
    imgUrl: advice,
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
                    height="200"
                    image={project.imgUrl}
                    sx={{ borderRadius: "20px" }}
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
