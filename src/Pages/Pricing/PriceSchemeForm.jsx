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
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveModal from "../../Components/SaveModal";
import ActionButtonWithModal from "../../Components/ActionButtonWithModal/ActionButtonWithModal";

export default function PriceSchemeForm({
  isEditMode,
  existingData,
  onSubmit,
}) {
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
  const labelsLeft = [
    ["A3 Sheet", "A4 Sheet"],
    ["A3 Mono Page", "A4 Mono Page"],
    ["A3 Colour Page", "A4 Colour Page"],
  ];
  const labelsRight1 = [["Price per job", "Price per page"]];
  const labelsRight2 = [["Price per job", "Price per page"]];

  const renderMoneyFields = (labels) => {
    return (
      <Grid container spacing={2}>
        {labels.map((rowLabels, rowIndex) => (
          <Grid container item spacing={2} key={rowIndex}>
            {rowLabels.map((label, colIndex) => (
              <Grid item xs={6} key={colIndex}>
                <FormControl
                  fullWidth
                  sx={{
                    m: 1,
                    border: "1px solid var(--grey)",
                    borderRadius: "4px",
                  }}
                >
                  <InputLabel
                    htmlFor={`outlined-adornment-amount-${rowIndex}-${colIndex}`}
                    sx={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
                    }}
                  >
                    {label}
                  </InputLabel>
                  <OutlinedInput
                    id={`outlined-adornment-amount-${rowIndex}-${colIndex}`}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label={label}
                    placeholder="0.00"
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiOutlinedInput-input": {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      },
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
                </FormControl>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    );
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
          {isEditMode ? `Edit Pricing Configuration: ${formData.name}` : "Pricing Configuration"}
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
          </Grid>

          {/* Option Section ==========================================*/}
          <Grid
            container
            sx={{
              backgroundColor: "var(--color)",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: "1rem 3rem",
                  backgroundColor: "var(--color)",
                  color: "var(--text-grey)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2rem",
                    color: "var(--text-grey)",
                    textAlign: "center",
                  }}
                >
                  Print & Copy
                </Typography>
                <Box
                  sx={{
                    border: "1px solid var(--grey)",
                    borderRadius: "8px",
                    padding: "1rem",
                    backgroundColor: "var(--color)",
                  }}
                >
                  {renderMoneyFields(labelsLeft)}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: "1rem 3rem",
                  backgroundColor: "var(--color)",
                  color: "var(--text-grey)",
                  // display: "flex",
                  // flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    color: "var(--text-grey)",
                    textAlign: "center",
                  }}
                >
                  Scan To Email
                </Typography>
                <Box
                  sx={{
                    border: "1px solid var(--grey)",
                    borderRadius: "8px",
                    padding: "1rem",
                    backgroundColor: "var(--color)",
                  }}
                >
                  {renderMoneyFields(labelsRight1)}
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "1rem 3rem",
                  backgroundColor: "var(--color)",
                  color: "var(--text-grey)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    color: "var(--text-grey)",
                    textAlign: "center",
                  }}
                >
                  Scan To Folder
                </Typography>
                <Box
                  sx={{
                    border: "1px solid var(--grey)",
                    borderRadius: "8px",
                    padding: "1rem",
                    backgroundColor: "var(--color)",
                  }}
                >
                  {renderMoneyFields(labelsRight2)}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <div>
            <ActionButtonWithModal
              isEditMode={isEditMode}
              isModalOpen={isModalOpen}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              updateText="Update"
              addText="Add "
              // icon={PersonAddAlt1Icon}
            />
          </div>
        </form>
      </Container>
  );
}
