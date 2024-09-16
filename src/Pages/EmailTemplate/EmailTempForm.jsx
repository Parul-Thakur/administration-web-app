import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveModal from "../../Components/SaveModal";

export default function EmailTempForm({ isEditMode, existingData, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    subject: "",
    message: "",
    sign: "",
  });

  useEffect(() => {
    if (isEditMode && existingData) {
      setFormData(existingData);
    }
  }, [isEditMode, existingData]);

  const handleButtonClick = (textToAdd) => {
    setFormData((prevData) => ({
      ...prevData,
      message: prevData.message + textToAdd,
    }));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      message: value,
    });
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    onSubmit(formData);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Form submission canceled");
  };
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"], // Add image button here
      ["clean"],
    ],
  };
  return (
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
          color: "var(--text-grey)",
        }}
      >
        <Typography variant="h10" component="h4" gutterBottom>
          {isEditMode ? `Edit User: ${formData.name}` : "Email Template Editor"}
        </Typography>
      </Box>
      {/* User Details Section */}
      {/* <Typography
        variant="body2"
        sx={{
          fontSize: "0.8rem",
          color: "var(--text-grey)",
          padding: "2rem 0 0 2rem",
          backgroundColor: "var(--color)",
        }}
      >
        Device Detail
      </Typography> */}
      <Box
        sx={{
          padding: "3rem",
          backgroundColor: "var(--color)",
          color: "var(--text-grey)",
          borderRadius: " 1rem  ",
          boxShadow: "var(--box-shadow)",
        }}
      >
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
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

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                disabled
                size="small"
                label="Email Type"
                variant="outlined"
                name="type"
                value={isEditMode ? formData.type : "New Users"}
                InputProps={{
                  style: {
                    fontSize: "0.8rem",
                    color: "var(--text-head)",
                    fontWeight: "bold",
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
                    borderColor: "var(--primary-color)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="Subject"
                variant="outlined"
                name="subject"
                value={formData.subject}
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
                      borderColor: "var(--grey)", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--primary-color)", // Hover border color
                    },
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--primary-color)", // Focused border color
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.checkbox}
                        onChange={handleChange}
                        name="checkbox"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                          padding: 1,
                        }}
                      />
                    }
                    label="Use this as default tempelate for new users"
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
          </Grid>
        </form>
      </Box>
      {/* <hr
        sx={{
          borderColor: "var(--grey)",
          borderWidth: "1px",
          width: "100%",
        }}
        style={{
          borderStyle: "solid",
          opacity: 0.1,
        }}
      /> */}

      {/* Option Section ==========================================*/}
      <Box
        sx={{
          padding: "3rem",
          backgroundColor: "var(--color)",
          color: "var(--text-grey)",
          borderRadius: "1rem ",
          boxShadow: "var(--box-shadow)",
          margin: "2rem 0 0",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} md={9}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.8rem",
                    color: "var(--text-grey)",
                    padding: "1rem 0",
                    backgroundColor: "var(--color)",
                  }}
                >
                  Message
                </Typography>
                <ReactQuill
                  value={formData.message}
                  onChange={handleQuillChange}
                  modules={modules}
                  style={{ height: "15rem" }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.7rem",
                    color: "var(--text-grey)",
                    padding: "1rem 0",
                    textAlign: "center",
                    backgroundColor: "var(--color)",
                  }}
                >
                  User Info Options
                </Typography>
                <Grid container direction="column" spacing={1}>
                  <Button
                    variant="outlined"
                    sx={{
                      margin: "0 10% 5%",
                      fontSize: "0.7rem",
                      color: "var(--text-color)",
                      borderColor: "var(--btn-bg)",
                      padding: "0.8rem 0",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        borderColor: "var(--btn-bg)",
                        transform: "translateY(5px)",
                        color: "var(--text-grey)",
                      },
                    }}
                    onClick={() => handleButtonClick("Full Name ")}
                  >
                    Full Name
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      margin: "0 10% 5%",
                      fontSize: "0.7rem",
                      color: "var(--text-color)",
                      borderColor: "var(--btn-bg)",
                      padding: "0.8rem 0",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        borderColor: "var(--btn-bg)",
                        transform: "translateY(5px)",
                        color: "var(--text-grey)",
                      },
                    }}
                    onClick={() => handleButtonClick("User Logon ")}
                  >
                    User Logon
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      margin: "0 10% 5%",
                      fontSize: "0.7rem",
                      color: "var(--text-color)",
                      borderColor: "var(--btn-bg)",
                      padding: "0.8rem 0",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        borderColor: "var(--btn-bg)",
                        transform: "translateY(5px)",
                        color: "var(--text-grey)",
                      },
                    }}
                    onClick={() => handleButtonClick("First Access Key ")}
                  >
                    First Access Key
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      margin: "0 10%",
                      fontSize: "0.7rem",
                      color: "var(--text-color)",
                      borderColor: "var(--btn-bg)",
                      padding: "0.8rem 0",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        borderColor: "var(--btn-bg)",
                        transform: "translateY(5px)",
                        color: "var(--text-grey)",
                      },
                    }}
                    onClick={() => handleButtonClick("pin ")}
                  >
                    pin
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            padding: "5rem 0rem 0",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                label="Signature"
                variant="outlined"
                name="sign"
                value={formData.sign}
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
                  marginTop: "2rem", // Add top margin to separate from the message
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Form Actions */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: " 3rem 0 1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 2rem",
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
                backgroundColor: "var(--grey)", // Hover effect
              },
            }}
            onClick={handleSubmit}
          >
            {isEditMode ? "Update" : "Save"}
          </Button>

          <SaveModal
            isOpen={isModalOpen}
            onClose={handleClose}
            modalTitle={isEditMode ? "Confirm Update" : "Confirm Addition"}
            modalContent={
              isEditMode
                ? "Are you sure you want to update this item? Please ensure the changes are correct before proceeding."
                : "Are you sure you want to add this item? Please review the details before confirming."
            }
            pageType={isEditMode ? "edit" : "add"}
            isNoNav={false}
            isError={false}
          />
        </Box>
      </Box>
    </Container>
  );
}
