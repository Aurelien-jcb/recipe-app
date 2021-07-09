import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../storage/context/userContext";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function ProfilePicture() {
  const classes = useStyles();
  const { userContext } = useContext(UserContext);
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/assets/img/profile.png"
        className={classes.large}
      />
    </>
  );
}
