import { Typography } from "@material-ui/core";
import { Grid, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../storage/context/userContext";

const useStyles = makeStyles((theme) => ({
  appLogo: {
    margin: "0 0 40px 0",
  },
}));
export default function Welcome() {
  const classes = useStyles();
  const { userContext } = useContext(UserContext);
  return (
    <>
      <Grid container item xs={12} className={classes.appLogo}>
        <NavLink to="/" className={classes.navLink}>
          <img onClick="/" src="/assets/img/cookedIn-logo.png" />
        </NavLink>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={12}>
          <Typography>Bienvenue {userContext.profile.firstName} !</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography>Que vas-tu cuisiner aujourd'hui ?</Typography>
        </Grid>
      </Grid>
    </>
  );
}
