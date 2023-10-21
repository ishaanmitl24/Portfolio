import React from 'react';
import {Box,Typography,Avatar,Button} from '@mui/material';
import ishaan from '../assets/Ishaan.jpg';
import vaishu from '../assets/vaishnavi.jpeg';
import resume from '../assets/resume.pdf';

const Introduction = () => {
  return (
    <Box sx={{display:'flex',flexDirection:{lg:'row',md:'row',sm:'column-reverse',xs:'column-reverse'},alignItems:{sm:'center',xs:'center'},justifyContent:'space-evenly',gap:{sm:7,xs:5},py:10,px:{xs:10}}}>
        <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
            <Typography sx={{color:'#21243D',letterSpacing:'0.05em',color:'#21243D',fontSize:{lg:'45px',md:'40px',sm:'45px',xs:'40px'},fontWeight:600}}>Hi,I am Ishaan<br/>Web Developer</Typography>
            <Typography sx={{color:'#21243D',maxWidth:'500px',color:'#21243D',letterSpacing:'0.05em',textAlign:'justify',fonttSize:{md:'14px',sm:'12px',xs:'10px'}}}> Hi there! I'm a passionate and results-driven React.js developer with 1 years of experience in crafting dynamic and user-friendly web applications. I specialize in building elegant, efficient, and responsive front-end solutions that enhance user experiences and drive business success.</Typography>
            <a href={resume}><Button sx={{bgcolor:'#FF6464',maxWidth:200,mt:2,'&.MuiButton-root:hover':{bgcolor:'#ff2929'}}} variant='contained'>Download Resume</Button></a>
        </Box>
        <Avatar sx={{alignSelf:{lg:'flex-start',md:'flex-start'},width:{lg:300,md:250,sm:250,xs:200},height:{lg:300,md:250,sm:250,xs:200}}} src={ishaan}/>
    </Box>
  )
}

export default Introduction;