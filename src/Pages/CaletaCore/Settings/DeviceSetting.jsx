import React, { useState } from "react";
import {
  Container,
  Grid,
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

import { motion } from "framer-motion";
import SaveModal from "../../../Components/Common/SaveModal";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
const aCode = [
  "Window Authentication ",
  "First Acccess Key",
  "Window Authentication and First Access Key",
];

export default function DeviceSetting() {
  const [formData, setFormData] = useState({
    aCode: "",
    fPin: "",
    jobPrice: "",
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
              Device Settings
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
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      }}
                    >
                      Access Code Registration
                    </InputLabel>
                    <Select
                      size="small"
                      name="aCode"
                      value={formData.aCode}
                      onChange={handleChange}
                      label="Access Code Registration"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--grey) !important", // Force white border color
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-color)!important", // Ensure focused border is also white
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-color) !important", // Ensure hover border is also white
                        },
                        "& .MuiInputLabel-root": {
                          color: "var(--text-head)", // Label color
                        },
                        "& .MuiSelect-icon": {
                          color: "var(--text-color)", // Icon color
                        },
                      }}
                    >
                      {aCode.map((a) => (
                        <MenuItem
                          key={a}
                          value={a}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                            backgroundColor: "var(--color)",
                          }}
                        >
                          {a}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.fPin}
                          onChange={handleChange}
                          name="fPin"
                          sx={{
                            color: "var(--text-color)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="Display 'Forgot Pin ?' Option"
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
                <Grid item xs={12} md={3}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.jobPrice}
                          onChange={handleChange}
                          name="jobPrice"
                          sx={{
                            color: "var(--text-color)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="Show job price on device"
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
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                        padding: "2rem 0 1rem 2rem",
                        backgroundColor: "var(--color)",
                        textAlign: "left",
                      }}
                    >
                      Global Settings
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12} md={3}>
                        <Button
                          variant="outlined"
                          sx={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                            borderColor: "var(--btn-bg)",
                            padding: "0.5rem 1rem",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                              borderColor: "var(--btn-bg)",
                              transform: "translateY(5px)",
                              color: "var(--text-color)",
                            },
                          }}
                          // onClick={handleCancel}
                        >
                          Change Fleet Password
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Button
                          variant="outlined"
                          sx={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)", // Button text color
                            borderColor: "var(--btn-bg)",
                            padding: "0.5rem 1rem", // Button border color
                            transition: "transform 0.2s ease",
                            "&:hover": {
                              borderColor: "var(--btn-bg)",
                              transform: "translateY(5px)",
                              color: "var(--text-color)", // Button hover background color
                            },
                          }}
                          // onClick={handleCancel}
                        >
                          Device Authentication
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Button
                          variant="outlined"
                          sx={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)", // Button text color
                            borderColor: "var(--btn-bg)",
                            padding: "0.5rem 1rem", // Button border color
                            transition: "transform 0.2s ease",
                            "&:hover": {
                              borderColor: "var(--btn-bg)",
                              transform: "translateY(5px)",
                              color: "var(--text-color)", // Button hover background color
                            },
                          }}
                          // onClick={handleCancel}
                        >
                          Devices 2FA
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
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
