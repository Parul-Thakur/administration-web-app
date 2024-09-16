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
  Paper,
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

  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
      animate={{ y: "0%", opacity: 1, scale: 1 }}
      exit={{ y: "50%", opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 2rem" }}
      >
        Server
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          height: "1px",
          backgroundColor: "var(--text-grey)",
          opacity: "0.3",
        }}
      />

      <div className="main">
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
              color: "var(--text-grey)",
            }}
          >
            <Typography variant="h8" component="h4" gutterBottom>
              Server Editor - {formData.hostname}
            </Typography>
          </Box>
          {/* <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                padding: " 1rem 2rem 0",
                backgroundColor: "var(--color)",
                color: "var(--text-grey)",
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
              color: "var(--text-grey)",
              borderRadius: "1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                color: "var(--text-grey)",
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
                    size="small"
                    label="IP Address"
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

                <Grid item xs={12} md={8}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-grey)",
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
                        color: "var(--text-grey)",
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
                          color: "var(--text-grey)", // Icon color
                        },
                      }}
                    >
                      {Fail.map((s) => (
                        <MenuItem
                          key={s}
                          value={s}
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-grey)",
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
                          borderColor: "var(--primary-color) !important",
                        },

                        "&.Mui-disabled fieldset": {
                          borderColor: "var(--primary-color) !important",
                        },
                        "& .MuiOutlinedInput-input": {
                          color: "var(--text-grey) !important",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-disabled": {
                        fontWeight: "bold",
                        color: "var(--text-grey) !important",
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--text-grey) !important",
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
                          color: "var(--text-grey)",
                          "&.Mui-checked": {
                            color: "var(--btn-bg)",
                          },
                        }}
                      />
                    }
                    label="Scheduled daily break"
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
                        color: "var(--text-grey)",
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
                          color: "var(--text-grey)",
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
                        color: "var(--text-grey)",
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
                          color: "var(--text-grey)",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
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
      </div>
    </motion.div>
  );
}
