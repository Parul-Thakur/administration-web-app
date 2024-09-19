import React from "react";

import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const sendMail = [
  "API",
  "Advanced Reports",
  "Android App",
  "Custom Print",
  "Email Print",
  "Multi-server",
  "Pay to Print",
  "Remote Print",
  "Reprint",
  "Statistics",
  "Web Interface",
  "iOS App",
];
export default function LicenseFeature() {
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
        <Typography variant="h7" component="h5" gutterBottom>
          Features
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
          padding: "1rem",
          // backgroundColor: "red",
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {sendMail.map((type) => (
              <Grid item xs={6} key={type} sx={{ padding: "1rem " }}>
                <FormControlLabel
                  control={
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--btn-bg)",
                        color: "var(--color)",
                      }}
                    >
                      <CheckCircleIcon
                        style={{
                          fontSize: "1.5rem",
                          backgroundColor: "var(--btn-bg)",
                        }}
                      />
                      {/* Checkmark icon */}
                    </span>
                  }
                  label={type}
                  labelPlacement="end"
                  sx={{
                    // backgroundColor: "var(--hover)",
                    border: "1px solid var(--btn-bg)",
                    borderRadius: "2rem",
                    padding: ".5rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
