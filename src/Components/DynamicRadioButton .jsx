import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Grid,
  TextField,
  Typography,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const disabledaccounts = ["Import", " Do not Import", "Import and Lock"];

export default function DynamicRadioButton({ options, label }) {
  const [formData, setFormData] = useState({
    selectedOption: "",
    name: "",
    newusersemailtemplate: "",
    runType: "option1",
    specificuser: "",
    searchuser: false,
    accesskey: false,
    pin: false,
    sourceType: "optionA",
    filepath: "",
    header: "",
    userlogon: "",
    csvname: "",
    email: "",
    csvdescription: "",
    csvaccesscode: "",
    csvdepartment: "",
    csvcostcode: "",
    server: "",
    useraccount: "",
    ssl: false,
    password: "",
    confirmpassword: "",
    searchroot: "",
    searchfilter: "",
    disabledaccounts: "",
    description: false,
    accesscode: false,
    department: false,
    costcode: false,
    descriptionText: "",
    accesscodeText: "",
    departmentText: "",
    costcodeText: "",
    ipaddress: "",
    start: "",
    end: "",
  });

  const [selectedValue, setSelectedValue] = useState(
    formData.selectedOption || ""
  );
  useEffect(() => {
    setSelectedValue(formData.selectedOption || "");
  }, [formData.selectedOption]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (name === "selectedOption") {
      setSelectedValue(value);
    }
  };
  const renderAdditionalFields = () => {
    const commonTextFieldProps = {
      InputLabelProps: {
        shrink: true,
        style: {
          fontSize: "0.8rem",
          color: "var(--text-grey)",
        },
      },
      fullWidth: true,
      InputProps: {
        style: {
          fontSize: "0.8rem",
          color: "var(--text-grey)",
          height: "2.5rem",
        },
      },
      sx: {
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
      },
    };
    switch (selectedValue) {
      case "optionA": // CSV File
        return (
          <>
            <Box
              sx={{
                backgroundColor: "var(--background-color)",
                padding: "1rem",
                margin: "2rem 0 0",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                CSV Properties
              </Typography>
            </Box>
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
                    label="File path*"
                    variant="outlined"
                    name="filepath"
                    value={formData.filepath}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Separator"
                    variant="outlined"
                    value=";"
                    InputProps={{
                      readOnly: true,
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                        border: "1px solid var(--grey)", //
                        backgroundColor: "transparent",
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.header}
                        onChange={handleChange}
                        name="header"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="First line is a header"
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
            </Box>
            <Box
              sx={{
                backgroundColor: "var(--background-color)",
                padding: "1rem",
                margin: "2rem 0 0",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                CSV Fields
              </Typography>
            </Box>
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
                    label="User Logon"
                    variant="outlined"
                    name="userlogon"
                    value={formData.userlogon}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Name"
                    variant="outlined"
                    name="csvname"
                    value={formData.csvname}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Description"
                    variant="outlined"
                    name="csvdescription"
                    value={formData.csvdescription}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Access Code"
                    variant="outlined"
                    name="csvaccesscode"
                    value={formData.csvaccesscode}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Department"
                    variant="outlined"
                    name="csvdepartment"
                    value={formData.csvdepartment}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Cost Code"
                    variant="outlined"
                    name="csvcostcode"
                    value={formData.csvcostcode}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        );
    }
    switch (selectedValue) {
      case "optionB":
        return (
          <>
            {/*======================= Active Directory Properties Section================================ */}
            <Box
              sx={{
                backgroundColor: "var(--search-bg)",
                padding: "1rem",

                marginBottom: "-1px",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                Active Directory Properties
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem 3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Server*"
                    variant="outlined"
                    name="server"
                    value={formData.server}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="User Account*"
                    variant="outlined"
                    name="useraccount"
                    value={formData.useraccount}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Password*"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={formData.password}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Confirm Password*"
                    variant="outlined"
                    name="confirmpassword"
                    type="password"
                    value={formData.confirmpassword}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Search Root *"
                    variant="outlined"
                    name="searchroot"
                    value={formData.searchroot}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Search Filter"
                    variant="outlined"
                    name="searchfilter"
                    value={formData.searchfilter}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.ssl}
                        onChange={handleChange}
                        name="ssl"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Use SSL Connection"
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
            </Box>
            {/*======================= Active Directory Configuration Section================================ */}
            <Box
              sx={{
                backgroundColor: "var(--search-bg)",
                padding: "1rem",

                marginBottom: "-1px",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                Active Directory Configuration
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem 3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
              }}
            >
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3rem",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.8rem",
                      color: "var(--text-grey)",
                    }}
                  >
                    Disabled Accounts
                  </Typography>
                  <FormControl
                    variant="outlined"
                    sx={{
                      flexGrow: 1,
                      maxWidth: "30rem",
                    }}
                  >
                    <InputLabel
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      }}
                    >
                      Disabled Accounts
                    </InputLabel>
                    <Select
                      size="small"
                      name="disabledaccounts"
                      value={formData.disabledaccounts}
                      onChange={handleChange}
                      label="Do not import"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--grey) !important",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-color) !important",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-color) !important",
                        },
                        "& .MuiInputLabel-root": {
                          color: "var(--text-head)",
                        },
                        "& .MuiSelect-icon": {
                          color: "var(--text-grey)",
                        },
                      }}
                    >
                      {disabledaccounts.map((a) => (
                        <MenuItem
                          key={a}
                          value={a}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
                            backgroundColor: "var(--color)",
                          }}
                        >
                          {a}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Box>
            {/*======================= Optional Fields Section================================ */}
            <Box
              sx={{
                backgroundColor: "var(--search-bg)",
                padding: "1rem",

                marginBottom: "-1px",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                Optional Fields
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem 3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.description}
                        onChange={handleChange}
                        name="description"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Description"
                    labelPlacement="end"
                    sx={{
                      color: "var(--text-grey)",
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": {
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                  {formData.description && (
                    <TextField
                      name="descriptionText"
                      value={formData.descriptionText}
                      onChange={handleChange}
                      placeholder="Enter description"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{
                        marginTop: "0.5rem",
                        "& .MuiInputBase-root": {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                    />
                  )}
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.accesscode}
                        onChange={handleChange}
                        name="accesscode"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Access Code"
                    labelPlacement="end"
                    sx={{
                      color: "var(--text-grey)",
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": {
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                  {formData.accesscode && (
                    <TextField
                      name="accesscodeText"
                      value={formData.accesscodeText}
                      onChange={handleChange}
                      placeholder="Enter access code"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{
                        marginTop: "0.5rem",
                        "& .MuiInputBase-root": {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                    />
                  )}
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.department}
                        onChange={handleChange}
                        name="department"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Department"
                    labelPlacement="end"
                    sx={{
                      color: "var(--text-grey)",
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": {
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                  {formData.department && (
                    <TextField
                      name="departmentText"
                      value={formData.departmentText}
                      onChange={handleChange}
                      placeholder="Enter department"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{
                        marginTop: "0.5rem",
                        "& .MuiInputBase-root": {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                    />
                  )}
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.costcode}
                        onChange={handleChange}
                        name="costcode"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Cost Code"
                    labelPlacement="end"
                    sx={{
                      color: "var(--text-grey)",
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": {
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                  {formData.costcode && (
                    <TextField
                      name="costcodeText"
                      value={formData.costcodeText}
                      onChange={handleChange}
                      placeholder="Enter cost code"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{
                        marginTop: "0.5rem",
                        "& .MuiInputBase-root": {
                          fontSize: "0.8rem",
                          color: "var(--text-grey)",
                        },
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
          </>
        );
    }
    switch (selectedValue) {
      case "1": // CSV File
        return (
          <>
            <Box
              sx={{
                backgroundColor: "var(--search-bg)",
                padding: "1rem",
                marginBottom: "-1px",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                CSV Properties
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem 3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="File path*"
                    variant="outlined"
                    name="filepath"
                    value={formData.filepath}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Separator"
                    variant="outlined"
                    value=";"
                    InputProps={{
                      readOnly: true,
                      style: {
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
                        border: "1px solid var(--grey)", //
                        backgroundColor: "transparent",
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.header}
                        onChange={handleChange}
                        name="header"
                        sx={{
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="First line is a header"
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
            </Box>
            <Box
              sx={{
                backgroundColor: "var(--search-bg)",
                padding: "1rem",
                marginBottom: "-1px",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                CSV Fields
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem 3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="IP Address*"
                    variant="outlined"
                    name="ipaddress"
                    value={formData.ipaddress}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        );
    }
    switch (selectedValue) {
      case "2":
        return (
          <>
            {/*======================= IP Range Section================================ */}
            <Box
              sx={{
                backgroundColor: "var(--search-bg)",
                padding: "1rem",

                marginBottom: "-1px",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                IP Range
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem 3rem",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Start*"
                    variant="outlined"
                    name="start"
                    value={formData.start}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="End*"
                    variant="outlined"
                    name="end"
                    value={formData.end}
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
                        borderColor: "var(--primary-color)",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        );
    }
    switch (selectedValue) {
      case "option2": // One Time
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Start Date"
                type="date"
                {...commonTextFieldProps}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Start Time"
                type="time"
                {...commonTextFieldProps}
              />
            </Grid>
          </Grid>
        );
      case "option3": // Hourly
      case "option4": // Daily
      case "option5": // Weekly
      case "option6": // Monthly
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Start Date"
                type="date"
                {...commonTextFieldProps}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="End Date"
                type="date"
                {...commonTextFieldProps}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Time" type="time" {...commonTextFieldProps} />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <FormLabel
          component="legend"
          sx={{
            fontSize: "0.8rem",
            color: "var(--text-grey)",
            marginRight: "1rem",
          }}
        >
          {label}
        </FormLabel>
        <RadioGroup
          row
          aria-label="options"
          name="selectedOption"
          value={selectedValue}
          onChange={handleChange}
          sx={{
            gap: "1rem",
            fontSize: "0.8rem",
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  size="small"
                  sx={{
                    transform: "scale(1.2)!important",
                    color: "var(--text-grey)",
                    "&.Mui-checked": {
                      color: "var(--btn-bg)",
                    },
                  }}
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </Box>
      <Box sx={{ marginTop: "1rem" }}>{renderAdditionalFields()}</Box>
    </FormControl>
  );
}

DynamicRadioButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  formData: PropTypes.shape({
    selectedOption: PropTypes.string,
    filepath: PropTypes.string,
    header: PropTypes.bool,
    userlogon: PropTypes.string,
    csvname: PropTypes.string,
    email: PropTypes.string,
    csvdescription: PropTypes.string,
    csvaccesscode: PropTypes.string,
    csvdepartment: PropTypes.string,
    csvcostcode: PropTypes.string,
    server: PropTypes.string,
    useraccount: PropTypes.string,
    ssl: PropTypes.bool,
    password: PropTypes.string,
    confirmpassword: PropTypes.string,
    searchroot: PropTypes.string,
    searchfilter: PropTypes.string,
    disabledaccounts: PropTypes.string,
    description: PropTypes.bool,
    accesscode: PropTypes.bool,
    department: PropTypes.bool,
    costcode: PropTypes.bool,
    descriptionText: PropTypes.string,
    accesscodeText: PropTypes.string,
    departmentText: PropTypes.string,
    costcodeText: PropTypes.string,
    ipaddress: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};
