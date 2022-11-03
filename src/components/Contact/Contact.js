import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <hr />
      </div>
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            borderRadius: "50px",
          }}
        >
          <div>
            <form id="formSubmit">
              <TextField
                sx={{ marginTop: "20px" }}
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                placeholder="Enter Your Name"
              />
              <TextField
                sx={{ marginTop: "20px" }}
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                placeholder="Enter Your mail"
              />
              <TextField
                sx={{ marginTop: "20px" }}
                id="filled-textarea"
                label="Your Message"
                placeholder="Type"
                multiline
                rows={4}
              />
              <input id="submit" type="submit" value="Send"></input>
            </form>
          </div>
          <div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact
              </Typography>
              <Typography variant="body2" color="text.secondary">
                If you have anything for me, be it question or offer, feel free
                to reach out to me through this form and I will get back to you
                as soon as possible Also I'm available for collaborations. Reach
                out let's build something fun
              </Typography>
            </CardContent>
            <CardActions>
              <div>
                <div>
                  <h3>For social media, you can also reach</h3>
                </div>
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
              </div>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
