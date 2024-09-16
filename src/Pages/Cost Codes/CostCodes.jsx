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
  // const [entities, setEntities] = useState([]);

  // const handleUpdateEntities = (updatedEntities) => {
  //   setEntities(updatedEntities);
  // };
  // const [selectedEntity, setSelectedEntity] = useState(null);
  // const [isViewOpen, setIsViewOpen] = useState(false);
  // const [isManageOpen, setIsManageOpen] = useState(false);

  // const handleOpenViewModal = (entity) => {
  //   setSelectedEntity(entity);
  //   setIsViewOpen(true);
  // };

  // const handleOpenManageModal = (entity) => {
  //   setSelectedEntity(entity);
  //   setIsManageOpen(true);
  // };

  // const handleCloseModals = () => {
  //   setIsViewOpen(false);
  //   setIsManageOpen(false);
  //   setSelectedEntity(null);
  // };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "cost_code_name",
      },
      // {
      //   Header: "Actions",
      //   Cell: ({ row }) => (
      //     <div className="actions-container">
      //       <Button
      //         variant="contained"
      //         onClick={() => handleOpenViewModal(row.original)}
      //         sx={{

      //           fontSize: "0.8rem",
      //           backgroundColor: "var(--secondary-color)",
      //           color: "var(--text-color2)",
      //           padding: "0.5rem 1.5rem",
      //           transition: "transform 0.2s ease",
      //           "&:hover": {
      //             transform: "translateY(-2px)",
      //             backgroundColor: "var(--primary-color)",
      //           },
      //         }}
      //       >
      //         View
      //       </Button>
      //       <Button
      //         variant="contained"
      //         onClick={() => handleOpenManageModal(row.original)}
      //         sx={{
      //           marginLeft: "1rem",
      //           fontSize: "0.8rem",
      //           backgroundColor: "var(--secondary-color)",
      //           color: "var(--text-color2)",
      //           padding: "0.5rem 1.5rem",
      //           transition: "transform 0.2s ease",
      //           "&:hover": {
      //             transform: "translateY(-2px)",
      //             backgroundColor: "var(--primary-color)",
      //           },
      //         }}
      //       >
      //         Manage
      //       </Button>
      //     </div>
      //   ),
      // },
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
      {" "}
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
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
      <div className="main">
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
      </div>
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
    </motion.div>
  );
}
