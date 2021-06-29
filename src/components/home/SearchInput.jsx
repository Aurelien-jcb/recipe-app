import {
  Grid,
  makeStyles,
  InputAdornment,
  Input,
  FormControl,
  OutlinedInput,
  InputLabel,
  withStyles,
  TextField
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const CustomTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    "& label.Mui-focused": {
      color: "green",
    },
  },
  input: {
    border: "1px solid red",
  },
}));

export default function SearchInput() {
  const classes = useStyles();

  return (
    <>
      <Grid container item xs={10} className={classes.root}>
        <FormControl variant="outlined">
          <CustomTextField
            id="outlined-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={<SearchIcon position="start" />}
            aria-describedby="outlined-weight-helper-text"
            labelWidth={0}
          />
        </FormControl>
      </Grid>
    </>
  );
}
