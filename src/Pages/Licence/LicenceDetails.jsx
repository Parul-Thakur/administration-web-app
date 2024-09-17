import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function LicenseDetails() {
  const details = [
    { product: "Devices", allowed: 10, inUse: 6 },
    { product: "Card Readers", allowed: 10, inUse: 6 },
    { product: "Secure Print", allowed: 10, inUse: 6 },
    { product: "Device Monitoring", allowed: 10, inUse: 6 },
  ];
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
        <Typography variant="h7" component="h5" gutterBottom>
          Details
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
        <TableContainer>
          <Table aria-label="license details table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "var(--color)" }}>
                <TableCell
                  sx={{ fontWeight: "bold", color: "var(--text-head)" }}
                >
                  Product
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "var(--text-head)" }}
                >
                  Allowed
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "var(--text-head)" }}
                >
                  In Use
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {details.map((detail, index) => (
                <TableRow
                  key={index}
                  sx={{
                    color: "var(--text-grey)",
                    backgroundColor: "var(--color)",
                  }}
                >
                  <TableCell sx={{ color: "var(--text-head)" }}>
                    {detail.product}
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    {detail.allowed}
                  </TableCell>
                  <TableCell sx={{ color: "var(--text-grey)" }}>
                    {detail.inUse}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
