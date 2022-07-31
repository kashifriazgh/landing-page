import React from 'react';
import { Container, Box, Typography, Grid, Link } from '@mui/material';
import { MdHealthAndSafety } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <Container sx={{ background: 'white', pb: 3 }}>
        <Box sx={{ background: '#eff6ff' }}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <FooterCol1 />
            </Grid>
            <Grid item xs={12} md={2}>
              <FooterCol2 />
            </Grid>
            <Grid item xs={12} md={2}>
              <FooterCol3 />
            </Grid>
            <Grid item xs={12} md={2}>
              <FooterCol4 />
            </Grid>
            <Grid item xs={12} md={2}>
              <FooterCol5 />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Footer;

export const FooterCol1 = () => {
  return (
    <>
      <Box sx={{ py: 4, px: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h5"
          sx={{ color: 'orange', textShadow: '1px 1px 5px purple' }}
        >
          <MdHealthAndSafety /> Health Protector
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          Health Protector is a ... tha foory na le padda wo shi com be da forry
          pla. ni gatha de shun ba hool de , inn na mana allene, go le padda wo
          shi com be da forry pla. ni gatha de shun ba hool de , inn na mana
          allene, go
        </Typography>
      </Box>
    </>
  );
};

export const FooterCol2 = () => {
  const aboutMenu = ['About Us', 'News & Blog', 'Features'];
  return (
    <>
      <Box
        sx={{
          p: { xs: 3, md: 0 },
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: 'purple', mb: 3 }}
        >
          About
        </Typography>
        {aboutMenu.map((item) => (
          <>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <Link to="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                {item}
              </Link>
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};

export const FooterCol3 = () => {
  const companyMenu = ['Why Us', 'Health Insurance', 'Association'];
  return (
    <>
      <Box
        sx={{
          p: { xs: 3, md: 0 },
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: 'purple', mb: 3 }}
        >
          Company
        </Typography>
        {companyMenu.map((item) => (
          <>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <Link to="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                {item}
              </Link>
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};

export const FooterCol4 = () => {
  const citiesMenu = ['London', 'Bristol', 'Manchester', 'Birmingham'];
  return (
    <>
      <Box
        sx={{
          p: { xs: 3, md: 0 },
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: 'purple', mb: 3 }}
        >
          Locations
        </Typography>
        {citiesMenu.map((item) => (
          <>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <Link to="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                {item}
              </Link>
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};

export const FooterCol5 = () => {
  const supportMenu = ['FAQs', 'Contact us', 'Live Chat'];
  return (
    <>
      <Box
        sx={{
          p: { xs: 3, md: 0 },
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: 'purple', mb: 3 }}
        >
          Support
        </Typography>
        {supportMenu.map((item) => (
          <>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <Link to="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                {item}
              </Link>
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
};
