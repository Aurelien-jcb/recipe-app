import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import Copyright from "../components/shared/Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1fb2a7",
  },
  link: {
    color: "#1fb2a7",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { email, password, cpassword } = this.state;
    // if (!email || email.length === 0) return;
    // if (!password || password.length === 0 || password !== cpassword) return;
    // try {
    //   const { data } = await API.signup({ email, password });
    //   localStorage.setItem("token", data.token);
    //   window.location = "/dashboard";
    // } catch (error) {
    //   console.error(error);
    // }
  };
  console.log(userData);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src="/assets/img/cookedin-logo.png" />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={userData.email}
            onChange={(email) =>
              setUserData({
                ...userData,
                email: email ? email.target.value : "",
              })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userData.password}
            onChange={(password) =>
              setUserData({
                ...userData,
                password: password ? password.target.value : "",
              })
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Se souvenir de moi"
            value={userData.rememberMe}
            onChange={(rememberMe) =>
              setUserData({
                ...userData,
                rememberMe: !userData.rememberMe,
              })
            }
            name="rememberMe"
            id="rememberMe"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="/" variant="body2" className={classes.link}>
                Mot de passe oublié ?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink className={classes.link} to="/register" variant="body2">
                {"S'enregister"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
