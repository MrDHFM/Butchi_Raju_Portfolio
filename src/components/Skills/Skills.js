import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import rjs from "../../Images/react.png";
import "./Skills.css";
import { display } from "@mui/system";

const skillImg = [html, css, js, rjs];
const skillTitle = ["HTML", "CSS", "JavaScript", "ReactJs"];
const Skills = () => {
  return (
    <div>
      <div>
        <hr />
      </div>
      <div>
        <h2>Skills</h2>
      </div>

      <div>
        <Card sx={{ padding: "50px", borderRadius: "50px" }}>
          {/* <Grid container>
            {skillImg.map((skill, index) => {
              return (
                <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card sx={{ maxWidth: 200, marginTop: "20px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={skill}
                        alt="HTML"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {skillTitle[index]}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid> */}
          <Grid container direction="row" textAlign="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <i class="fa-brands fa-html5 fa-3x"></i>
              <h5>HTML</h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <i class="fa-brands fa-css3-alt fa-3x"></i>
              <h5>CSS</h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <i class="fa-brands fa-js fa-3x"></i>
              <h5>JAVASCRIPT</h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <i class="fa-brands fa-react fa-3x"></i>
              <h5>REACT</h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <i class="fa-brands fa-git-alt fa-3x"></i>
              <h5>GIT</h5>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
