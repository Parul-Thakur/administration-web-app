// useData.js

const UserData = [
  {
    id: 1,
    userLogon: 'user123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    fak: 'FAK001'
  },
  {
    id: 2,
    userLogon: 'user456',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    fak: 'FAK002'
  },
  {
    id: 3,
    userLogon: 'user789',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    fak: 'FAK003'
  },
  {
    id: 4,
    userLogon: 'user101',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    fak: 'FAK004'
  },
  {
    id: 5,
    userLogon: 'user202',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    fak: 'FAK005'
  },
  {
    id: 6,
    userLogon: 'user303',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    fak: 'FAK006'
  },
  {
    id: 7,
    userLogon: 'user404',
    name: 'Olivia Martinez',
    email: 'olivia.martinez@example.com',
    fak: 'FAK007'
  },
  {
    id: 8,
    userLogon: 'user505',
    name: 'James Anderson',
    email: 'james.anderson@example.com',
    fak: 'FAK008'
  },
  {
    id: 9,
    userLogon: 'user606',
    name: 'Sophia Taylor',
    email: 'sophia.taylor@example.com',
    fak: 'FAK009'
  },
  {
    id: 10,
    userLogon: 'user707',
    name: 'William Thomas',
    email: 'william.thomas@example.com',
    fak: 'FAK010'
  },
  {
    id: 11,
    userLogon: 'user808',
    name: 'Isabella Garcia',
    email: 'isabella.garcia@example.com',
    fak: 'FAK011'
  },
  {
    id: 12,
    userLogon: 'user909',
    name: 'Ethan Lee',
    email: 'ethan.lee@example.com',
    fak: 'FAK012'
  },
  {
    id: 13,
    userLogon: 'user010',
    name: 'Mia Rodriguez',
    email: 'mia.rodriguez@example.com',
    fak: 'FAK013'
  },
  {
    id: 14,
    userLogon: 'user111',
    name: 'Liam Walker',
    email: 'liam.walker@example.com',
    fak: 'FAK014'
  },
  {
    id: 15,
    userLogon: 'user212',
    name: 'Ava Hernandez',
    email: 'ava.hernandez@example.com',
    fak: 'FAK015'
  },
  {
    id: 16,
    userLogon: 'user313',
    name: 'Noah Young',
    email: 'noah.young@example.com',
    fak: 'FAK016'
  },
  {
    id: 17,
    userLogon: 'user414',
    name: 'Emma King',
    email: 'emma.king@example.com',
    fak: 'FAK017'
  },
  {
    id: 18,
    userLogon: 'user515',
    name: 'Lucas Wright',
    email: 'lucas.wright@example.com',
    fak: 'FAK018'
  },
  {
    id: 19,
    userLogon: 'user616',
    name: 'Mason Scott',
    email: 'mason.scott@example.com',
    fak: 'FAK019'
  },
  {
    id: 20,
    userLogon: 'user717',
    name: 'Charlotte Adams',
    email: 'charlotte.adams@example.com',
    fak: 'FAK020'
  }
];

export default UserData;

export const accessCodes = [
  {
    id: 1,
    accessCode: "ABC123",
    type: "Admin",
    expiryDate: "2024-12-31"
  },
  {
    id: 2,
    accessCode: "XYZ456",
    type: "User",
    expiryDate: "2024-11-30"
  },
  {
    id: 3,
    accessCode: "LMN789",
    type: "Guest",
    expiryDate: "2024-10-15"
  },
  {
    id: 4,
    accessCode: "PQR987",
    type: "User",
    expiryDate: "2025-01-10"
  },
  {
    id: 5,
    accessCode: "DEF456",
    type: "Admin",
    expiryDate: "2024-09-25"
  },
  {
    id: 6,
    accessCode: "GHI321",
    type: "Guest",
    expiryDate: "2024-11-05"
  },
  {
    id: 7,
    accessCode: "JKL654",
    type: "Admin",
    expiryDate: "2025-03-20"
  }
];

export const aliasData= [
  { id: 1, alias: 'Admin' },
  { id: 2, alias: 'User' },
  { id: 3, alias: 'SuperAdmin' },
  { id: 4, alias: 'Guest' },
  { id: 5, alias: 'Manager' },
  { id: 6, alias: 'Moderator' },
  { id: 7, alias: 'Developer' },
  { id: 8, alias: 'Support' },
  { id: 9, alias: 'Analyst' },
  { id: 10, alias: 'Executive' }
];

export const printDocData = [
  { id: 1, docName: 'Invoice_1234', receivedAt: '2024-09-20', timeDat: '10:30 AM' },
  { id: 2, docName: 'Report_Q2_2024', receivedAt: '2024-09-19', timeDat: '2:45 PM' },
  { id: 3, docName: 'PurchaseOrder_5678', receivedAt: '2024-09-18', timeDat: '11:15 AM' },
  { id: 4, docName: 'Contract_2024', receivedAt: '2024-09-17', timeDat: '4:00 PM' },
  { id: 5, docName: 'Proposal_XYZ', receivedAt: '2024-09-16', timeDat: '9:00 AM' },
  { id: 6, docName: 'DeliveryNote_7890', receivedAt: '2024-09-15', timeDat: '3:30 PM' },
  { id: 7, docName: 'Receipt_001', receivedAt: '2024-09-14', timeDat: '12:45 PM' },
  { id: 8, docName: 'Statement_Aug2024', receivedAt: '2024-09-13', timeDat: '8:00 AM' },
  { id: 9, docName: 'TaxForm_ABC', receivedAt: '2024-09-12', timeDat: '1:20 PM' },
  { id: 10, docName: 'License_2024', receivedAt: '2024-09-11', timeDat: '5:15 PM' }
];



