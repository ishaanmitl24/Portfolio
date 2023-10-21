import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from '../components/Navigation';
import {Box} from '@mui/material';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <Box sx={{flexDirection:'column', display:'flex'}}>
        <Navigation/>
        <Box>
          <Outlet/>
        </Box>
        <Footer/>
    </Box>
  )
}

export default Root;