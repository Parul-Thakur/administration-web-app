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

export default function CustomMenu() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    doc: "",
    history: "",
    uPrint: "",
    rPrint:"",
    ePrint:"",
    account:"",
    pricing:"",
    accessC:"",

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
             Custom Menu Names
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
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Documents"
                    variant="outlined"
                    name="doc"
                    value={formData.doc || "Documents"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="History"
                    variant="outlined"
                    name="history"
                    value={formData.history || "History"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Upload Print"
                    variant="outlined"
                    name="uPrint"
                    value={formData.uPrint || "Upload Print"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Remote Print"
                    variant="outlined"
                    name="rPrint"
                    value={formData.rPrint || "Remote Print"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Email Print"
                    variant="outlined"
                    name="ePrint"
                    value={formData.ePrint || "Email Print"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Account"
                    variant="outlined"
                    name="account"
                    value={formData.account || "Account"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Pricing"
                    variant="outlined"
                    name="pricing"
                    value={formData.pricing || "Pricing"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} >
                  <TextField
                    fullWidth
                    size="small"
                    label="Access Control"
                    variant="outlined"
                    name="accessC"
                    value={formData.accessC || "Access Control"}
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
                        borderColor: "var(--btn-bg)", 
                      },
                    }}
                  />
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
                Confirm
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
