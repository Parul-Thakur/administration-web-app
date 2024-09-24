import React from "react";
import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import NavbarMini from "../../../Components/Common/NavbarMini/NavbarMini";
import { useLocation } from "react-router-dom";
import ScheduleReport from "./ScheduleReport";
import TemplateReport from "./TemplateReport";

export default function Report() {
  const location = useLocation();

  const isscheduledPage = location.pathname === "/reports/scheduled-reports";
  const istemplatePage = location.pathname === "/reports/template-reports";
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
        Reports
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
      </motion.div>
    </>
  );
}
