import React from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  CardContent,
  Divider,
} from "@mui/material";
import { getFeaturedData } from "../store/http.js";
import { useQuery } from "@tanstack/react-query";

const WorkPage = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["featured-data"],
    queryFn: getFeaturedData,
  });
  return (
    <Box
      sx={{
        bgcolor: "#EDF7FA",
        py: 4,
        px: { lg: 30, md: 16, sm: 5, xs: 5 },
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography sx={{ color: "#21243D", fontWeight:700 }} variant="h4">
         Work
      </Typography>
      {data && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {data.slice(0, 2).map((newData) => (
            <Box
              key={newData.id}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "row",
                    xs: "column",
                  },
                  gap: 2,
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{ alignSelf: "flex-start", width: 246, height: 180 }}
                  src={newData.img}
                />
                <Card elevation={0}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        color: "#21243D",
                      }}
                    >
                      {newData.title}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                  >
                    <Typography
                      sx={{
                        borderRadius: "14px",
                        bgcolor: "#142850",
                        color: "#fff",
                        px: 2,
                        pt: "2px",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      {newData.year}
                    </Typography>
                    <Typography sx={{ color: "#8695A4" }}>
                      {newData.name}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography sx={{ color: "#21243D" }}>
                      {newData.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default WorkPage;
