import React, { useState } from 'react';
import {Box, Button, Typography,CircularProgress} from '@mui/material';
import classes from './ContactForm.module.css';
import { postContactDetails } from '../store/http';
import {useMutation} from '@tanstack/react-query';
const ContactForm = () => {
  const [data,setData] = useState({name:'',phone:'',email:'',why:''});
  const [isEmpty,setEmpty] = useState(false);
  const {mutate,isPending} = useMutation({
    mutationFn:postContactDetails
  })
  const inputChangeHandler = (type,content)=>{
    setEmpty(false);
    if(type==='name'){
        setData((prev)=>{
            return{...prev,name:content};
        })
    }
    else if(type==='email'){
        setData((prev)=>{
            return{...prev,email:content};
        })
    }
    else if(type==='phone'){
        setData((prev)=>{
            return{...prev,phone:content};
        })
    }
    else if(type==='why'){
        setData((prev)=>{
            return{...prev,why:content};
        })
    }
  }  
  const submitHandler =(event)=>{
    event.preventDefault();
    if(data.name.trim().length===0 || data.email.trim().length===0 || +data.phone.trim().length===0 ||  data.why.trim().length===0){
        setEmpty(true);
        return
    }
    mutate({data:data});
    setData({name:'',phone:'',email:'',why:''});
  }
  return (
    <Box sx={{maxWidth:500}}>
        <form onSubmit={submitHandler} className={classes.form}>
            <Box className={classes.box} sx={{py:1,display:'flex',flexDirection:'column',gap:1}}>
                <label htmlFor='name'>Name</label>
                <input value={data.name} onChange={(event)=>inputChangeHandler('name',event.target.value)} id='name' type='text'/>
            </Box> 
            <Box className={classes.box} sx={{py:1,display:'flex',flexDirection:'column',gap:1}}>
                <label htmlFor='email'>E-mail</label>
                <input value={data.email} onChange={(event)=>inputChangeHandler('email',event.target.value)} id='email' type='email'/>
            </Box>  
            <Box className={classes.box} sx={{py:1,display:'flex',flexDirection:'column',gap:1}}>
                <label htmlFor='tel'>Phone no</label>
                <input value={data.phone} onChange={(event)=>inputChangeHandler('phone',event.target.value)} id='tel' maxLength={10} type='tel'/>
            </Box> 
            <Box className={classes.box} sx={{py:1,display:'flex',flexDirection:'column',gap:1}}>
                <label>Why do you want to contact me?</label>
                <textarea value={data.why} onChange={(event)=>inputChangeHandler('why',event.target.value)} rows={4} cols={30} />
            </Box>
            <Box sx={{py:1}}>
            {isPending && <CircularProgress/>}
            {isEmpty && <Typography sx={{color:'red'}} variant='h6'>Enter some valid data.</Typography>} 
            </Box>
            <Button sx={{mt:2}} type='submit' variant='contained'>Submit</Button>   
        </form>
    </Box>
  )
}

export default ContactForm