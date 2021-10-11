import React from "react";
import { Typography, Container, Link } from "@material-ui/core";

import useStyles from "../styles/styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Container>
        <Typography>
          Developed by{" "}
          <Link
            style={{ color: "white" }}
            className={classes.footerLink}
            href="https://eugenehan.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Eugene Han
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
