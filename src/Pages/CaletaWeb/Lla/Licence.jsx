import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

export default function License() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--color)",
          // padding: "1rem",
          // margin: "2rem 0 0",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h7" component="h5" gutterBottom>
          Information
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 1rem 0",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
      <Box
        sx={{
          padding: "1rem 1rem 2rem",
          // backgroundColor: "red",
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                color: "var(--text-color)",
              }}
            >
              <Typography variant="body2">Application:</Typography>
              <Typography variant="body2" sx={{ color: "var(--text-head)" }}>
                <strong>Caleta Web Interface</strong>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                color: "var(--text-color)",
              }}
            >
              <Typography variant="body2">License Type:</Typography>
              <Typography variant="body2" sx={{ color: "var(--text-head)" }}>
                <strong> Permanent License</strong>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                color: "var(--text-color)",
              }}
            >
              <Typography variant="body2">M&S Expiry Date:</Typography>
              <Typography variant="body2" sx={{ color: "var(--text-head)" }}>
                <strong> 31-12-2024</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
     
    </>
  );
}
