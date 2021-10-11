import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "../styles/styles";

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingContainer}>
      <CircularProgress size="10rem" />
    </div>
  );
};
export default Loading;
