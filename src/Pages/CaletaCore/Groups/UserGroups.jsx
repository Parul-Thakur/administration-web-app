import React, { useState } from "react";
import EntityPage from "../../../Components/Common/EntityPage";
import ViewModal from "../Department/ViewModal";
import ManageModal from "../Department/ManageModal";
import { groupData } from "../membersData";
import { allUsers } from "../membersData";
import { Button } from "@mui/material";

export default function UserGroups() {
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
        accessor: "group_name",
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
      //             backgroundColor: "var(--btn-bg)",
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
      //             backgroundColor: "var(--btn-bg)",
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
        entityData={groupData}
        entityName="group"
        entityLabel="User Group"
        viewModalComponent={ViewModal}
        manageModalComponent={ManageModal}
        tableColumns={columns}
        localStorageKey={"groupData"}
        allUsers={allUsers}
      />
      {/* <ViewModal
        open={isViewOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        entityType="Group"
      />
      <ManageModal
        open={isManageOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        allUsers={allUsers}
        entityType="Group"
        updateEntities={handleUpdateEntities}
      /> */}
    </>
  );
}
