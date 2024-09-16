import React, { useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import "./CustomTable.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import IosShareIcon from "@mui/icons-material/IosShare";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ViewModal from "../../Pages/Department/ViewModal";
import ManageModal from "../../Pages/Department/ManageModal";
import SaveModal from "../SaveModal";
import { allUsers } from "../../Pages/membersData.js";
function CustomTable({
  columns,
  data = [],
  localStorageKey,
  searchPlaceholder = "Search...",
  rowsPerPageOptions = [10, 20, 30],
  isDevicePage = false,
  isImportPage = false,
  isDeviceImportPage = false,
  isScheduledReportPage = false,
  isTemplateReportPage = false,
  isEmailPage = false,
  isPricePage = false,
  isCustomPage = false,
  isCustomModalPage = false,
  isLogPage = false,
  isUserPage = false,
  isOrgPage = false,
  isDeviceGroupsPage = false,
  isDCGPage = false,
  entityType
}) {
  // const [tableData, setTableData] = useState(
  //   Array.isArray(data)
  //     ? JSON.parse(localStorage.getItem(localStorageKey)) || data
  //     : []
  // );
  const [tableData, setTableData] = useState(() => {
    const storedData = localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData) : data;
  });
  const [filterInput, setFilterInput] = useState("");
  const [activeRowId, setActiveRowId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const initialSortBy = JSON.parse(
    localStorage.getItem(`${localStorageKey}_sortBy`)
  ) || [{ id: "id", asc: false }];
  
  const [sortBy, setSortBy] = useState(initialSortBy);
  useEffect(() => {
    localStorage.setItem(`${localStorageKey}_sortBy`, JSON.stringify(sortBy));
  }, [sortBy, localStorageKey]);

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: { sortBy, pageSize: rowsPerPageOptions[0] },
      stateReducer: (newState, action) => {
        if (action.type === "toggleSortBy") {
          const newSortBy = newState.sortBy;
          setSortBy(newSortBy);
        }
        return newState;
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
  } = tableInstance;

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  // const handleDeleteRow = (rowId) => {
  //   const newData = tableData.filter((row) => row.id !== rowId);
  //   setTableData(newData);
  //   localStorage.setItem(localStorageKey, JSON.stringify(newData));
  // };
  const handleDeleteRow = (rowId) => {
    const newData = tableData.filter((row) => row.id !== rowId);
    setTableData(newData);
    // Save the updated data back to localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(newData));
  };
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(tableData));
  }, [tableData, localStorageKey]);

  
  const handleReportEditRow = (rowId) => {
    const reportType = isTemplateReportPage ? "template" : "schedule";
    navigate(`/edit-report/${reportType}/edit/${rowId}`);
  };

  const handleEditRow = (rowId) => {
    const basePath = location.pathname.split("/")[1];
    navigate(`/${basePath}/edit/${rowId}`);
  };
  const handleRunRow = (rowId) => {
    console.log(`Running row with ID: ${rowId}`);
  };
  const handleResetRow = (rowId) => {
    console.log(`Resetting row with ID: ${rowId}`);
  };
  const handleSendReport = () => {
    console.log("Sending report with data:");
  };

  const handleGenerateReport = () => {
    console.log("Generating report with data:");
  };

  const handleExportReport = () => {
    console.log("Exporting report with data:");
  };
  const [entities, setEntities] = useState([]);

  const handleUpdateEntities = (updatedEntities) => {
    setEntities(updatedEntities);
  };
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);

  const handleOpenViewModal = (entity) => {
    setSelectedEntity(entity);
    console.log(entity);
    console.error();
   
    
    setIsViewOpen(true);
  };

  const handleOpenManageModal = (entity) => {
    setSelectedEntity(entity);
    setIsManageOpen(true);
  };

  const handleCloseModals = () => {
    setIsViewOpen(false);
    setIsManageOpen(false);
    setSelectedEntity(null);
  };

  const handleView = (rowId) => {
    handleOpenViewModal(rowId);
    handleCloseMenu();
  };
  const handleManage = (rowId) => {
    handleOpenManageModal(rowId);
    handleCloseMenu();
  };
  const isPrintQueue = location.pathname === "/queues";
  const isAssignPricePage =
    location.pathname === "/assign-pricing-configuration";

  const dropdownActions = isScheduledReportPage
    ? [
        {
          label: "Send",
          icon: <MailIcon style={{ marginRight: 8 }} />, // Assume SendIcon is imported
          onClick: () => {
            handleSendReport(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Edit",
          icon: <EditIcon style={{ marginRight: 8 }} />,
          onClick: () => handleReportEditRow(activeRowId),
        },
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : isDCGPage
    ? [
        {
          label: "View",
          icon: <VisibilityIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleView(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Manage",
          icon: <ManageSearchIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleManage(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : isAssignPricePage
    ? [
        {
          label: "Select",
          icon: <HowToRegIcon style={{ marginRight: 8 }} />, // Assume GenerateIcon is imported
          onClick: () => {
            handleSelect(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : isTemplateReportPage
    ? [
        {
          label: "Generate",
          icon: <DownloadForOfflineIcon style={{ marginRight: 8 }} />, // Assume GenerateIcon is imported
          onClick: () => {
            handleGenerateReport(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Export",
          icon: <IosShareIcon style={{ marginRight: 8 }} />, // Assume ExportIcon is imported
          onClick: () => {
            handleExportReport(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Edit",
          icon: <EditIcon style={{ marginRight: 8 }} />,
          onClick: () => handleReportEditRow(activeRowId),
        },
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : isImportPage || isDeviceImportPage
    ? [
        {
          label: "Run",
          icon: <RestartAltIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleRunRow(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
        {
          label: "Edit",
          icon: <EditIcon style={{ marginRight: 8 }} />,
          onClick: () => handleEditRow(activeRowId),
        },
      ]
    : isPrintQueue || isCustomPage || isOrgPage || isDeviceGroupsPage
    ? [
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
      ]
    : [
        {
          label: "Edit",
          icon: <EditIcon style={{ marginRight: 8 }} />,
          onClick: () => handleEditRow(activeRowId),
        },
        {
          label: "Delete",
          icon: <DeleteIcon style={{ marginRight: 8 }} />,
          onClick: () => {
            handleDeleteRow(activeRowId);
            handleCloseMenu();
          },
        },
        ...(isDevicePage
          ? [
              {
                label: "Reset",
                icon: <RestartAltIcon style={{ marginRight: 8 }} />,
                onClick: () => {
                  handleResetRow(activeRowId);
                  handleCloseMenu();
                },
              },
            ]
          : []),
      ];

  const handleSelect = () => {
    setOpenModal(true); // Changed from setModalOpen to setOpenModal
    handleCloseMenu();
  };

  const handleConfirm = () => {
    const selectedRow = tableData.find((row) => row.id === activeRowId);
    if (selectedRow) {
      const hostname = selectedRow.hostname;
      console.log(`Confirmed action for row with hostname: ${hostname}`);
    } else {
      console.log("No active row selected or row not found");
    }
  };

  const handleCancel = () => {
    setOpenModal(false); // Changed from setModalOpen to setOpenModal
  };
  const handleMenuClick = (event, rowId) => {
    console.log("Menu clicked for rowId:", rowId);
    setAnchorEl(event.currentTarget);
    setActiveRowId(rowId);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handlePageChange = (newPage) => {
    gotoPage(newPage);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    gotoPage(0);
  };

  const rowStart = pageIndex * pageSize + 1;
  const rowEnd = Math.min(rowStart + page.length - 1, tableData.length);

  return (
    <div className="customTableMain">
      <div className="searchContainer">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={searchPlaceholder}
          className="searchInput"
        />
        <SearchIcon className="search-icon" />
        {isUserPage && (
          <Button
            variant="contained"
            onClick={() => navigate("/users/add-user")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add User
          </Button>
        )}
        {isDevicePage && (
          <Button
            variant="contained"
            onClick={() => navigate("/devices/add-device")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add Device
          </Button>
        )}
        {isImportPage && (
          <Button
            variant="contained"
            onClick={() => navigate("/user-imports/add-user")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add User Import
          </Button>
        )}
        {isLogPage && (
          <Button
            variant="contained"
            // onClick={() => navigate("/user-imports/add-user")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Clear Logs
          </Button>
        )}
        {isDeviceImportPage && (
          <Button
            variant="contained"
            onClick={() => navigate("/device-imports/add-device")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add New Device Import
          </Button>
        )}
        {isEmailPage && (
          <Button
            variant="contained"
            onClick={() => navigate("/email-templates/add-template")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add User Email
          </Button>
        )}
        {isPricePage && (
          <Button
            variant="contained"
            onClick={() => navigate("/pricing-configuration/add-price")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add Price Scheme
          </Button>
        )}
        {(isScheduledReportPage || isTemplateReportPage) && (
          <Button
            variant="contained"
            onClick={() => navigate("/add-report")}
            sx={{
              fontSize: "0.8rem",
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "0.5rem 1.5rem",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Add Report
          </Button>
        )}
      </div>
      <table {...getTableProps()} className="customTable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="sortable-header"
                >
                  {column.render("Header")}
                  <span className="sort-indicator">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon />
                      )
                    ) : (
                      <ArrowDropUpIcon style={{ opacity: 0.3 }} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id} // Unique key for rows
                onMouseEnter={() => setActiveRowId(row.original.id)}
                onMouseLeave={() => setActiveRowId(null)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {" "}
                    {/* Unique key for cells */}
                    {cell.column.id === "status" ? (
                      <div className="status-container">
                        <span
                          className={`status-indicator ${cell.value.toLowerCase()}`}
                        ></span>
                        {cell.value}
                      </div>
                    ) : (
                      cell.render("Cell")
                    )}
                    {!isCustomModalPage &&
                      !isLogPage &&
                      cell.column.id ===
                        row.cells[row.cells.length - 1].column.id && (
                        <CustomDropdown
                          anchorEl={anchorEl}
                          activeRow={activeRowId}
                          rowIndex={row.original.id}
                          onMenuClick={(event) => {
                            console.log(
                              "Opening menu for row with ID:",
                              row.original.id
                            );
                            handleMenuClick(event, row.original.id);
                          }}
                          onClose={handleCloseMenu}
                          options={dropdownActions}
                        />
                      )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <SaveModal
        isOpen={openModal}
        onClose={handleCancel}
        modalTitle="Confirm Addition"
        modalContent={`Are you sure you want to assign price scheme to this: ${
          tableData.find((row) => row.id === activeRowId)?.hostname || "unknown"
        }?`}
        pageType="add"
        isNoNav={true}
        isError={false}
      />
      <ViewModal
        open={isViewOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        entityType={entityType}
      />
      <ManageModal
        open={isManageOpen}
        handleClose={handleCloseModals}
        entity={selectedEntity}
        allUsers={allUsers}
        entityType={entityType}
        updateEntities={handleUpdateEntities}
      />
      {/* <Modal
        open={openModal}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="Confirm Action"
        message={`Are you sure you want to assign price scheme to this: ${
          tableData.find((row) => row.id === activeRowId)?.hostname || "unknown"
        }?`}
      /> */}

      <div className="pagination">
        <select value={pageSize} onChange={handlePageSizeChange}>
          {rowsPerPageOptions.map((size) => (
            <option key={size} value={size}>
              {size} rows per page
            </option>
          ))}
        </select>
        <div>
          <Button onClick={() => handlePageChange(0)} disabled={!pageIndex}>
            <ArrowBackIosIcon />
          </Button>
          <span>
            Page {pageIndex + 1} of {Math.ceil(tableData.length / pageSize)}
          </span>
          <Button
            onClick={() =>
              handlePageChange(
                Math.min(
                  pageIndex + 1,
                  Math.ceil(tableData.length / pageSize) - 1
                )
              )
            }
            disabled={pageIndex >= Math.ceil(tableData.length / pageSize) - 1}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
