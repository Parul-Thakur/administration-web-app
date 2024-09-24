import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function Customization() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
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
     Customization
    </Typography>
    {/* <NavbarMini /> */}
    <motion.div
      className="reportMain"
      variants={tableVariants}
      initial="hidden"
      animate="visible"
    >
      <Container
        // component={Paper}
        elevation={3}
        style={{ padding: 0, margin: "0 0 3rem" }}
      >
        {/*  ==========================Server Configuration====================================== */}
        <Box
          sx={{
            backgroundColor: "var(--background-color)",
            padding: "1rem",
            margin: "2rem 0 0",

            color: "var(--text-color)",
          }}
        >
          <Typography
            variant="h8"
            component="h4"
            gutterBottom
            style={{
              fontWeight: 500,
              fontSize: ".875rem",
            }}
          >
           Custom
          </Typography>
        </Box>
        </Container>
      </motion.div>
    </>
  )
}
