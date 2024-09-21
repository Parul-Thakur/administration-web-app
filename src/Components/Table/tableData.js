import React from "react";
import PrintIcon from "@mui/icons-material/Print";
import ScanIcon from "@mui/icons-material/Scanner";
import FaxIcon from "@mui/icons-material/Print"; // Substitute with an appropriate icon
import CopyIcon from "@mui/icons-material/ContentCopy";

export const columns1 = [
  {
    Header: "Type",
    accessor: "type",
    Cell: ({ value }) => {
      let IconComponent;
      let backgroundColor;

      switch (value) {
        case "Print":
          IconComponent = PrintIcon;
          backgroundColor = "#E8F5E9"; // Light green for Print
          break;
        case "Scan":
          IconComponent = ScanIcon;
          backgroundColor = "#E3F2FD"; // Light blue for Scan
          break;
        case "Fax":
          IconComponent = FaxIcon;
          backgroundColor = "#FFF3E0"; // Light orange for Fax
          break;
        case "Copy":
          IconComponent = CopyIcon;
          backgroundColor = "#F3E5F5"; // Light purple for Copy
          break;
        default:
          IconComponent = null;
          backgroundColor = "#F5F5F5"; // Default light gray
      }

      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc", 
            padding: "3px 6px", 
            backgroundColor, 
            borderRadius: "5px",
            color: "#333", 
          }}
        >
          {IconComponent && (
            <IconComponent style={{ fontSize: "1rem", marginRight: 5 }} />
          )}
          {value}
        </div>
      );
    },
  },
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Device",
    accessor: "device",
  },
  {
    Header: "Pages",
    accessor: "pages",
  },
  {
    Header: "",
    accessor: "time",
    Cell: ({ value }) => (
      <span style={{ fontSize: '0.7rem' }}>{value}</span>
    ), 
  },
];
export const data1 = [
  {
    id: 1,
    type: 'Print',
    user: 'Alice Johnson',
    device: 'Printer A',
    pages: 25,
    time: '45 sec ago',
  },
  {
    id: 2,
    type: 'Scan',
    user: 'Bob Smith',
    device: 'Scanner B',
    pages: 10,
    time: '30 sec ago',
  },
  {
    id: 3,
    type: 'Fax',
    user: 'Charlie Brown',
    device: 'Fax Machine C',
    pages: 5,
    time: '1 min ago',
  },
  {
    id: 4,
    type: 'Copy',
    user: 'Diana Prince',
    device: 'Copier D',
    pages: 40,
    time: '2 min ago',
  },
  {
    id: 5,
    type: 'Print',
    user: 'Edward Norton',
    device: 'Printer E',
    pages: 15,
    time: '3 min ago',
  },

];


//   {
//     Header: 'Job Type',
//     accessor: 'type',
//   },
//   {
//     Header: 'User',
//     accessor: 'user',
//   },
//   {
//     Header: 'Device',
//     accessor: 'device',
//   },
//   {
//     Header: 'Total Pages',
//     accessor: 'pages',
//   },
//   {
//     Header: '',
//     accessor: 'time',
//   },
// ];
export const columns2 = [
  {
    Header: 'User',
    accessor: 'name',
  },
  {
    Header: 'Filename',
    accessor: 'filename',
  },
  {
    Header: '',
    accessor: 'time',
    Cell: ({ value }) => (
      <span style={{ fontSize: '0.7rem' }}>{value}</span>
    ), 
  },
  
  
];




export const data2 = [
  {
    id: 1,
    name: 'Alice Johnson',
    filename: 'report.pdf',
    time: '45 sec ago',
  },
  {
    id: 2,
    name: 'Bob Smith',
    filename: 'invoice.docx',
    time: '30 sec ago',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    filename: 'presentation.pptx',
    time: '1 min ago',
  },
  {
    id: 4,
    name: 'Diana Prince',
    filename: 'notes.txt',
    time: '2 min ago',
  },
  {
    id: 5,
    name: 'Edward Norton',
    filename: 'diagram.svg',
    time: '3 min ago',
  },
  {
    id: 6,
    name: 'Emily White',
    filename: 'add.svg',
    time: '1 min ago',
  },
];

