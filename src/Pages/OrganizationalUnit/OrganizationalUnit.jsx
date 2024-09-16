import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import orgUnitData from "./orgData";

export default function OrganizationalUnit() {
  const [data, setData] = useState(orgUnitData);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Organizational Unit",
        accessor: "organizationalUnit",
      },
    ],
    []
  );

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
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Organizational Units
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
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
              List of all organizational units
            </Typography>
          </Box>
          <Box
          // sx={{
          //   padding: "3rem",
          //   backgroundColor: "var(--color)",
          //   color: "var(--text-grey)",
          //   borderRadius: " 1rem  ",
          //   boxShadow: "var(--box-shadow)",
          // }}
          >
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="orgUnitData"
              setData={setData}
              isOrgPage={true}
            />
          </Box>
        </Container>
      </div>
    </motion.div>
  );
}
