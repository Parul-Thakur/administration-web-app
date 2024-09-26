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
import ReportRadioBtn from "../../CaletaCore/Reports/ReportRadiobtn";
import SaveModal from "../../../Components/Common/SaveModal";
import CustomCard from "../CustomCard/CustomCard";
const authType = [
  { value: "A1", label: "Access Code and PIN" },
  { value: "A2", label: "Username and PIN" },
  { value: "A3", label: "Windows" },
  { value: "A4", label: "Microsoft SSO" },
  { value: "A5", label: "2FA - PIN Required" },
];
export default function GeneralSetting() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    captcha: true,
    authType: "A1",
    authDomain: "",
    alert: "",
    webPrint: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
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
              General Setting
            </Typography>
          </Box>
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
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    component="h4"
                    gutterBottom
                    style={{
                      // fontWeight: 500,
                      fontSize: ".8rem",
                    }}
                  >
                    Login Verification
                  </Typography>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.captcha}
                          onChange={handleChange}
                          name="captcha"
                          sx={{
                            color: "var(--text-color)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                            padding: 1,
                          }}
                        />
                      }
                      label="Enable Captcha"
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
                  <Typography
                    variant="caption"
                    style={{
                      fontSize: ".7rem",
                    }}
                  >
                    *This feature requires internet access to third party
                    endpoints.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} mt={4}>
                <ReportRadioBtn
                  label="Authentication Type"
                  options={authType}
                  selectedValue={formData.authType}
                  handleChange={handleChange}
                  name="authType"
                />
              </Grid>
              <Grid item xs={12} md={4} mt={4}>
                <TextField
                  fullWidth
                  size="small"
                  label="Authorized Domains"
                  variant="outlined"
                  name="authDomain"
                  value={
                    formData.authDomain ||
                    "intellect.ie:8083, www.intellect.ie:8083"
                  }
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
                        borderColor: "var(--btn-bg)",
                      },
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg)", // Focused border color
                    },
                  }}
                />
                {/* Info line below the field */}
                <Typography
                  variant="caption"
                  sx={{
                    color: "var(--text-grey)",
                    fontSize: "0.7rem",
                    marginTop: "0.25rem",
                    display: "block",
                  }}
                >
                  *Enter comma separated domain values with port number (if
                  necessary).
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} mt={4}>
                <Typography
                  variant="h4"
                  component="h4"
                  gutterBottom
                  style={{
                    // fontWeight: 500,
                    fontSize: ".8rem",
                  }}
                >
                  Warning System
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.alert}
                      onChange={handleChange}
                      name="alert"
                      sx={{
                        color: "var(--text-color)",
                        "&.Mui-checked": {
                          color: "var(--btn-bg)",
                        },
                        padding: 1,
                      }}
                    />
                  }
                  label="Show Alert"
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
                  placeholder="Enter your message..."
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
                        borderColor: "var(--btn-bg)",
                      },
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--btn-bg)",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} mt={4}>
                <Typography
                  variant="h4"
                  component="h4"
                  gutterBottom
                  style={{
                    // fontWeight: 500,
                    fontSize: ".8rem",
                  }}
                >
                  Required Information
                </Typography>
                <Grid item xs={12} md={4} mt={2}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Web Print Queue"
                    variant="outlined"
                    name="webPrint"
                    value={formData.webPrint || "Remote_Print"}
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
                          borderColor: "var(--btn-bg)",
                        },
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--btn-bg)", // Focused border color
                      },
                    }}
                  />
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
                Generic Remote Print
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
              <Grid item xs={12} md={6} mt={4}>
                <CustomCard />
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
                Apply settings
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
