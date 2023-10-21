import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import html from "../assets/Html.png";
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/React.png';
import redux from '../assets/Redux.png';
import mui from '../assets/mui.png';
import git from '../assets/git.png';
import python from '../assets/python.png';
import c from '../assets/c.png';

const Skills = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:2,py:4,px:{lg:25,md:17,sm:12,xs:3}}} >
      <Typography variant="h5">
        Skills
      </Typography>
      <Box sx={{display:'flex',flexDirection:'row',gap:{lg:3,md:4,sm:3,xs:3},flexWrap:'wrap',justifyContent:'space-evenly'}}>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width:110, height: 110 }} image={html} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={css} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={js} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={react} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={redux} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={mui} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={git} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={python} />
        </Card>
        <Card sx={{ maxWidth: 200 }} component="div" elevation={0}>
          <CardMedia sx={{ width: 110, height: 110 }} image={c} />
        </Card>
      </Box>
    </Box>
  );
};

export default Skills;
