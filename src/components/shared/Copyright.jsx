import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    copyrightLink: {
    color: 'inherit'
  }
}));
function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <NavLink className={classes.copyrightLink} to="https://aurelienjacob.netlify.app">
        Cooked'In
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
