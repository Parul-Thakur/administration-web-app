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

const azureType = [
  { value: "A1", label: "Email" },
  { value: "A2", label: "Files" },
  { value: "A3", label: "Email and Files" },
];
export default function WebSetting() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    azureType: "A1",
    accEmail: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    // onSubmit(formData);
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
              Office 365 Account
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
                <Grid item xs={12}>
                  <ReportRadioBtn
                    label="Azure Permission Type"
                    options={azureType}
                    selectedValue={formData.azureType}
                    handleChange={handleChange}
                    name="azureType"
                    // disabledOptions={["A2", "A3"]} 
                  />
                </Grid>
              </Grid>
              {formData.azureType === "A1" && (
                <Grid container spacing={4} mt={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Account Email"
                      variant="outlined"
                      name="accEmail"
                      value={formData.accEmail}
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
                      sx={{ fontSize: "0.8rem" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "0.7rem",
                        backgroundColor: "var(--btn-bg)",
                        color: "var(--btn-text)",
                        padding: "0.5rem 1rem",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Remove Account
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Box>
          </form>
        </Container>
      </motion.div>
    </>
  );
}
