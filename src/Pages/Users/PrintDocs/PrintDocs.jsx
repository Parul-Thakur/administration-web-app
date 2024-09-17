import React from "react";
import NavbarMini from "../../../Components/NavbarMini/NavbarMini";

import { Container, Typography, Box } from "@mui/material";

function PrintDocs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Users
      </Typography>
      <NavbarMini />

      <div className="main">
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, margin: "0 0 3rem" }}
        >
          <form onSubmit={handleSubmit}>
            {/* User Details Section */}
            <Box
              sx={{
                backgroundColor: "var(--background-color)",
                padding: "1rem",
                margin: "2rem 0 0",
                color: "var(--text-grey)",
              }}
            >
              <Typography variant="h10" component="h4" gutterBottom>
                Print Documents
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
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.8rem",
                  color: "var(--text-grey)",
                  padding: "5rem 0 0 ",
                  backgroundColor: "var(--color)",
                  textAlign: "center",
                }}
              >
                No documents available
              </Typography>
            </Box>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default PrintDocs;
