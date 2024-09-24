import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box, Paper } from "@mui/material";
import CustomTable from "../../../Components/Common/CustomTable/CustomTable";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import { deviceImportData } from "./ImportData";

export default function DeviceImports() {
  const [data, setData] = useState(deviceImportData);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Latest Run",
        accessor: "latestRun",
      },
      {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
  );
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        Device Imports
      </Typography>
      <NavbarMini />

      <motion.div
        className="reportMain"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
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
            <Typography variant="h8" component="h4" gutterBottom>
              List of all device imports
            </Typography>
          </Box>
          <Box
          // sx={{
          //   padding: "3rem",
          //   backgroundColor: "var(--color)",
          //   color: "var(--text-color)",
          //   borderRadius: " 1rem  ",
          //   boxShadow: "var(--box-shadow)",
          // }}
          >
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="deviceImportData"
              setData={setData}
              isDeviceImportPage={true}
            />
          </Box>
        </Container>
      </motion.div>
    </>
    // </motion.div>
  );
}
