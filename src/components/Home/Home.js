import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import resume from "../../Images/ResumeExp.pdf";

import "./Home.css";
import { Card } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Card
        id="bgCard"
        sx={{
          marginTop: "20px",
          padding: "10px",
          borderRadius: "30px",
        }}
      >
        <div>
          <p>HELLO, I'M</p>
        </div>
        <div>
          <h3>J.BUTCHI RAJU</h3>
        </div>
        <div>
          <p>
            A frontend developer with passion for creating interactive and easy
            to use applications on the web.
          </p>
        </div>
        <div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <a href={resume} download>
              <Button variant="contained" component="label" id="resumeBtn">
                Resume
              </Button>
            </a>
            <a href="https://github.com/MrDHFM">
              {" "}
              <IconButton aria-label="upload picture" component="label">
                <GitHubIcon />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/butchi-raju-jeelakarra-8033841b5/">
              <IconButton aria-label="upload picture" component="label">
                <LinkedInIcon />
              </IconButton>
            </a>

            <a href="https://twitter.com/JButchiraju">
              <IconButton aria-label="upload picture" component="label">
                <TwitterIcon />
              </IconButton>
            </a>
          </Stack>
        </div>
      </Card>
    </div>
  );
};

export default Home;
