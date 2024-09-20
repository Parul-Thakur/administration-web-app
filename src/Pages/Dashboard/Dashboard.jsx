import React from "react";
import { Box, Toolbar } from "@mui/material";
import DashboardContent from "../../Components/DashboardContent/DashboardContent";
import { motion } from "framer-motion";
const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly translated down
      animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in its original position
      exit={{ opacity: 0, y: 20 }} // State when the component exits (optional)
      transition={{ duration: 1 }} // Duration of the animation
    >
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
    </motion.div>
  );
};

export default Dashboard;
