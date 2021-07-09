import { Grid, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Welcome from '../components/home/Welcome';
import SearchInput from '../components/home/SearchInput';
import CategoriesSlider from '../components/home/recipeCategories/CategoriesSlider';
import { UserContext } from '../storage/context/userContext';
import RecipesFeed from '../components/home/RecipesFeed';

const useStyles = makeStyles((theme) => ({
    homeContainer: {
        width: 'auto',
        height: '100%',
        margin: '40px 0 0 20px'
    }
}));

export default function Home() {
    const classes = useStyles();
    const  { userDispatch } = useContext(UserContext);

    useEffect(() => {
        const profile = {
            email: 'jacob-aurelien@hotmail.fr',
            firstName: 'Aurel'
          };
        userDispatch({ type: "UPDATE_USER", value:  profile});
    }, [])
    return (
        <Grid container item xs={12} className={classes.homeContainer}>
            <Welcome />   
            <SearchInput /> 
            <CategoriesSlider />
            <RecipesFeed />
        </Grid>
    )
}
