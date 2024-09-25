import React from "react";
import { motion } from "framer-motion";
import PriceSchemeForm from "./PriceSchemeForm";
import { Divider, Typography } from "@mui/material";

export default function AddPriceScheme() {
  const handleAddPrice = (formData) => {
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
        Pricing
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
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <PriceSchemeForm isEditMode={false} onSubmit={handleAddPrice} />
      </motion.div>
    </>
  );
}
