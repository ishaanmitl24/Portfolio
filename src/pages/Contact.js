import { Box ,Typography} from '@mui/material';
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Box sx={{px:{lg:40,md:25,sm:12,xs:6},pt:5}}>
      <Typography sx={{mb:5,fontWeight:600,letterSpacing:'0.05em',color:'#252949'}} variant='h4'>Contact Me</Typography>
      <ContactForm/>
    </Box>
  )
}

export default Contact;