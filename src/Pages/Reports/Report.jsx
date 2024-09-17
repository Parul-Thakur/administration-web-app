import React from "react";
// import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import NavbarMini from "../../Components/NavbarMini/NavbarMini";
import { useLocation } from "react-router-dom";
import ScheduleReport from "./ScheduleReport";
import TemplateReport from "./TemplateReport";

export default function Report() {
  const location = useLocation();

  const isscheduledPage = location.pathname === "/reports/scheduled-reports";
  const istemplatePage = location.pathname === "/reports/template-reports";

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Reports
      </Typography>
      <NavbarMini />
      <div className="reportMain">
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, margin: "0 0 3rem" }}
        >
          {isscheduledPage && (
            <>
              <ScheduleReport />
            </>
          )}
          {istemplatePage && (
            <>
              <TemplateReport />
            </>
          )}
        </Container>
      </div>
    </>
  );
}
