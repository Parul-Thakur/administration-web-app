import React, {useState } from "react";
import {
  useTable,
  useGlobalFilter,
  usePagination,
} from "react-table";
import "./Table.css"
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

export default function Table({
  columns,
  data,
  localStorageKey,
  searchPlaceholder = "Search...",
  rowsPerPageOptions = [10, 20, 30],
  showSearch = true,
}) {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || data
  );
  const [filterInput, setFilterInput] = useState("");

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        pageSize: rowsPerPageOptions[0],
      },
    },
    useGlobalFilter,
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
    <div className="tableMain">
     
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${i}`}>
              {headerGroup.headers.map((column, j) => (
                <th
                  {...column.getHeaderProps()}
                  key={`header-${i}-${j}`} // Unique key for each header
                  className="sortable-header"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row-${rowIndex}`}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    key={`cell-${rowIndex}-${cellIndex}`}
                  >
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
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          style={{
            color: "var(--text-color)",
          }}
        >
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
