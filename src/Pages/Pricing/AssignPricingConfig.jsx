import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import { assignPricingConfigData } from "./pricingData.js";
import NavbarMini from "../../Components/NavbarMini/NavbarMini.jsx";

export default function AssignPricingConfig() {
  const [data, setData] = useState(assignPricingConfigData);
  const columns = React.useMemo(
    () => [
      {
        Header: "IP Address",
        accessor: "ipaddress",
      },
      {
        Header: "Hostname",
        accessor: "hostname",
      },

      {
        Header: "Current Configuration",
        accessor: "config",
      },
    ],
    []
  );

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Assign Pricing Configuration
      </Typography>
      <NavbarMini />
      <div className="main">
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, maxWidth: "95%", marginTop: "4rem" }}
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
              List of all Pricing Configuration
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "3rem",
              backgroundColor: "var(--color)",
              color: "var(--text-color)",
              borderRadius: " 1rem  ",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="assignPricingConfigData "
              setData={setData}
            />
          </Box>
        </Container>
      </div>
    </>
  );
}
