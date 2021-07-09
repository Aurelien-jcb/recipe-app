import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box/Box";
import CategoriesTitle from "./CategoriesTitle";

const useStyles = makeStyles(() => ({
  swiperContainer: {
    width: "100%",
    marginTop: 10,
    paddingLeft: 0,
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  // swiperSlide: {
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   width: '400px',
  //   height: '300px',
  //   borderRadius: '7px',
  // },
  // title: {
  //   color: 'white',
  //   textWeight: 'bolder',
  // },
  card: {
    padding: '20px 10px 10px 20px',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    width: "34px",
    marginRight: "20px",
  },
  iconContainer: {
    background: '#f5f5f5',
    borderRadius: '10px',
    color: 'white'
    ///filter: "drop-shadow(0 0 0.70rem black)",
  },
   activeCategory: {
    background: '#1fb2a7',
    color: 'white'
    ///filter: "drop-shadow(0 0 0.70rem black)",
  },
  icon: {
    width: "40px",
    padding: '10px', 
    ///filter: "drop-shadow(0 0 0.70rem black)",
  },

  title: {
    fontSize: "14px",
  },
  projects: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    margin: "20px 0 1px",
    width: '100%'
  },

  /* Horizontal ScrollBar */
  // projects::-webkit-scrollbar': {
  //   width: "40px",
  //   height: "5px",
  // },

  // ".projects::-webkit-scrollbar-thumb": {
  //   borderRadius: "10px",
  //   backgroundColor: "red",
  // },
}));

SwiperCore.use([EffectCoverflow]);

const CategoriesSlider = () => {
  const classes = useStyles();
  const [list, setList] = useState([
    { img: "/assets/img/recette-test.jpg", title: "Lasagne" },
  ]);
  const [categories, setCategories] = useState([
    { id: 0, label: "Crêpe", icon: "/assets/icons/hamburger-solid.svg", isActive: true },
    { id: 1, label: "Plat", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 2, label: "Dessert", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Soupe", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Pizza", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Salade", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Pates", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Apéritif", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Apéritif", icon: "/assets/icons/hamburger-solid.svg" },
    { id: 3, label: "Apéritif", icon: "/assets/icons/hamburger-solid.svg" },
  ]);
  return (
    <>
      <div class={classes.projects}>
          {categories.map((elt, index) => (
        <div class={classes.card} key={index}>
              <Box className={`${classes.iconContainer} ${elt.isActive ? classes.activeCategory : ''}`}>
              <img class={classes.icon} src={elt.icon} alt="" />
              </Box>

              <h4 class={classes.title}>{elt.label}</h4>
        </div>
          ))}
      </div>
      {/* <CategoriesTitle />
      <Swiper
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        slidesPerView={2}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={40}
        effect="coverflow"
        className={classes.swiperContainer}
      >
        {categories.map((elt, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${elt.icon})` }}
              className={classes.swiperSlide}
            >
              <Box
                pt={30}
                display="flex"
                justifyContent="center"
                alignContent="flex-end"
              >
                <Typography
                  className={classes.title}
                  variant="h6"
                  component="div"
                >
                  {elt.label}
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </>
  );
};
export default CategoriesSlider;
