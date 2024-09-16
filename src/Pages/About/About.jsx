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
  Paper,
  Container,
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
          color: "var(--text-grey)",
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
          color: "var(--text-grey)",
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
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="body2">Application:</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                >
                  Caleta Secure Print
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-grey)",
                }}
              >
                <Typography variant="body2">Release</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                >
                  16
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
              backgroundColor: "var(--search-bg)",
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
                    Package
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    Caleta Secure Print - Core
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    2.0.0.0-SNAPSHOT
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    Caleta Secure Print - OXPd
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        {/* Table for System Information */}
        <motion.div variants={tableVariants} initial="hidden" animate="visible">
          <TableContainer
            component={Paper}
            sx={{
              marginBottom: 3,
              backgroundColor: "var(--search-bg)",
              padding: "1rem",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                  >
                    System Information
                  </TableCell>
                  <TableCell
                    sx={{ color: "var(--text-head)", fontWeight: "bold" }}
                  >
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    System Uptime
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    2h 58m
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    Max Occupied Memory (JVM)
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>3 GB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    Memory Usage
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    84.82/140 MB
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
