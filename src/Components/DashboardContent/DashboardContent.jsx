import React, { useState } from "react";
import {
  Grid,
  Card as MuiCard,
  CardContent,
  Typography,
  Button,
  Paper,
  Box,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import BarChart from "../../Components/BarChart/BarChart.jsx";
import { cardData } from "../../Components/Card/CardData.js";
import { columns1, columns2, data1, data2 } from "../Table/tableData";
import Table from "../Table/Table.jsx";
import "../Card/Card.css";
import DonutChart from "../DonutChart/DonutChart.jsx";

const DashboardContent = () => {
  const [view, setView] = useState("today");
  const periods = ["today", "monthly", "yearly"];
  return (
    <div style={{ width: "100%", height: "100%", padding: "0 20px 2rem" }}>
      {/* Cards Row */}
      <Grid container spacing={2} marginBottom={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MuiCard
              sx={{
                backgroundColor: "var(--sidebar-color)",
                borderRadius: 2,
                boxShadow: 3,
                mb: "3rem",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  height: "10rem",
                  position: "relative", // Position relative to handle the overlay
                  borderRadius: "2px 2px 0 0", // Rounded corners for the image top
                  overflow: "hidden", // Ensure content doesn't overflow
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${card.image})`,
                    // backgroundSize: "cover",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    zIndex: 1, // Ensure the image is underneath the gradient
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, var(--card1) 30%, var(--card2) 60%)",

                    zIndex: 0,
                  }}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "var(--text-head)",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-grey)", marginTop: "8px" }}
                >
                  {card.text}
                </Typography>
              </CardContent>
            </MuiCard>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            style={{
              padding: 10, // Reduced padding
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "var(--color)",
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{
                color: "var(--text-head)",
                fontWeight: "bold",
              }}
            >
              Print Analytics
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  marginBottom: 1, // Reduced margin
                  justifyContent: "center",
                }}
              >
                {periods.map((period, index) => (
                  <motion.div
                    key={period}
                    style={{ display: "inline-block" }}
                    initial={{
                      backgroundColor:
                        view === period ? "var(--btn-bg)" : "var(--sidebar-color)",
                    }}
                    animate={{
                      backgroundColor:
                        view === period ? "var(--btn-bg)" : "var(--sidebar-color)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant={view === period ? "contained" : ""}
                      onClick={() => setView(period)}
                      sx={{
                        // border: "1px solid var(--btn-bg)",
                        borderRadius:
                          index === 0
                            ? "5px 0 0 5px" // Smaller border radius
                            : index === periods.length - 1
                            ? "0 5px 5px 0"
                            : "0",
                        color: view === period ? "var(--btn-text)" : "var(--text-color)",
                        backgroundColor:
                          view === period
                            ? "linear-gradient(135deg, var(--btn-bg) 0%, var(--hover) 100%)"
                            : "transparent",
                        boxShadow:
                          view === period
                            ? "0 2px 4px rgba(0, 0, 0, 0.2)" // Smaller shadow
                            : "none",
                        "&:hover": {
                          backgroundColor:
                            view === period
                              ? "linear-gradient(135deg, var(--btn-bg) 0%, var(--hover) 100%)"
                              : "rgba(0, 0, 0, 0.1)",
                          boxShadow:
                            view === period
                              ? "0 3px 6px rgba(0, 0, 0, 0.2)"
                              : "0 2px 4px rgba(0, 0, 0, 0.1)",
                        },
                        height: "100%",
                        padding: "0 1rem",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        transition:
                          "background-color 0.3s ease, box-shadow 0.3s ease",
                        "&:not(:last-of-type)": {
                          marginRight: 1,
                        },
                      }}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </Button>
                  </motion.div>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BarChart view={view} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            style={{
              // padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "var(--color)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60%",
                // height: "100%",
              }}
            >
              <DonutChart />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Tables */}
      <Grid container spacing={2} style={{ marginTop: 40 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              backgroundColor: "var(--color)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              style={{ marginBottom: "2rem", color: "var(--text-head)" }}
            >
              Last Completed Jobs
            </Typography>
            <div style={{ flexGrow: 1, overflow: "auto" }}>
              <Table
                columns={columns2}
                data={data2}
                localStorageKey="dashData2"
                showSearch={false}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              backgroundColor: "var(--color)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              style={{ marginBottom: "2rem", color: "var(--text-head)" }}
            >
              Last Received Print Documents
            </Typography>
            <div style={{ flexGrow: 1, overflow: "auto" }}>
              <Table
                columns={columns1}
                data={data1}
                localStorageKey="dashData1"
                showSearch={false}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardContent;
