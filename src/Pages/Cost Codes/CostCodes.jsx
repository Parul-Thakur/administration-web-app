import React, { useState } from "react";
import EntityPage from "../../Components/EntityPage";

import { costCodeData } from "../membersData";
import { allUsers } from "../membersData";
import { Button, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Container, Paper } from "@mui/material";
import ManageModal from "../Department/ManageModal";
import ViewModal from "../Department/ViewModal";

export default function CostCodes() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "cost_code_name",
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
      {" "}
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
        Cost Codes
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
          style={{ padding: 0, maxWidth: "95%", margin: "3rem 0" }}
        >
          <EntityPage
            entityData={costCodeData}
            entityName="costCode"
            entityLabel="CostCode"
            viewModalComponent={ViewModal}
            manageModalComponent={ManageModal}
            tableColumns={columns}
            localStorageKey={"costCode"}
            allUsers={allUsers}
          />
        </Container>
      </motion.div>
      {/* <ViewModal
        open={isViewOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        entityType="CostCode"
      />
      <ManageModal
        open={isManageOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        allUsers={allUsers}
        entityType="CostCode"
        updateEntities={handleUpdateEntities}
      /> */}
    </>
  );
}
