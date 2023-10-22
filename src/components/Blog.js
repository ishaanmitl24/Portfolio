import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import classes from "./Blog.module.css";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../store/http";
import {useNavigate} from 'react-router-dom';

const Blog = () => {
  const {data, isError, isPending, error} = useQuery({
    queryKey: ["blog-data"],
    queryFn: getBlogs,
  });
  const navigate = useNavigate();
  const navigateHandler = ()=>{
    navigate('blog');
  }
  const getDate = (date)=>{
    const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    const month = newDate.getMonth();

    return `${months[month]} ${day}, ${year}`;
  }
  return (
    <Box
      sx={{
        bgcolor: "#EDF7FA",
        px: { lg: 30, md: 20, sm: 10, xs: 5 },
        minHeight: 400,
        py: 4,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", mb: 4 }}>
        <Typography sx={{color:'#21243D', flexGrow: 1, fontSize: "18px" }}>
          Recent Posts
        </Typography>
        <button  onClick={navigateHandler} className={classes.button}>View all</button>
      </Box>
      {data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {data.slice(0,2).map((newdata) => (
            <Card
              key={newdata.id}
              sx={{ width: { lg: "48%", md: "48%", sm: "100%", xs: "100%" } }}
              elevation={5}
            >
              <CardContent>
                <Typography variant="h5" sx={{ color:'#21243D',fontWeight: 600 }}>
                 {newdata.Head}
                </Typography>
              </CardContent>
              <CardContent
                sx={{ display: "flex", flexDirection: "row", gap: 2 }}
              >
                <Typography sx={{color:'#21243D'}}>{getDate(newdata.date)}</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography sx={{color:'#21243D'}}>{newdata.work}</Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{color:'#21243D', textAlign: "justify" }}>
                 {newdata.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Blog;
