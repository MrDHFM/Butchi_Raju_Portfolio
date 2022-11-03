import { Card } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div>
        <hr />
      </div>
      <div id="about1">
        <h2>About</h2>
      </div>

      <div>
        <Card
          id="bgCard"
          sx={{ marginTop: "20px", padding: "30px", borderRadius: "50px" }}
        >
          <p>
            ... from pathways to lines of codes <br /> Hello world!, I'm Butchi
            Raju, an energetic and dedicated frontend developer based in the
            famous Asian country, India.
            <br /> Over the past few months, I have made a smooth learning
            transition from student to frontend development. Because of my love
            for technology and innovation, this switch has been smooth.
            <br /> My journey was mainly facilitated by my zeal to learn since I
            took the self taught route. This journey will also not be complete
            if there is no mention of 14G X ZURI COHORT 2022, a platform that
            gave me the opporunity to work in a team and build an amazing web
            application Qr Generator Web App I'm currently open to internship,
            junior frontend roles and also freelance work
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
