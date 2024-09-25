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
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import SaveModal from "../../../Components/Common/SaveModal";
const menu = [
  "Enable Upload Print",
  "Enable Email Print",
  "Enable Remote Print",
  "Enable Access Code",
  "Display Pricing Schemes",
  "Enable Account Balance/Top Up",
  "Enable PIN",
  "Enable First Access Key",
];
export default function Customization() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    doc: "",
    print: "",
    remote: "",
    loginInfo:false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file.name); // Display the file name in the text field
    }
  };
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
              Customization
            </Typography>
          </Box>

          <form>
            <Box
              sx={{
                padding: "3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-color)",
                borderRadius: "1rem",
                boxShadow: "var(--box-shadow)",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                style={{
                  // fontWeight: 500,
                  fontSize: ".8rem",
                }}
              >
                Customize Caleta Web Interface Logo
              </Typography>

              <Grid container spacing={4}>
                {/* TextField to Display Selected Image Path */}
                <Grid item xs={12} md={6} mt={4}>
                  <TextField
                    size="small"
                    label="Selected Image"
                    value={selectedImage || ""}
                    placeholder="No image selected"
                    InputProps={{
                      readOnly: true,
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                        height: "40px",
                      },
                    }}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      flex: 1,
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                      },
                    }}
                  />

                  {/* Optional: Display message when an image is selected */}
                  {selectedImage && (
                    <Typography
                      variant="caption"
                      sx={{ color: "textSecondary", mt: 1 }}
                    >
                      {selectedImage} has been selected
                    </Typography>
                  )}
                </Grid>

                {/* Upload Button */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  mt={4}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      backgroundColor: "var(--btn-bg)",
                      color: "var(--btn-text)",
                      "&:hover": {
                        backgroundColor: "var(--hover)",
                      },
                    }}
                  >
                    Upload Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageUpload} // Handle file selection
                    />
                  </Button>
                </Grid>
              </Grid>
            </Box>
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
                Customization
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
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                style={{
                  // fontWeight: 500,
                  fontSize: ".8rem",
                }}
              >
                Modify page descriptions and customize the navigation menu names
                as needed.
              </Typography>
              <Grid container spacing={4} mt={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Document Page "
                    variant="outlined"
                    name="doc"
                    value={formData.doc}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                        height: "40px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      flex: 1,
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Upload Print Page"
                    variant="outlined"
                    name="print"
                    value={formData.print}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                        height: "40px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      flex: 1,
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Remote Print Page"
                    variant="outlined"
                    name="remote"
                    value={formData.remote}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                        height: "40px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                    }}
                    sx={{
                      flex: 1,
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--btn-bg)",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                style={{
                  // fontWeight: 500,
                  fontSize: ".8rem",
                  margin: "2rem 0 0",
                }}
              >
                Menu Customization
              </Typography>
              <Grid item xs={12}>
                <Grid container>
                  {menu.map((type) => (
                    <Grid
                      item
                      xs={6}
                      md={3}
                      key={type}
                      sx={{ padding: "1rem 0" }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={type}
                            checked={formData[type] || false}
                            onChange={handleChange}
                            sx={{
                              color: "var(--text-color)",
                              padding: 1,
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label={type}
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
                  ))}
                </Grid>
              </Grid>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                style={{
                  // fontWeight: 500,
                  fontSize: ".8rem",
                  margin: "2rem 0 0",
                }}
              >
                Login Customization
              </Typography>
              <Grid item mt={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.loginInfo}
                      onChange={handleChange}
                      name="loginInfo"
                      sx={{
                        color: "var(--text-color)",
                        "&.Mui-checked": {
                          color: "var(--btn-bg)",
                        },
                        padding: 1,
                      }}
                    />
                  }
                  label="Enable loginInfo"
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
              <Grid item xs={12} md={6} mt={2}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  name="server"
                  value={formData.server}
                  onChange={handleChange}
                  placeholder="*** Enter your access code and the 4-digit PIN number you received via email. "
                  InputProps={{
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
                      borderColor: "var(--primary-color)",
                    },
                  }}
                />
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
                Apply Customization
              </Button>
              <SaveModal
                isOpen={isModalOpen}
                onClose={handleClose}
                modalTitle="Confirm Save Customization"
                modalContent="You have made changes to your customization. Do you want to save these changes?"
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
