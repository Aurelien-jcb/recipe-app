import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CategoriesTitle from './recipeCategories/CategoriesTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 325,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  imageContainer: {
    borderRadius: '5px'
  }
}));

export default function RecipesFeed() {
  const classes = useStyles();
const [itemData, setItemData] = useState([
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
  {img: '/assets/img/recette-test.jpg', label: 'Recette', author: 'auteur'},
])
  return (
    <div className={classes.root}>
      <CategoriesTitle />
      <ImageList rowHeight={180} className={classes.imageList}>
        {/* <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem> */}
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.img} alt={item.label} />
            <ImageListItemBar
            className={classes.imageContainer}
              title={item.label}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
