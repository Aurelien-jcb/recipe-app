import {
  Grid,
  makeStyles,
  FormControl,
  OutlinedInput,
  ThemeProvider,
  createTheme
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
  },
  searchInput: {
    width: '300px'
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      light: 'red',
      main: '#1fb2a7',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

export default function SearchInput() {
  const classes = useStyles();

  return (
    <>
      <Grid container item xs={12} className={classes.root}>
        <FormControl variant="outlined">
        <ThemeProvider theme={theme}>
          <OutlinedInput
            id="outlined-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={<SearchIcon position="start" />}
            aria-describedby="outlined-weight-helper-text"
            labelWidth={0}
            className={classes.searchInput}
            placeholder="Chercher une recette"
          />
          </ThemeProvider>
        </FormControl>
      </Grid>
    </>
  );
}
