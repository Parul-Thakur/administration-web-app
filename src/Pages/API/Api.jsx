import React, { useState } from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import work from "../../Images/api.png";
export default function Api() {
  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        API
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />

      <div className="main">
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, maxWidth: "95%", margin: " 0 0 3rem" }}
        >
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              // margin: "2rem 0 0",
              color: "var(--text-grey)",
            }}
          >
            {/*<Typography variant="h8" component="h4" gutterBottom>
              API
            </Typography> */}
          </Box>
          <Box
            sx={{
              padding: "2rem 0",

              color: "var(--text-grey)",
              borderRadius: "1rem",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "600px",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={work}
                alt="work"
                style={{
                  width: "100%", // Image takes up full width of the container
                  height: "auto", // Maintain aspect ratio
                  // opacity:"0.3"
                }}
              />
            </Box>
            {/* <Typography variant="h10" component="h5" gutterBottom marginTop={4} sx={{color:"var(--text-grey)"}}>
               We're currently working on this page.
            </Typography> */}
          </Box>
        </Container>
      </div>
    </>
  );
}
