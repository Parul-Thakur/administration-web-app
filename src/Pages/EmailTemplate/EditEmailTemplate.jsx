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
      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        {emailTempData ? (
          <EmailTempForm
            isEditMode={true}
            existingData={emailTempData}
            onSubmit={handleUpdateEmailTemp}
          />
        ) : (
          <div>Loading...</div>
        )}
      </motion.div>
    </>
  );
}
