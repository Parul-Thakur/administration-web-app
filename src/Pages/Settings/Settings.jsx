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
  Paper,
} from "@mui/material";

import SaveModal from "../../Components/SaveModal";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";

const printJob = ["Oldest to Newest", "Newest to Oldest"];

export default function Settings() {
  const [formData, setFormData] = useState({
    hours: "",
    maxLogin: "",
    accessC: "",
    pinL: "",
    createUser: false,
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
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
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
          {/*  ==========================Server Configuration====================================== */}
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-grey)",
            }}
          >
            <Typography variant="h8" component="h4" gutterBottom>
              Server Configuration
            </Typography>
          </Box>
          <form>
            <Box
              sx={{
                padding: "3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
                borderRadius: " 1rem  ",
                boxShadow: "var(--box-shadow)",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      }}
                    >
                      Print Job Display Order
                    </InputLabel>
                    <Select
                      size="small"
                      name="printJob"
                      value={formData.printJob}
                      onChange={handleChange}
                      label=" Print Job Display Order"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
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
                          color: "var(--text-grey)", // Icon color
                        },
                      }}
                    >
                      {printJob.map((type) => (
                        <MenuItem
                          key={type}
                          value={type}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                            backgroundColor: "var(--color)",
                          }}
                        >
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Hours To Hold*"
                    variant="outlined"
                    name="hours"
                    value={formData.hours}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
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
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Max Login Attempts*"
                    variant="outlined"
                    name="maxLogin"
                    value={formData.maxLogin}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
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
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Access Code Length*"
                    variant="outlined"
                    name="accessC"
                    value={formData.accessC}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
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
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Pin Length*"
                    variant="outlined"
                    name="pinL"
                    value={formData.pinL}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
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
                <Grid item xs={12} md={4}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.createUser}
                          onChange={handleChange}
                          name="createUser"
                          sx={{
                            color: "var(--text-grey)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="Create user at first print"
                      labelPlacement="end"
                      sx={{
                        color: "var(--text-grey)",
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
          </form>
        </Container>
      </motion.div>
    </>
  );
}
