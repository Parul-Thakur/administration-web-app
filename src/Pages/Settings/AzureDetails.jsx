import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";

import { motion } from "framer-motion";
import SaveModal from "../../Components/SaveModal";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";

export default function AzureDetails() {
  const [formData, setFormData] = useState({
    sso: false,
    tenantId: "",
    clientId: "",
    clientSecret: "",
    uri: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
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
        Settings
      </Typography>
      <NavbarMini />
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
          {/* ==========================Device Settings====================================== */}
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
              Azure App Details
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              borderRadius: " 1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.sso}
                          onChange={handleChange}
                          name="sso"
                          sx={{
                            color: "var(--text-color)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="Enable Microsoft SSO"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-color)",
                        display: "flex",
                        alignItems: "center",

                        "& .MuiFormControlLabel-label": {
                          padding: "0",
                        },
                        "& .MuiTypography-root": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={4} mt={1}>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Tenant Id"
                    variant="outlined"
                    name="tenantId"
                    value={formData.tenantId}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)", // Focused border color
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Client Id"
                    variant="outlined"
                    name="clientId"
                    value={formData.clientId}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)", // Focused border color
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Client Secret"
                    variant="outlined"
                    name="clientSecret"
                    value={formData.clientSecret}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)", // Focused border color
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Redirect URI"
                    variant="outlined"
                    name="uri"
                    value={formData.uri}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)", // Focused border color
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              padding: "2rem",
              // backgroundColor: "var(--color)",
            }}
          >
            <Button
              // variant="contained"
              sx={{
                fontSize: "0.8rem",
                color: "var(--text-color)",
                padding: "0.5rem 1.5rem",
                transition: "transform 0.2s ease",
                borderRadius: "1rem",
                "&:hover": {
                  backgroundColor: "var(--grey)",
                },
              }}
              onClick={handleSubmit}
            >
              Apply new settings
            </Button>
            <SaveModal
              isOpen={isModalOpen}
              onClose={handleClose}
              modalTitle="Confirm Save Settings"
              modalContent="You have made changes to your settings. Do you want to save these changes?"
              isNoNav={true}
              isError={false}
            />
          </Box>
        </Container>
      </motion.div>
    </>
  );
}
