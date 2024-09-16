import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import emailData from "./emailData";
import EmailTempForm from "./EmailTempForm";
import { Divider, Typography } from "@mui/material";

export default function EditEmailTemplate() {
  const { emailId } = useParams();
  const [emailTempData, setEmailTempData] = useState(null);

  useEffect(() => {
    const id = parseInt(emailId, 10);
    const emailTemplate = emailData.find((email) => email.id === id);
    setEmailTempData(emailTemplate);
  }, [emailId]);

  const handleUpdateEmailTemp = (formData) => {
    const updatedEmailData = emailData.map((email) =>
      email.id === emailTempData.id ? { ...email, ...formData } : email
    );

    console.log("Updated email template data:", updatedEmailData);
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
        Email Tempelate
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
        {emailTempData ? (
          <EmailTempForm
            isEditMode={true}
            existingData={emailTempData}
            onSubmit={handleUpdateEmailTemp}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </motion.div>
  );
}
