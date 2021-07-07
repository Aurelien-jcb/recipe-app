import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import Typography from "@material-ui/core/Typography/Typography";
import Box from "@material-ui/core/Box/Box";


const useStyles = makeStyles(() => ({
  swiperContainer: {
    width: '100%',
    paddingRop: '50px',
    paddingBottom: '50px',
  },
  swiperSlide: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '200px',
    height: '300px',
    borderRadius: '7px',
  },
  title: {
    color: 'white',
    textWeight: 'bolder',
  }
}))

SwiperCore.use([EffectCoverflow]);

const ActivitiesSlider = () => {
  const classes = useStyles();
  const [list, setList] = useState([
    {img: '',title:'Title'}
  ])
  return (
      <Swiper
        coverflowEffect = {{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        slidesPerView={5}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={40}
        effect="coverflow"
        className={classes.swiperContainer}
      >
        {
          list.map(elt => {
            return (
              <SwiperSlide key={elt.img} style={{ backgroundImage: `url(${elt.img})`}} className={classes.swiperSlide}>
                <Box pt={30} display="flex" justifyContent="center" alignContent="flex-end">
                  <Typography className={classes.title} variant="h6" component="div">
                    {elt.title}
                  </Typography>
                </Box>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
  );
};
export default ActivitiesSlider;
