import React, { useState } from 'react';
import styles from '../styles/headWrapper.module.css';
import { MdHealthAndSafety } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { MdEventAvailable } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import {
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { MdMedicalServices } from 'react-icons/md';
import { BsFillXDiamondFill } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';

const Header = () => {
  const menuItemsList = [
    { title: 'Services', slug: '#services', icon: 'MdMedicalServices' },
    { title: 'Values', slug: '#values', icon: 'BsFillXDiamondFill' },
    { title: 'About', slug: '#about', icon: 'FcAbout' },
  ];
  const [openDrawer, setOpenDrawer] = useState(false);
  const openMobileMenu = () => {
    setOpenDrawer(true);
  };
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <nav
        className={styles.navbar}
        style={{ position: '', top: '0', zIndex: 1000 }}
      >
        <div className={styles.navWrapper}>
          <div className="wrapper">
            <div className="-logo-section col-3">
              <div className={styles.logo}>
                <div className={styles.logoImg}>
                  <MdHealthAndSafety />
                </div>
                <div className={styles.logoText}>Health Protector</div>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  <MdMenu
                    onClick={openMobileMenu}
                    style={{
                      fontSize: '3em',
                      paddingLeft: '10px',
                      color: 'purple',
                      paddingTop: '5px',
                    }}
                  />
                </Box>
              </div>
            </div>

            <Box
              className="menu-section col-6"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <div role="menu" className={styles.menuItems}>
                {menuItemsList.map((item) => (
                  <>
                    <div role="menuItem">
                      <a href={item.slug}>{item.title}</a>
                    </div>
                  </>
                ))}
              </div>
            </Box>

            <Box
              className="profile-section col-3"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <div className={styles.profileSection}>
                <div className={styles.userIcon}>
                  <BiUser />
                </div>
                <div className={styles.appointmentIcon}>
                  <MdEventAvailable />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </nav>

      {/* Mobile Menu/ Drawer */}
      <Drawer open={openDrawer} anchor="left" onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box
            sx={{
              width: '100%',
              color: 'white',
              height: '55px',
              background: 'purple',
              fontSize: 'x-large',
              pt: 1,
              pl: 3,
            }}
          >
            Health Protector
          </Box>
          <Box sx={{ p: 2 }}>
            <List>
              {menuItemsList.map((item) => (
                <>
                  <a
                    href={item.slug}
                    onClick={toggleDrawer}
                    sx={{ textDecoration: 'none', color: 'gray' }}
                  >
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {item.title == 'Services' ? (
                          <MdMedicalServices />
                        ) : item.title == 'Values' ? (
                          <BsFillXDiamondFill />
                        ) : item.title == 'About' ? (
                          <FcAbout />
                        ) : (
                          ''
                        )}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </a>
                </>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
