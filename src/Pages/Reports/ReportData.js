// userImportData.js
 const scheduledData = [
  {
    id: 1,
    name: "User Import 1",
    type: "Manual",
    frequency: "Daily",
    lastSent: "2024-08-15 14:32:00",
  },
  {
    id: 2,
    name: "User Import 2",
    type: "Automated",
    frequency: "Weekly",
    lastSent: "2024-08-14 09:20:00",
  },
  {
    id: 3,
    name: "User Import 3",
    type: "Manual",
    frequency: "Monthly",
    lastSent: "2024-08-13 17:45:00",
  },
  {
    id: 4,
    name: "User Import 4",
    type: "Automated",
    frequency: "Daily",
    lastSent: "2024-08-12 12:15:00",
  },
  {
    id: 5,
    name: "User Import 5",
    source: "API D",
    type: "Manual",
    frequency: "Weekly",
    lastSent: "2024-08-11 16:40:00",
  },
  // Add more entries as needed
];

// decideImportData.js
const templateData = [
  {
    id: 1,
    name: "Decide Import 1",
    period: "Weekly",
    groupBy: "Region",
    lastGenerated: "2024-08-16 11:00:00",
  },
  {
    id: 2,
    name: "Decide Import 2",
    period: "Monthly",
    groupBy: "Department",
    lastGenerated: "2024-08-15 08:10:00",
  },
  {
    id: 3,
    name: "Decide Import 3",
    period: "Daily",
    groupBy: "Product Type",
    lastGenerated: "2024-08-14 15:30:00",
  },
  {
    id: 4,
    name: "Decide Import 4",
    period: "Weekly",
    groupBy: "Sales Channel",
    lastGenerated: "2024-08-13 10:50:00",
  },
  {
    id: 5,
    name: "Decide Import 5",
    period: "Monthly",
    groupBy: "Customer Segment",
    lastGenerated: "2024-08-12 14:05:00",
  },
  // Add more entries as needed
];


const userData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Robert Johnson" },
  { id: 4, name: "Emily Davis" },
  { id: 5, name: "Michael Brown" },
  { id: 6, name: "Sarah Wilson" },
  { id: 7, name: "David Lee" },
  { id: 8, name: "Olivia Martinez" },
  { id: 9, name: "James Anderson" },
  { id: 10, name: "Sophia Taylor" },
  { id: 11, name: "Daniel Harris" },
  { id: 12, name: "Isabella Clark" },
  { id: 13, name: "Matthew Lewis" },
  { id: 14, name: "Mia Walker" },
  { id: 15, name: "William Young" },
  { id: 16, name: "Ava Hall" },
  { id: 17, name: "Ethan Allen" },
  { id: 18, name: "Charlotte Scott" },
  { id: 19, name: "Joshua Wright" },
  { id: 20, name: "Amelia King" },
  // Add more users as needed
];
 export {scheduledData, templateData,userData};