import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { pricingConfigData } from "./pricingData";
import PriceSchemeForm from "./PriceSchemeForm";
import { Divider, Typography } from "@mui/material";

export default function EditPriceScheme() {
  const { priceId } = useParams();
  const [priceSchemeData, setPriceSchemeData] = useState(null);

  useEffect(() => {
    const id = parseInt(priceId, 10);
    const priceScheme = pricingConfigData.find((scheme) => scheme.id === id);
    setPriceSchemeData(priceScheme);
  }, [priceId]);

  const handleUpdatePriceScheme = (formData) => {
    const updatedPricingData = pricingConfigData.map((scheme) =>
      scheme.id === priceSchemeData.id ? { ...scheme, ...formData } : scheme
    );

    console.log("Updated pricing scheme data:", updatedPricingData);
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
    <
    >
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
        Pricing Configuration
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
        {priceSchemeData ? (
          <PriceSchemeForm
            isEditMode={true}
            existingData={priceSchemeData}
            onSubmit={handleUpdatePriceScheme}
          />
        ) : (
          <div>Loading...</div>
        )}
      </motion.div>
    </>
  );
}
