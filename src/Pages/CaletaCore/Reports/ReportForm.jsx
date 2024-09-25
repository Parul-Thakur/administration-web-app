import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import ReportRadioBtn from "./ReportRadiobtn";
import { useParams } from "react-router-dom";
import ActionButtonWithModal from "../../../Components/Common/ActionButtonWithModal/ActionButtonWithModal";

const orderBy = [
  "A4 Color Simplex",
  "A4 Mono Simplex",
  "A3 Color Simplex",
  "A3 Mono Simplex",
  "IP Address",
  "Date",
];
const ReportType = [
  { value: "R1", label: "Generate" },
  { value: "R2", label: "Schedule" },
  { value: "R3", label: "Template" },
];
const UsageBy = [
  { value: "B1", label: "Users" },
  { value: "B2", label: "Devices" },
];
const UsageOptions = [
  { value: "B3", label: "Subgroup" },
  { value: "B4", label: "Detailed" },
];
const Period = [
  { value: "P1", label: "All" },
  { value: "P2", label: "Today" },
  { value: "P3", label: "Last 7 Days" },
  { value: "P4", label: "Last Week" },
  { value: "P5", label: "Last Month" },
  { value: "P6", label: "Last 3 Months" },
  { value: "P7", label: "Last Year" },
  { value: "P8", label: "Year To Date" },
  { value: "P9", label: "Month To Date" },
];
const Period2 = [
  { value: "P1", label: "All" },
  { value: "P10", label: "Custom" },
];
const SubgroupOptions = {
  B1: [
    { value: "S1", label: "Devices" },
    { value: "S2", label: "Departments" },
    { value: "S3", label: "Date" },
  ],
  B2: [
    { value: "S1", label: "Users" },
    { value: "S2", label: "Departments" },
    { value: "S3", label: "Date" },
  ],
};
const DetailedOptions = [
  { value: "D1", label: "All" },
  { value: "D2", label: "Custom" },
];
const Export = [
  { value: "E1", label: "PDF" },
  { value: "E2", label: "CSV" },
];
const Limit = [
  { value: "L1", label: "All" },
  { value: "L2", label: "TOP 25" },
  { value: "L3", label: "TOP 50" },
  { value: "L4", label: "" },
];
const Destination = [
  { value: "D1", label: "Email" },
  { value: "D2", label: "Folder" },
];
const Frequency = [
  { value: "F1", label: "Daily" },
  { value: "F2", label: "Weekly" },
  { value: "F3", label: "Monthly" },
];
export default function ReportForm({ isEditMode, existingData, onSubmit }) {
  const { reportType, rowId } = useParams();
  const [disabledReportTypes, setDisabledReportTypes] = useState([]);

  const [formData, setFormData] = useState({
    selectedOptions: [],
    ip: "",
    print: false,
    copy: false,
    scan: false,
    eprint: false,
    A3: false,
    A4: false,
    mono: false,
    color: false,
    simplex: false,
    duplex: false,
    includeprice: false,
    orderBy: "",
    reportType: "R1",
    usageBy: "B1",
    usageOptions: "",
    period: "P1",
    subgroup: "S1",
    export: "E1",
    detailed: "D1",
    userlogon: "",
    limit: "L1",
    customValue: "",
    destination: "D1",
    frequency: "F1",
  });
  useEffect(() => {
    if (isEditMode && existingData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...existingData,
        reportType:
          existingData.reportType || (reportType === "template" ? "R3" : "R2"),
      }));
      setDisabledReportTypes(
        reportType === "template" ? ["R2", "R1"] : ["R3", "R1"]
      );
    } else if (isEditMode) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        reportType: reportType === "template" ? "R3" : "R2",
      }));
      setDisabledReportTypes(
        reportType === "template" ? ["R2", "R1"] : ["R3", "R1"]
      );
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        reportType: "R1",
      }));
      setDisabledReportTypes([]);
    }
  }, [isEditMode, existingData, reportType, rowId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const getSubgroupOptions = () => {
    return formData.usageBy === "B1" ? SubgroupOptions.B1 : SubgroupOptions.B2;
  };

  const getTextFieldLabel = () => {
    return formData.usageBy === "B1" ? "User Logon" : "IP Address";
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

  return (
    <>
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
          <Typography variant="h10" component="h4" gutterBottom>
            {isEditMode ? `Edit Report: ${formData.name}` : "Add Report"}
          </Typography>
        </Box>

        {/*===========================================Report Box =====================================================*/}
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              marginBottom: "2rem",
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              borderRadius: " 1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Box>
              <Grid item xs={12} md={12}>
                <ReportRadioBtn
                  options={ReportType}
                  label="Report Type"
                  name="reportType"
                  selectedValue={formData.reportType}
                  handleChange={handleChange}
                  disabledOptions={disabledReportTypes}
                />
              </Grid>
            </Box>
            {formData.reportType === "R2" && (
              <Box
                sx={{
                  margin: "2rem 1rem ",
                  padding: "1rem 2rem 0",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Scheduling Configuration
                  </Typography>
                  <Grid item xs={12} md={6} sx={{ margin: "1rem 0 2rem" }}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Name*"
                      variant="outlined"
                      name="name"
                      value={formData.name}
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
                  <Grid item xs={12} md={12}>
                    <ReportRadioBtn
                      options={Destination}
                      label="Destination*"
                      name="destination"
                      selectedValue={formData.destination}
                      handleChange={handleChange}
                    />
                  </Grid>
                  {formData.destination === "D1" && (
                    <Grid item xs={12} md={12} sx={{ margin: "1rem 0 2rem" }}>
                      <TextField
                        fullWidth
                        size="small"
                        label="Email Address(es)*"
                        variant="outlined"
                        name="email"
                        value={formData.email}
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
                  )}
                  {formData.destination === "D2" && (
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3} sx={{ margin: "1rem 0 2rem" }}>
                        <TextField
                          fullWidth
                          size="small"
                          label="Network Path*"
                          variant="outlined"
                          name="path"
                          value={formData.path}
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
                      <Grid item xs={12} md={3} sx={{ margin: "1rem 0 2rem" }}>
                        <TextField
                          fullWidth
                          size="small"
                          label="Username*"
                          variant="outlined"
                          name="name"
                          value={formData.name}
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
                      <Grid item xs={12} md={3} sx={{ margin: "1rem 0 2rem" }}>
                        <TextField
                          fullWidth
                          size="small"
                          label="Password*"
                          variant="outlined"
                          name="pass"
                          value={formData.pass}
                          onChange={handleChange}
                          type="password"
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
                      <Grid item xs={12} md={3} sx={{ margin: "1rem 0 2rem" }}>
                        <Button
                          variant="contained"
                          sx={{
                            color: "var(--text-color)",
                            backgroundColor: "var(--hover)",
                            fontSize: "0.7rem",
                            padding: "0.4rem 1.5rem",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                              backgroundColor: "var(--primary-color)",
                              transform: "translateY(5px)",
                            },
                          }}
                          // onClick={handleSubmit}
                        >
                          Verify Access
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                  <Grid item xs={12} md={12}>
                    <ReportRadioBtn
                      options={Frequency}
                      label="Frequency*"
                      name="frequency"
                      selectedValue={formData.frequency}
                      handleChange={handleChange}
                    />
                  </Grid>

                  <Grid container spacing={2} sx={{ margin: ".2rem 0" }}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Start Date"
                        type="date"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        InputProps={{
                          style: {
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                          },
                        }}
                        InputLabelProps={{
                          shrink: true,
                          style: {
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                          },
                        }}
                        sx={{
                          // flex: 1,
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="End Date"
                        type="date"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        InputProps={{
                          style: {
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                          },
                        }}
                        InputLabelProps={{
                          shrink: true,
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Time"
                        type="time"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        InputProps={{
                          style: {
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                          },
                        }}
                        InputLabelProps={{
                          shrink: true,
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
                  </Grid>
                </Box>
              </Box>
            )}
            {formData.reportType === "R3" && (
              <Box
                sx={{
                  margin: "2rem 1rem ",
                  padding: "1rem 2rem 0",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Template Configuration
                  </Typography>
                  <Grid item xs={12} md={4} sx={{ margin: "1rem 0 2rem" }}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Username*"
                      variant="outlined"
                      name="name"
                      value={formData.name}
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
                </Box>
              </Box>
            )}

            {/*================================= Usage and period Box *=============================================*/}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem 1rem",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Usage
                  </Typography>

                  <Grid item xs={12} md={12}>
                    <ReportRadioBtn
                      options={UsageBy}
                      label="By*"
                      name="usageBy"
                      selectedValue={formData.usageBy}
                      handleChange={handleChange}
                    />
                  </Grid>
                </Box>
                <Box>
                  <Grid item xs={12} md={12}>
                    <ReportRadioBtn
                      options={UsageOptions}
                      label="Options*"
                      name="usageOptions"
                      selectedValue={formData.usageOptions}
                      handleChange={handleChange}
                    />
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem 1rem",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                {formData.reportType === "R1" && (
                  <Box sx={{ marginBottom: "2rem" }}>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        color: "var(--text-head)",
                        fontSize: "0.8rem",
                        // paddingBottom: "1rem",
                      }}
                    >
                      Period
                    </Typography>
                    <ReportRadioBtn
                      options={Period2}
                      name="period"
                      selectedValue={formData.period}
                      handleChange={handleChange}
                    />
                    {(formData.period === "P1" ||
                      formData.period === "P10") && (
                      <Box sx={{ marginTop: "2rem" }}>
                        <Typography
                          variant="h6"
                          component="h4"
                          gutterBottom
                          sx={{
                            color: "var(--text-head)",
                            fontSize: "0.8rem",
                            paddingBottom: "1rem",
                          }}
                        >
                          Date Range
                        </Typography>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                          <TextField
                            label="From"
                            type="date"
                            name="fromDate"
                            value={formData.fromDate}
                            onChange={handleChange}
                            disabled={formData.period === "P1"}
                            InputProps={{
                              style: {
                                fontSize: "0.8rem",
                                color: "var(--text-color)",
                              },
                            }}
                            InputLabelProps={{
                              shrink: true,
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
                                  borderColor: "var(--primary-color)",
                                },
                              },
                              "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "var(--primary-color)",
                                },
                            }}
                          />
                          <TextField
                            label="To"
                            type="date"
                            name="toDate"
                            value={formData.toDate}
                            onChange={handleChange}
                            disabled={formData.period === "P1"}
                            InputProps={{
                              style: {
                                fontSize: "0.8rem",
                                color: "var(--text-color)",
                              },
                            }}
                            InputLabelProps={{
                              shrink: true,
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
                                  borderColor: "var(--primary-color)",
                                },
                              },
                              "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "var(--primary-color)",
                                },
                            }}
                          />
                        </Box>
                      </Box>
                    )}
                  </Box>
                )}
                {(formData.reportType === "R2" ||
                  formData.reportType === "R3") && (
                  <Box sx={{ marginBottom: "2rem" }}>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        color: "var(--text-head)",
                        fontSize: "0.8rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      Period
                    </Typography>
                    <ReportRadioBtn
                      options={Period}
                      name="period"
                      selectedValue={formData.period}
                      handleChange={handleChange}
                    />
                  </Box>
                )}
              </Box>
            </Box>

            {/* ================================== subgroup and job type  Box *====================================== */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {formData.usageOptions === "B3" && (
                <Box
                  sx={{
                    flex: 1,
                    margin: "2rem 0rem 1rem",
                    padding: "1rem 2rem",
                    border: "1px solid var(--hover)",
                    color: "var(--text-color)",
                    borderRadius: "10px",
                    backgroundColor: "var(--color)",
                  }}
                >
                  <Box sx={{ marginBottom: "2rem" }}>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        color: "var(--text-head)",
                        fontSize: "0.8rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      Subgroup
                    </Typography>

                    <Grid item xs={12} md={4}>
                      <ReportRadioBtn
                        label="By*"
                        name="subgroup"
                        selectedValue={formData.subgroup}
                        handleChange={handleChange}
                        options={getSubgroupOptions()}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ marginTop: "1.5rem" }}>
                      <TextField
                        fullWidth
                        size="small"
                        label={getTextFieldLabel()}
                        variant="outlined"
                        name={formData.usageBy === "B1" ? "ip" : "userlogon"}
                        value={
                          formData.usageBy === "B1"
                            ? formData.ip
                            : formData.userlogon
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
                </Box>
              )}
              {formData.usageOptions === "B4" && (
                <Box
                  sx={{
                    flex: 1,
                    margin: "2rem 0rem ",
                    padding: "1rem 2rem",
                    border: "1px solid var(--hover)",
                    color: "var(--text-color)",
                    borderRadius: "10px",
                    backgroundColor: "var(--color)",
                  }}
                >
                  <Box sx={{ marginBottom: "2rem" }}>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        color: "var(--text-head)",
                        fontSize: "0.8rem",
                        paddingBottom: "1rem",
                      }}
                    >
                      Detailed*
                    </Typography>

                    <Grid item xs={12} md={4}>
                      <ReportRadioBtn
                        label="By*"
                        name="detailed"
                        selectedValue={formData.detailed}
                        handleChange={handleChange}
                        options={DetailedOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ marginTop: "1.5rem" }}>
                      <TextField
                        fullWidth
                        size="small"
                        label="User Logon"
                        variant="outlined"
                        name="userlogon"
                        value={formData.userlogon}
                        disabled={formData.detailed === "D1"}
                        onChange={handleChange}
                        InputProps={{
                          style: {
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                            backgroundColor:
                              formData.detailed === "D1"
                                ? "var(--grey)"
                                : "inherit",
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
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--primary-color)",
                          },
                        }}
                      />
                    </Grid>
                  </Box>
                </Box>
              )}
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Job Type
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.print}
                            onChange={handleChange}
                            name="print"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Print"
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
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.copy}
                            onChange={handleChange}
                            name="copy"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Copy"
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
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.scan}
                            onChange={handleChange}
                            name="scan"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Scan"
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
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.eprint}
                            onChange={handleChange}
                            name="eprint"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="External Print"
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
                </Box>
              </Box>
            </Box>
            {/*======================================== Page Size and Page Colour  and Page Side   Box============================================== */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Page Size
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.A3}
                            onChange={handleChange}
                            name="A3"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="A3"
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
                    <Grid item xs={12} md={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.A4}
                            onChange={handleChange}
                            name="A4"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="A4"
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
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Page Colour
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.mono}
                            onChange={handleChange}
                            name="mono"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Mono"
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
                    <Grid item xs={12} md={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.color}
                            onChange={handleChange}
                            name="color"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Colour"
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
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Page Side
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.simplex}
                            onChange={handleChange}
                            name="simplex"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Page Side"
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
                    <Grid item xs={12} md={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.duplex}
                            onChange={handleChange}
                            name="duplex"
                            sx={{
                              color: "var(--text-color)",
                              "&.Mui-checked": {
                                color: "var(--btn-bg)",
                              },
                            }}
                          />
                        }
                        label="Duplex"
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
                </Box>
              </Box>
            </Box>
            {/* Price Options   */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Limit
                  </Typography>

                  <Grid item xs={12} md={3}>
                    <ReportRadioBtn
                      options={Limit}
                      selectedValue={formData.limit}
                      handleChange={handleChange}
                      name="limit"
                      customValue={formData.customValue}
                    />
                  </Grid>
                </Box>
              </Box>
            </Box>
            {/* Order and Export Box and Limit */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Price Options
                  </Typography>
                  <Grid item xs={12} md={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.includeprice}
                          onChange={handleChange}
                          name="includeprice"
                          sx={{
                            color: "var(--text-color)",
                            "&.Mui-checked": {
                              color: "var(--btn-bg)",
                            },
                          }}
                        />
                      }
                      label="Include Price"
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
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Order
                  </Typography>

                  <Grid item xs={12} md={3}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        }}
                      >
                        By*
                      </InputLabel>
                      <Select
                        size="small"
                        name="orderBy"
                        value={formData.orderBy}
                        onChange={handleChange}
                        label="orderBy"
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                        }}
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--grey) !important", // Force white border color
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--primary-color) !important", // Ensure focused border is also white
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
                        {orderBy.map((o) => (
                          <MenuItem
                            key={o}
                            value={o}
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--text-color)",
                              backgroundColor: "var(--color)",
                            }}
                          >
                            {o}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  margin: "2rem 0rem ",
                  padding: "1rem 2rem",
                  border: "1px solid var(--hover)",
                  color: "var(--text-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--color)",
                }}
              >
                <Box sx={{ marginBottom: "2rem" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{
                      color: "var(--text-head)",
                      fontSize: "0.8rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    Export
                  </Typography>

                  <Grid item xs={12} md={3}>
                    <ReportRadioBtn
                      options={Export}
                      label="As"
                      name="export"
                      selectedValue={formData.export}
                      handleChange={handleChange}
                    />
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              margin: " 0.5rem",
              backgroundColor: "var(--text-head)",
              opacity: "0.3",
            }}
          />
          <div>
            <ActionButtonWithModal
              isEditMode={isEditMode}
              isModalOpen={isModalOpen}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              updateText="Update"
              addText="Add Report "
              // icon={PersonAddAlt1Icon}
            />
          </div>
        </form>
      </Container>
    </>
  );
}
