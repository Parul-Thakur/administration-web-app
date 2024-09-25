import React from "react";
import ReportForm from "./ReportForm";
import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";


export default function AddReport() {
  const handleAddUser = (formData) => {
    console.log("User data submitted:", formData);
  };
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{
          padding: 0,
          margin: "3rem 2rem 0rem",
          color: "var(--text-head)",
          fontWeight: 500,
          fontFamily: "var(--font-family)",
        }}
      >
        Report
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

      <motion.div
        className="reportMain"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <NavbarMini /> */}
        <ReportForm isEditMode={false} onSubmit={handleAddUser} />
      </motion.div>
    </>
  );
}
