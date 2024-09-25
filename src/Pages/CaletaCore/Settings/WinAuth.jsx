import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

import { motion } from "framer-motion";
import SaveModal from "../../../Components/Common/SaveModal";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";

export default function WinAuth() {
  const [formData, setFormData] = useState({
    server: "",
    domain: "",
    username: "",
    testPassword: "",
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
          {/* ==========================Windows Authentication Details====================================== */}
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
              Windows Authentication Details
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              borderRadius: "1rem",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="LDAP Server"
                    variant="outlined"
                    name="server"
                    value={formData.server}
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
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Domain"
                    variant="outlined"
                    name="domain"
                    value={formData.domain}
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
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>

                {/* Windows Authentication Section */}
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      padding: "2rem 0 1rem",
                      textAlign: "left",
                    }}
                  >
                    Test Windows Authentication
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Enter Username"
                    variant="outlined"
                    name="username"
                    value={formData.username}
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
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Enter Password"
                    variant="outlined"
                    name="testPassword"
                    value={formData.testPassword}
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
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      borderColor: "var(--btn-bg)",
                      padding: "0.5rem 1.5rem",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        borderColor: "var(--primary-color)",
                        transform: "translateY(5px)",
                        color: "var(--text-color)",
                      },
                    }}
                  >
                    Devices 2FA
                  </Button>
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
