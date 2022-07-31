import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import iconDestination from '../images/icon-destination.png';

const GetStarted = () => {
  return (
    <>
      <Container sx={{ p: 9 }}>
        <Box
          sx={{
            width: '100%',
            minHeight: '350px',
            p: 2,
            borderRadius: '15px',
            background: 'purple',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              border: '1px solid #fde68a',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <Image src={iconDestination} width={64} />
          </Box>
          <br />
          <Typography variant="h5" sx={{ color: 'white' }}>
            Why not started Yet
          </Typography>
          <Typography
            textAlign="center"
            variant="subTitle1"
            sx={{ color: 'white', maxWidth: '350px' }}
          >
            De falla ja gosh male, enna tha foor pedha , achoon tha faar paddey.
            lum epsa De falla ja gosh male, enna tha foor pedha , achoon tha
            faar paddey. lum epsa
          </Typography>
          <br />
          <br />
          <Button
            variant="contained"
            sx={{ background: '#facc15', '&:hover': { background: '#d97706' } }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default GetStarted;
