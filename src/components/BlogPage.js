import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../store/http";

const BlogPage = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["blog-data"],
    queryFn: getBlogs,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        bgcolor: "#EDF7FA",
        px: { lg: 30, md: 20, sm: 10, xs: 5 },
        minHeight: 400,
        py: 4,
      }}
    >
      <Typography variant="h5" sx={{ flexGrow: 1 }}>
        Blogs
      </Typography>
      {data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {data.slice(0, 2).map((newdata) => (
            <Box sx={{display:'flex',flexDirection:'column',gap:2}} key={newdata.id}>
              <Card sx={{ width: "100%" }} elevation={2}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {newdata.Head}
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                >
                  <Typography>{newdata.date}</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography>{newdata.work}</Typography>
                </CardContent>
                <CardContent>
                  <Typography sx={{ textAlign: "justify" }}>
                    {newdata.description}
                  </Typography>
                </CardContent>
              </Card>
              <Divider light={false} sx={{fontSize:'34px'}} flexGrow/>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BlogPage;
