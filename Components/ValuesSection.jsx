import React from 'react';
import { Box, Grid, Avatar, Typography } from '@mui/material';
import Image from 'next/image';
import doctorSmiling from '../images/doctor-smiling1.png';
import iconValue from '../images/icon-values.png';
import iconWheelChair from '../images/icon-wheelchair.png';
import iconCancerRibbon from '../images/icon-cancer-ribbon.png';
import iconHealthCare from '../images/icon-healthcare.png';
import iconCapsule from '../images/icon-capsule.png';

const ValuesSection = () => {
  return (
    <>
      <Box className="container" id="values">
        <Grid container>
          <Grid item xs={12} md={6}>
            <PhotoSection />
          </Grid>

          <Grid item xs={12} md={6}>
            <ValuesDetailsSection />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ValuesSection;

export const PhotoSection = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '350px',
            height: '400px',
            border: '10px  solid white',
            boxSizing: 'content-box',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            backgroundImage: 'linear-gradient(to top left, #22d3ee ,#f0abfc)',
            boxShadow: '-1px -1px 200px -60px purple',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translate(-50%)',
            }}
          >
            <Image src={doctorSmiling} width={400} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const ValuesDetailsSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '30px',
          p: 1,
          borderRadius: '7px',
          backgroundImage: 'linear-gradient(to right ,white, #f5d0fe)',
        }}
      >
        <Avatar sx={{ background: 'transparent' }}>
          <Image src={iconValue} width={64} />
        </Avatar>

        <Typography
          variant="h5"
          sx={{ mt: 1, color: 'orange', fontWeight: 'bold' }}
        >
          Our Values to help you
        </Typography>
      </Box>

      {/* Values Secctions - Cards */}

      <Grid container>
        <Grid xs={12} md={6}>
          <ValuesCard
            title="Tum be Shagoor na adh pado de"
            desc="De faara boo, catta much bara ve, ana de far ma gath ve"
            iconUrl={iconCancerRibbon}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ValuesCard
            title="Tum be Shagoor na adh pado de"
            desc="De faara boo, catta much bara ve, ana de far ma gath ve"
            iconUrl={iconWheelChair}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ValuesCard
            title="Tum be Shagoor na adh pado de"
            desc="De faara boo, catta much bara ve, ana de far ma gath ve"
            iconUrl={iconHealthCare}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <ValuesCard
            title="Tum be Shagoor na adh pado de"
            desc="De faara boo, catta much bara ve, ana de far ma gath ve"
            iconUrl={iconCapsule}
          />
        </Grid>
      </Grid>
    </>
  );
};

export const ValuesCard = (props) => {
  const title = props.title;
  const desc = props.desc;
  const iconUrl = props.iconUrl;

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '260px' },
          minHeight: '220px',
          mr: 1,
          borderRadius: '10px',
          py: 4,
          px: 3,
          mt: 6,
          background: '#fdf4ff',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '64px',
            height: '64px',
            borderRadius: '5px',
            top: '-32px',
            left: '25px',
            backgroundImage: 'linear-gradient(to bottom,#e9d5ff ,#f5d0fe)',
            overflow: 'hidden',
          }}
        >
          <Image src={iconUrl} width={64} />
        </Box>
        <Box sx={{ position: 'absolute' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body1">{desc}</Typography>
        </Box>
      </Box>
    </>
  );
};
