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
      <div className="main">
        {priceSchemeData ? (
          <PriceSchemeForm
            isEditMode={true}
            existingData={priceSchemeData}
            onSubmit={handleUpdatePriceScheme}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </motion.div>
  );
}
