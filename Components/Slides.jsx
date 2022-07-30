import React from 'react';
import Image from 'next/image';
import iconPremium from '../images/icon-premium.png';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slides = () => {
  return (
    <>
      <div id="services">
        <SlidesHeader />
        <SlidesContainer />
      </div>
    </>
  );
};

export default Slides;

export const SlidesHeader = () => {
  return (
    <>
      <Box sx={{ width: '100%', p: 2, mt: 4 }}>
        <Grid container>
          <Grid item>
            <Image src={iconPremium} width={64} height={64} />
          </Grid>
          <Grid
            sx={{
              pl: 3,
              pt: 2,
              fontSize: 'xx-large',
              borderRadius: '10px',
              fontWeight: 'bold',
              color: 'purple',

              backgroundImage: 'linear-gradient("to right, red, green")',
            }}
            item
          >
            Our Best Services
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const SlidesContainer = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          p: 2,
          boxShadow: '20px 20px 100px 1px purple',
        }}
      >
        <Box
          sx={{
            width: '100%',
            p: 1.5,
            borderRadius: '20px',
            background: 'white',
            boxShadow: '20px 20px 100px 1px orange',
          }}
        >
          <Box
            sx={{
              pl: 2,
              width: '100%',
              borderRadius: '15px',
              background: 'purple',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Carousel
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              showDots={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={`mobile`}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <CarouselBox
                title="Amazing title going here"
                desc="Some Amzaing descri wanna fool pnadaa kd ad"
              />
              <CarouselBox
                title="What a great title"
                desc="an fool a=batta kan de ale pol sheud panday"
              />
              <CarouselBox
                title="cheng hong pangee"
                desc="de pol wanna ale be tha fossle de duch"
              />
              <CarouselBox
                title="Mpde [addau gpp; gappay"
                desc="jey paal funta goom bale na de vall"
                imgUrl={iconPremium}
              />
            </Carousel>
          </Box>
        </Box>
      </Box>
      ;
    </>
  );
};

export const CarouselBox = (props) => {
  const title = props.title;
  const desc = props.desc;
  const imgUrl = props.imgUrl;
  const buttonText = props.btnTxt;
  return (
    <>
      <Box
        sx={{
          width: '220px',
          py: 4,
          '&:hover': { background: 'orange' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar sx={{ background: 'transparent' }}>
            <Image src={imgUrl} width={64} height={64} />
          </Avatar>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="subTitle1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            color: 'cyan',
            '&:hover': { color: 'white' },
            pt: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="body">{desc}</Typography>
        </Box>
      </Box>
    </>
  );
};
