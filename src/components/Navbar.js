import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "../styles/styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <AppBar position="static" className={classes.navbarContainer}>
        <Toolbar className={classes.navbarToolbar}>
          <Typography variant="h5">Anime Random Quotes</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
