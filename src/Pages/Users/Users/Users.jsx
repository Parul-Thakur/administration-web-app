import React, { useState } from "react";
import UserData from "./UserData";
import CustomTable from "../../../Components/CustomTable/CustomTable";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";

export default function Users() {
  const [data, setData] = useState(UserData);

  const columns = React.useMemo(
    () => [
      {
        Header: "User Logon",
        accessor: "userLogon",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "FAK",
        accessor: "fak",
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
        Users
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
          style={{ padding: 0, maxWidth: "95%", margin: " 0 0 3rem" }}
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
              List of all Users
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
              localStorageKey="UserData"
              setData={setData}
              isUserPage={true}
            />
          </Box>
        </Container>
      </div>
    </>
  );
}
