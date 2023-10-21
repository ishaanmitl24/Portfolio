import React from 'react';
import {Box} from '@mui/material';
import Introduction from '../components/Introduction';
import Blog from '../components/Blog';
import Skills from '../components/Skills';
import FeaturedWork from '../components/FeaturedWork';

const Home = () => {
  return (
    <Box>
        <Introduction/>
        <Blog/>
        <Skills/>
        <FeaturedWork/>
    </Box>
  )
}

export default Home;