import React from 'react';
import { Container, Grid, Box, Typography, Avatar } from '@mui/material';
import { css, keyframes } from '@emotion/react';
import Image from 'next/image';
import iconMessage from '../images/icon-message.png';
import iconInformation from '../images/icon-information.png';
import aboutUs from '../images/aboutus-edit.png';

const AboutUs = () => {
  return (
    <Container id="about">
      <Grid container>
        <Grid item xs={12} md={6}>
          <AboutLeftSide />
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutRightSide />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;

export const AboutLeftSide = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '320px',
            height: '400px',
            background: 'white',
            boxShadow: '10px 10px 300px -50px purple',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '600px',
              top: '50%',
              left: '-20%',
              transform: 'translate(-50%, -50%)',
              height: '50px',
              background: 'transparent',
              boxShadow: '-20px 20px 40px 3px #eff6ff',
            }}
            className="circleAboutUs"
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '320px',
              height: '400px',
              background: '#f3e8ff',
              borderTopLeftRadius: '50%',
              borderTopRightRadius: '50%',
              transform: 'scale(0.9)',
            }}
          >
            <Image src={aboutUs} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const AboutRightSide = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          p: 3,
          borderRadius: '10px',
          boxShadow: '5px 5px 20px 1px #f0abfc',
          backgroundImage: 'linear-gradient(to left, #fdf4ff,#f0abfc)',
        }}
      >
        <Box
          sx={{
            width: '64px',
            height: '64px',
            borderRadius: '5px',
          }}
        >
          <Image src={iconMessage} width={64} />
        </Box>
        <Typography variant="h6" sx={{ ml: 3, mt: 2 }}>
          Really About Us
        </Typography>
      </Box>
      <br />

      <Box className="-first line about us" sx={{ background: 'white' }}>
        le padda wo shi com be da forry pla. ni gatha de shun ba hool de , inn
        na mana allene, go
      </Box>

      <Box
        className="About message Box"
        sx={{
          width: '100%',
          border: '1px solid purple',
          my: 3,
          px: 3,
          py: 6,
          borderRadius: '15px',
          position: 'relative',
          mt: 6,
        }}
      >
        <Box
          sx={{
            position: 'absolute',

            width: '50px',
            height: '50px',
            top: '-25px',
          }}
        >
          <Image src={iconInformation} width={50} height={50} />
        </Box>
        He tha foory na le padda wo shi com be da forry pla. ni gatha de shun ba
        hool de , inn na mana allene, go le padda wo shi com be da forry pla. ni
        gatha de shun ba hool de , inn na mana allene, go
      </Box>
    </>
  );
};
