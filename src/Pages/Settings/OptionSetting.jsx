import React, { useState } from "react";
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

import SaveModal from "../../Components/SaveModal";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";
import { motion } from "framer-motion";
const type = ["JKS", "PKCS12", "JCEKS"];
const sendMail = [
  "New Users",
  "New F.A.K.",
  "New PIN",
  "Failover Alert",
  "Password Reset",
];
export default function OptionSetting() {
  const [formData, setFormData] = useState({
    emailS: true,
    ssl: false,
    server: "",
    port: "",
    address: "",
    emailD: "",
    eAuth: false,
    eUser: "",
    ePassword: "",
    uploadFile: null,
    httpsPort: "",
    alias: "",
    sslPasswrod: "",
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
              Options
            </Typography>
          </Box>
          {/* ==========================Options====================================== */}
          <form>
            <Box
              sx={{
                padding: "3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-color)",
                borderRadius: " 1rem  ",
                boxShadow: "var(--box-shadow)",
              }}
            >
              <>
                <Grid
                  container
                  // sx={{ backgroundColor: "blue" }}
                >
                  <Grid item xs={12} md={6}>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.emailS}
                            onChange={handleChange}
                            name="emailS"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                              padding: 1,
                            }}
                          />
                        }
                        label="Email Settings"
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

                  <Grid item xs={12} md={6}>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.ssl}
                            onChange={handleChange}
                            name="ssl"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                              padding: 1,
                            }}
                          />
                        }
                        label="SSL Certificate"
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

                  {formData.emailS && (
                    <Box
                      sx={{
                        width: "100%",
                        margin: "2rem 2rem 0",
                        padding: "1rem",
                        backgroundColor: "var(--color)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.8rem",
                          color: "var(--secondary-color)",
                          // padding: "2rem 0 0 2rem",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        User Details
                      </Typography>
                      <Grid
                        container
                        spacing={4}
                        fullWidth
                        sx={{
                          border: "1px solid var(--grey)",
                          borderRadius: "8px",
                          marginBottom: "2rem",
                          padding: "2rem 1rem 3rem 0",
                        }}
                      >
                        <>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              label="SMTP Server*"
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
                                fontSize: "0.8rem",
                                "& .MuiOutlinedInput-root": {
                                  "& fieldset": {
                                    borderColor: "var(--grey)",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "var(--primary-color)",
                                  },
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Port*"
                              variant="outlined"
                              name="port"
                              value={formData.port}
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Default From Address"
                              variant="outlined"
                              name="address"
                              value={formData.address}
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Default Email Domain"
                              variant="outlined"
                              name="emailD"
                              value={formData.emailD}
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
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
                                    checked={formData.eAuth}
                                    onChange={handleChange}
                                    name="eAuth"
                                    sx={{
                                      color: "var(--text-color)",
                                      "&.Mui-checked": {
                                        color: "var(--btn-bg)",
                                      },
                                      padding: 1,
                                    }}
                                  />
                                }
                                label="Email Authenticated"
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
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Email User*"
                              variant="outlined"
                              disabled={!formData.eAuth}
                              name="eUser"
                              value={formData.eUser}
                              onChange={handleChange}
                              InputProps={{
                                style: {
                                  fontSize: "0.8rem",
                                  color: "var(--text-color)",
                                  backgroundColor: !formData.eAuth
                                    ? "var(--grey)"
                                    : "transparent",
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Email Password *"
                              variant="outlined"
                              disabled={!formData.eAuth}
                              name="ePassword"
                              value={formData.ePassword}
                              onChange={handleChange}
                              InputProps={{
                                style: {
                                  fontSize: "0.8rem",
                                  color: "var(--text-color)",
                                  backgroundColor: !formData.eAuth
                                    ? "var(--grey)"
                                    : "transparent",
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            {/* First line with "Send System Email To" */}
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item xs={12}>
                                <Typography
                                  variant="h7"
                                  component="h4"
                                  sx={{
                                    fontSize: "0.8rem",
                                    fontWeight: "400",
                                    color: "var(--text-color)",
                                  }}
                                >
                                  Send System Email To
                                </Typography>
                              </Grid>
                            </Grid>

                            {/* Second line with checkboxes */}
                            <Grid
                              container
                              alignItems="center"
                              spacing={1}
                              sx={{ marginTop: "0.5rem" }}
                            >
                              {sendMail.map((type) => (
                                <Grid item xs={6} md={2.4} key={type}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        name={type}
                                        checked={formData[type] || false}
                                        onChange={handleChange}
                                        sx={{
                                          color: "var(--text-color)",
                                          "&.Mui-checked": {
                                            color: "var(--btn-bg)",
                                          },
                                          padding: 1,
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
                        </>
                      </Grid>
                    </Box>
                  )}
                  {formData.ssl && (
                    <Box
                      sx={{
                        width: "100%",
                        margin: "2rem 2rem 0",
                        padding: "1rem",
                        backgroundColor: "var(--color)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.8rem",
                          color: "var(--secondary-color)",
                          // padding: "2rem 0 0 2rem",
                          backgroundColor: "var(--color)",
                        }}
                      >
                        Certificate Details
                      </Typography>
                      <Grid
                        container
                        spacing={4}
                        fullWidth
                        sx={{
                          border: "1px solid var(--grey)",
                          borderRadius: "8px",
                          marginBottom: "2rem",
                          padding: "2rem 2rem 3rem 0",
                        }}
                      >
                        <>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              variant="outlined"
                              value={
                                formData.uploadFile
                                  ? formData.uploadFile.name
                                  : ""
                              }
                              placeholder="No file chosen"
                              InputProps={{
                                readOnly: true,
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <input
                              accept="*"
                              style={{ display: "none" }}
                              id="upload-file"
                              type="file"
                              name="uploadFile"
                              onChange={handleChange}
                            />
                            <label htmlFor="upload-file">
                              <Button
                                variant="outlined"
                                component="span"
                                sx={{
                                  border: "1px solid var(--text-color)",
                                  color: "var(--text-color)",
                                  textTransform: "none",
                                  fontSize: "0.8rem",
                                  padding: "8px 16px",
                                  "&:hover": {
                                    border: "none",
                                    backgroundColor: "var(--hover)",
                                    color: "var(--color)",
                                  },
                                }}
                              >
                                Choose File
                              </Button>
                            </label>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel
                                style={{
                                  fontSize: "0.8rem",
                                  color: "var(--text-color)",
                                }}
                              >
                                Type*
                              </InputLabel>
                              <Select
                                size="small"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                label=" Print Job Display Order"
                                style={{
                                  fontSize: "0.8rem",
                                  color: "var(--text-color)",
                                }}
                                sx={{
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "var(--grey) !important", // Force white border color
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor:
                                        "var(--primary-color)!important", // Ensure focused border is also white
                                    },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor:
                                      "var(--primary-color) !important", // Ensure hover border is also white
                                  },
                                  "& .MuiInputLabel-root": {
                                    color: "var(--text-head)", // Label color
                                  },
                                  "& .MuiSelect-icon": {
                                    color: "var(--text-color)", // Icon color
                                  },
                                }}
                              >
                                {type.map((t) => (
                                  <MenuItem
                                    key={t}
                                    value={t}
                                    style={{
                                      fontSize: "0.8rem",
                                      color: "var(--text-color)",
                                      backgroundColor: "var(--color)",
                                    }}
                                  >
                                    {t}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>

                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Https Port*"
                              variant="outlined"
                              name="httpsPort"
                              value={formData.httpsPort}
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Alias*"
                              variant="outlined"
                              name="alias"
                              value={formData.alias}
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              size="small"
                              label="Password*"
                              type="password"
                              variant="outlined"
                              name="sslPasswrod"
                              value={formData.sslPasswrod}
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
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "var(--primary-color)", // Focused border color
                                  },
                              }}
                            />
                          </Grid>
                        </>
                      </Grid>
                    </Box>
                  )}
                </Grid>
              </>
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
