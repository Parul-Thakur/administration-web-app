import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// List of features
const sendMail = [
  "Web Interface",
  "Pay to Print",
  "Remote Print",
  "Email Print",
  "Android App",
  "iOS App",
 
];

// Features enabled/disabled state (true = enabled, false = disabled)
const initialStatus = {
  "Web Interface": true,
  "Pay to Print": false,
  "Remote Print": true,
  "Email Print": false,
  "Android App": true,
  "iOS App": true,
};

export default function Feature() {
  const [featureStatus] = useState(initialStatus); // State to manage feature status

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--color)",
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
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {sendMail.map((type) => (
              <Grid item xs={6} key={type} sx={{ padding: "1rem" }}>
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
                        backgroundColor: featureStatus[type] ? "green" : "red", // Green for enabled, red for disabled
                        color: "white",
                      }}
                    >
                      <CheckCircleIcon
                        style={{
                          fontSize: "1.5rem",
                        }}
                      />
                    </span>
                  }
                  label={type}
                  labelPlacement="end"
                  sx={{
                    border: "1px solid",
                    borderColor: featureStatus[type] ? "green" : "red", // Border color based on status
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
