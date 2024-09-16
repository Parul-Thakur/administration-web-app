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
        Header: "Department",
        accessor: "department_name",
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
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
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
      <div className="main">
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
      </div>

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
    </motion.div>
  );
}

export default DepartmentPage;
