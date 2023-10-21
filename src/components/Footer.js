import React from 'react';
import {Box,Typography} from '@mui/material';
import {Facebook,Instagram,Twitter,LinkedIn, Face} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',px:'50%',py:4}}>
        <Box  sx={{display:'flex',flexDirection:'row',gap:2,mb:2}}>
            <Facebook sx={{fontSize:'34px',color:'#21243D'}}/>
            <Instagram sx={{fontSize:'34px',color:'#21243D'}}/>
            <Twitter sx={{fontSize:'34px',color:'#21243D'}}/>
            <LinkedIn sx={{fontSize:'34px',color:'#21243D'}}/>
        </Box>
        <Typography sx={{width:'15rem',textAlign:'right',flexGrow:1,fontSize:'14px'}}>Copyright ©2023 All rights reserved </Typography>
    </Box>
  )
}

export default Footer;