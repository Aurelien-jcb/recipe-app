import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Welcome from '../components/home/Welcome';
import SearchInput from '../components/home/SearchInput';
import CategoriesSlider from '../components/home/CategoriesSlider';

const useStyles = makeStyles((theme) => ({
    homeContainer: {
        width: 'auto',
        height: '100%',
        margin: '40px 0 0 40px'
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Grid container className={classes.homeContainer}>
            <Welcome />   
            <SearchInput /> 
            <CategoriesSlider />
        </Grid>
    )
}
