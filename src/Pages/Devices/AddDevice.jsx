import React from "react";
import DeviceForm from "./DeviceForm";
import { motion } from "framer-motion";
import { Divider, Typography } from "@mui/material";

export default function AddDevice() {
  const handleAddUser = (formData) => {
    console.log("User data submitted:", formData);
  };

  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
      animate={{ y: "0%", opacity: 1, scale: 1 }}
      exit={{ y: "50%", opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
     <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Devices
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
          <DeviceForm isEditMode={false} onSubmit={handleAddUser} />
        </div>
     
    </motion.div>
  );
}
