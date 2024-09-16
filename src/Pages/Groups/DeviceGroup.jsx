import React, { useState } from "react";
import EntityPage from "../../Components/EntityPage";
import ViewModal from "../Department/ViewModal";
import ManageModal from "../Department/ManageModal";
import { deviceData } from "../membersData";
import { allUsers } from "../membersData";
import { Button } from "@mui/material";

export default function DeviceGroup() {
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
        Header: "Groups",
        accessor: "device_name",
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
    <>
      <EntityPage
        entityData={deviceData}
        entityName="device"
        entityLabel="Device Group"
        viewModalComponent={ViewModal}
        manageModalComponent={ManageModal}
        tableColumns={columns}
        localStorageKey={"deviceData"}
        allUsers={allUsers}
      />
      {/* <ViewModal
        open={isViewOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        entityType="Device"
      />
      <ManageModal
        open={isManageOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        allUsers={allUsers}
        entityType="Device"
        updateEntities={handleUpdateEntities}
      /> */}
    </>
  );
}
