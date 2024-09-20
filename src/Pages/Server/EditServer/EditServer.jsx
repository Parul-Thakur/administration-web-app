import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Grid,
  Box,
  Checkbox,
  Divider,
} from "@mui/material";
import serverData from "../ServerData";
import ActionButtonWithModal from "../../../Components/ActionButtonWithModal/ActionButtonWithModal";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
const Fail = ["None", " "];

export default function EditServer() {
  const { serverId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    hostname: "",
    ipaddress: "",
    fail: "",
    break: false,
    start: "",
    end: "",
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const isEditMode = !!serverId;

  useEffect(() => {
    const id = parseInt(serverId, 10);
    const server = serverData.find((server) => server.id === id);
    if (server) {
      setFormData({
        name: server.name,
        hostname: server.hostname,
        ipaddress: server.ipaddress,
        status: server.status,
        creationDate: server.creationDate,
        lastUpdated: server.lastUpdated,
        isMonitored: server.isMonitored,
      });
    }
  }, [serverId]);

  const handleUpdateServer = (event) => {
    event.preventDefault();
    console.log("Updated server data:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (!formData.hostname) return <Typography>Loading...</Typography>;
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
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
        Server
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          height: "1px",
          backgroundColor: "var(--text-color)",
          opacity: "0.3",
        }}
      />

      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, margin: " 0 0 3rem" }}
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
              Server Editor - {formData.hostname}
            </Typography>
          </Box>
          {/* <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                padding: " 1rem 2rem 0",
                backgroundColor: "var(--color)",
                color: "var(--text-color)",
                borderRadius: "1rem 1rem 0 0",
                boxShadow: "var(--box-shadow)",
              }}
            >
              Identification
            </Typography> */}
          <Box
            sx={{
              padding: "3rem 2rem",
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              borderRadius: "1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                color: "var(--text-color)",
                marginBottom: "2rem", // Adjust margin for proper spacing
              }}
            >
              Identification
            </Typography>
            <form onSubmit={handleUpdateServer}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Hostname"
                    variant="outlined"
                    name="hostname"
                    value={formData.hostname}
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
                        borderColor: "var(--primary-color)", // Focused border color
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    label="IP Address"
                    variant="outlined"
                    name="ipaddress"
                    value={formData.ipaddress}
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

                <Grid item xs={12} md={8}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      }}
                    >
                      Failover Server
                    </InputLabel>
                    <Select
                      size="small"
                      name="fail"
                      value={formData.fail}
                      onChange={handleChange}
                      label="Failover Server"
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
                      {Fail.map((s) => (
                        <MenuItem
                          key={s}
                          value={s}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-color)",
                            backgroundColor: "var(--color)",
                          }}
                        >
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    disabled
                    fullWidth
                    size="small"
                    label="Server Type"
                    variant="outlined"
                    name="ipaddress"
                    value="Primary"
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
                          borderColor: "var(--primary-color) !important",
                        },

                        "&.Mui-disabled fieldset": {
                          borderColor: "var(--primary-color) !important",
                        },
                        "& .MuiOutlinedInput-input": {
                          color: "var(--text-color) !important",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-disabled": {
                        fontWeight: "bold",
                        color: "var(--text-color) !important",
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--text-color) !important",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.break}
                        onChange={handleChange}
                        name="break"
                        sx={{
                          color: "var(--text-color)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Scheduled daily break"
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
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Start break time*"
                    type="time"
                    fullWidth
                    size="small"
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiInputLabel-root": {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "2.5rem",
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                        "& .MuiInputBase-input": {
                          color: "var(--text-color)",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="End break time*"
                    type="time"
                    fullWidth
                    size="small"
                    sx={{
                      fontSize: "0.8rem",
                      "& .MuiInputLabel-root": {
                        fontSize: "0.8rem",
                        color: "var(--text-color)",
                      },
                      "& .MuiOutlinedInput-root": {
                        height: "2.5rem",
                        "& fieldset": {
                          borderColor: "var(--grey)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--primary-color)",
                        },
                        "& .MuiInputBase-input": {
                          color: "var(--text-color)",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
          <div>
            <ActionButtonWithModal
              isEditMode={isEditMode}
              isModalOpen={isModalOpen}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
              updateText="Update"
              addText="Update"
              icon={PublishedWithChangesIcon}
            />
          </div>
        </Container>
      </motion.div>
    </>
  );
}
