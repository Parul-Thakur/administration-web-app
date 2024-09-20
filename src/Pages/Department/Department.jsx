import React, { useState } from "react";
import EntityPage from "../../Components/EntityPage";
import ViewModal from "./ViewModal";
import ManageModal from "./ManageModal";
import { departmentData } from "../membersData";
import { allUsers } from "../membersData";
import { Button, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Container, Paper } from "@mui/material";

function DepartmentPage() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Department",
        accessor: "department_name",
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
        Department
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
      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, margin: "0 0 3rem" }}
        >
          <EntityPage
            entityData={departmentData}
            entityName="department"
            entityLabel="Department"
            viewModalComponent={ViewModal}
            manageModalComponent={ManageModal}
            tableColumns={columns}
            localStorageKey={"departmentData"}
            allUsers={allUsers}
          />
        </Container>
      </motion.div>

      {/* <ViewModal
        open={isViewOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        entityType="Department"
      />
      <ManageModal
        open={isManageOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        allUsers={allUsers}
        entityType="Department"
        updateEntities={handleUpdateEntities}
      /> */}
    </>
  );
}

export default DepartmentPage;
