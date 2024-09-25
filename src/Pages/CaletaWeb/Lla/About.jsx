
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Paper,
  Divider,
  Grid,
} from "@mui/material";

export default function About() {
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
      <Box
        sx={{
          backgroundColor: "var(--color)",
          // padding: "1rem",
          // margin: "2rem 0 0",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h10" component="h4" gutterBottom>
          Information
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 1rem 0",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
      <Box
        sx={{
          padding: "1rem 1rem",
          // backgroundColor: "red",
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <Box
          sx={{
            marginBottom: 3,
            backgroundColor: "var(--color)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-color)",
                }}
              >
                <Typography variant="body2">Application:</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                >
                  Caleta Web Interface
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-color)",
                }}
              >
                <Typography variant="body2">Version</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                >
                  1.0
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Table for Module Information */}
        <motion.div variants={tableVariants} initial="hidden" animate="visible">
          <TableContainer
            component={Paper}
            sx={{
              marginBottom: 3,
              backgroundColor: "var(--header-bg)",
              padding: "1rem",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                  >
                    Module
                  </TableCell>
                  <TableCell
                    sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                  >
                    Version
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: "var(--text-color)" }}>
                    Caleta Web Interface
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-color)" }}>
                    2.4.2-SNAPSHOT
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

      
      </Box>
    </>
  );
}
