import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box, Paper } from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import { pricingConfigData } from "./pricingData";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";

export default function PricingConfig() {
  const [data, setData] = useState(pricingConfigData);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
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
        Pricing Configuration
      </Typography>
      <NavbarMini />
      <div className="main">
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
            <Typography variant="h8" component="h4" gutterBottom>
              List of all Pricing Configuration
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
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey=" pricingConfigData "
              setData={setData}
              isPricePage={true}
            />
          </Box>
        </Container>
      </div>
    </>
  );
}
