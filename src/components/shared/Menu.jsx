import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "white",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  addIcon: {
    fontSize: "40px",
    color: "white",
  },
  icon: {
    textDecoration: "none",
    fontSize: "40px",
    color: "#1fb2a7",
  },
  selected: {
    color: "white",
    background: "#1fb2a7",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="end" color="inherit" aria-label="open drawer">
            <NavLink to="/" className={classes.navLink}>
              <HomeIcon className={classes.icon} />
            </NavLink>
          </IconButton>
          <NavLink to="/recipeForm" className="navLink">
            <Fab aria-label="add" className={classes.fabButton}>
              <AddIcon className={classes.addIcon} />
            </Fab>
          </NavLink>
          <div className={classes.grow} />
          <IconButton color="inherit" aria-label="open drawer">
            <NavLink to="/profile" className={classes.navLink}>
              <PersonIcon className={classes.icon} />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
