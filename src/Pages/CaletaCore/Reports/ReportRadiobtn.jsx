import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export default function ReportRadioBtn({
  label,
  options,
  selectedValue,
  handleChange,
  name,
  customValue,
  disabledOptions = [],
}) {
  const [localValue, setLocalValue] = useState(selectedValue);

  useEffect(() => {
    setLocalValue(selectedValue);
  }, [selectedValue]);

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    const updatedValue = newValue === localValue ? "" : newValue;
    setLocalValue(updatedValue);
    handleChange({ target: { name, value: updatedValue } });
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // gap: "1rem",
        }}
      >
        <FormLabel
          component="legend"
          sx={{
            fontSize: "0.8rem",
            color: "var(--text-color)",
            marginBottom: "1rem",
          }}
        >
          {label}
        </FormLabel>
        <RadioGroup
          row
          aria-label={name}
          name={name}
          value={localValue}
          onChange={handleRadioChange}
          sx={{
            marginLeft: "1rem",
            gap: " 2rem",
            fontSize: "0.875rem",
          }}
        >
          {options.map((option) =>
            option.value === "L4" ? (
              <Box
                key={option.value}
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Radio
                  size="small"
                  checked={localValue === option.value}
                  onChange={handleRadioChange}
                  value={option.value}
                  sx={{
                    width: ".5rem",
                    height: ".5rem",
                    "& .MuiSvgIcon-root": {
                      fontSize: ".9rem",
                    },
                    transform: "scale(1.2)!important",
                    color: "var(--text-color)",
                    "&.Mui-checked": {
                      color: "var(--btn-bg)",
                    },
                  }}
                />
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Custom"
                  value={customValue}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "customValue", value: e.target.value },
                    })
                  }
                  disabled={selectedValue !== "L4"}
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      backgroundColor:
                        selectedValue !== "L4" ? "var(--grey)" : "inherit",
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
              </Box>
            ) : (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={
                  <Radio
                    size="small"
                    disabled={disabledOptions.includes(option.value)}
                    sx={{
                      padding: "0 1rem ",
                      width: ".5rem",
                      height: ".5rem",
                      "& .MuiSvgIcon-root": {
                        fontSize: ".9rem",
                      },
                      transform: "scale(1.2)!important",
                      color: "var(--text-color)",
                      "&.Mui-checked": {
                        color: "var(--btn-bg)",
                      },
                    }}
                  />
                }
                label={option.label}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: ".9rem",
                    color: "var(--text-color)",
                  },
                  "& .Mui-checked + .MuiFormControlLabel-label": {
                    color: "var(--btn-bg)",
                  },
                }}
              />
            )
          )}
        </RadioGroup>
      </Box>
    </FormControl>
  );
}
