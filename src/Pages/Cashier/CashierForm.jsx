import {
  Box,
  Container,
  Grid,
  TextField,
  Autocomplete,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { singleUserLogons, multipleUserLogons, groups } from "./userData";
import Table from "../../Components/Table/Table";
import SaveModal from "../../Components/SaveModal";
import ReportRadioBtn from "../Reports/ReportRadiobtn";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
export default function CashierForm() {
  const [selectedToValue, setSelectedToValue] = useState("1");
  const [selectedTypeValue, setSelectedTypeValue] = useState("4");
  const [formData, setFormData] = useState({
    value1: "",
    value2: "",
    searchuser: "",
    to: "1",
    type: "4",
  });
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [label, setLabel] = useState("User Logon*");
  const [userBalance, setUserBalance] = useState(null);
  const [data, setData] = useState(singleUserLogons);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: "User Logon",
        accessor: "name",
      },
      {
        Header: "	Date & Time",
        accessor: "dateTime",
      },
      {
        Header: "	Type",
        accessor: "type",
      },
      {
        Header: "	Author",
        accessor: "author",
      },
      {
        Header: "	Description",
        accessor: "description",
      },
      {
        Header: "	Value",
        accessor: "value",
      },
      {
        Header: "Balance",
        accessor: "userBalance",
      },
    ],
    []
  );

  const handleToChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedToValue(event.target.value);
    setUserBalance(null);
    setFormData({ ...formData, searchuser: "" });
    setIsTableVisible(false);

    switch (selectedValue) {
      case "1":
        setLabel("User Logon*");
        break;
      case "2":
        setLabel("Multiple User Logons*");
        break;
      case "3":
        setLabel("Group Name*");
        break;
      default:
        setLabel("User Logon*");
    }
  };
  const handleTypeChange = (event) => {
    setSelectedTypeValue(event.target.value);
  };
  const handleUserSelect = (event, newInputValue) => {
    setFormData({ ...formData, searchuser: newInputValue });

    let selectedUser;
    switch (selectedToValue) {
      case "1":
        selectedUser = singleUserLogons.find(
          (user) => user.logon === newInputValue
        );
        break;
      case "2":
        selectedUser = multipleUserLogons.find(
          (user) => user.logon === newInputValue
        );
        break;
      case "3":
        selectedUser = groups.find((group) => group.group === newInputValue);
        break;
      default:
        selectedUser = null;
    }

    setUserBalance(selectedUser ? selectedUser.userBalance : null);
  };
  useMemo(() => {
    if (selectedToValue === "1") {
      setFilteredOptions(singleUserLogons);
    } else if (selectedToValue === "2") {
      setFilteredOptions(multipleUserLogons);
    } else if (selectedToValue === "3") {
      setFilteredOptions(groups);
    }
  }, [selectedToValue]);

  const option1 = [
    { value: "1", label: "Single User" },
    { value: "2", label: "Multiple Users" },
    { value: "3", label: "Group Of Users" },
  ];
  const option2 = [
    { value: "4", label: "Top Up" },
    { value: "5", label: "Debit" },
    { value: "6", label: "Set balance" },
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e) => {
    if (formData.searchuser && userBalance !== null && selectedTypeValue) {
      setIsTableVisible(true);
    }
    e.preventDefault();
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Container
      // component={Paper}
      elevation={3}
      style={{
        padding: 0,
        margin: "0 0 3rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "var(--background-color)",
          padding: "1rem",
          margin: "2rem 0 0",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h8" component="h4" gutterBottom>
          Add Transaction
        </Typography>
      </Box>

      <Box
        sx={{
          boxShadow: "var(--box-shadow)",
          borderRadius: "8px",
          padding: "2rem",
          backgroundColor: "var(--color)",
          marginBottom: "2rem",
        }}
      >
        <ReportRadioBtn
          options={option1}
          label="To*"
          name="cash"
          selectedValue={formData.to}
          handleChange={handleToChange}
        />

        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
            // paddingBottom: "2rem",
          }}
        >
          <Grid item xs={12} md={6}>
            <Autocomplete
              freeSolo
              options={filteredOptions.map((option) =>
                selectedToValue === "3" ? option : option.logon
              )}
              onInputChange={handleUserSelect}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      backgroundColor: "var(--color)",
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
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Value"
              variant="outlined"
              name="value1"
              value={formData.value1}
              onChange={handleToChange}
              type="number"
              placeholder="0.00"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EuroSymbolIcon
                      sx={{
                        color: "var(--text-color)",
                        fontSize: ".8rem",
                      }}
                    />
                  </InputAdornment>
                ),
                style: {
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
                inputProps: {
                  placeholder: "0.00", // This will work as the placeholder for the input
                  style: {
                    MozAppearance: "textfield",
                  },
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
                "& input[type=number]": {
                  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                    {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          boxShadow: "var(--box-shadow)",
          borderRadius: "8px",
          marginBottom: "2rem",
          padding: "2rem ",
          backgroundColor: "var(--color)",
        }}
      >
        <ReportRadioBtn
          label="Type*"
          options={option2}
          selectedValue={selectedTypeValue}
          handleChange={handleTypeChange}
          name="type"
        />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: "4rem",
          }}
        >
          <TextField
            fullWidth
            size="small"
            label="Value"
            variant="outlined"
            name="value2"
            value={formData.value2}
            onChange={handleTypeChange}
            type="number"
            placeholder="0.00"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EuroSymbolIcon
                    sx={{
                      color: "var(--text-color)",
                      fontSize: ".8rem",
                    }}
                  />
                </InputAdornment>
              ),
              style: {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
              inputProps: {
                placeholder: "0.00", // This will work as the placeholder for the input
                style: {
                  MozAppearance: "textfield",
                },
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
              "& input[type=number]": {
                "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              },
            }}
          />
        </Grid>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Button
          // variant="outlined"
          sx={{
            fontSize: "0.8rem",
            color: "var(--text-color)",
            padding: "0.5rem 1.5rem",
            transition: "transform 0.2s ease",
            borderRadius: "1rem",
            "&:hover": {
              backgroundColor: "var(--hover3)",
            },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <SaveModal
          isOpen={isModalOpen}
          onClose={handleClose}
          modalTitle="Confirm Addition"
          modalContent="Are you sure you want to add this item? Please review the details before confirming."
          pageType="add"
          isNoNav={true}
          isError={false}
        />
      </Box>

      {isTableVisible && (
        <Box mt={5}>
          <Table
            columns={columns}
            data={data}
            localStorageKey="userData"
            setData={setData}
            isCashPage={true}
          />
        </Box>
      )}
    </Container>
  );
}
