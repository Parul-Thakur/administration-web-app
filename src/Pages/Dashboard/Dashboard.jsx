import React from "react";
import { Box, Toolbar } from "@mui/material";
import DashboardContent from "../../Components/DashboardContent/DashboardContent";
import { motion } from "framer-motion";
const Dashboard = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100%",
          background:
            "linear-gradient(to bottom, var(--dashboard-bg) 35%, var(--background-color) 7%)",
        }}
      >
        <Toolbar />
        <DashboardContent />
      </Box>
    </>
  );
};

export default Dashboard;
