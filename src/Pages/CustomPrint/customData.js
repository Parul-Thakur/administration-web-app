// src/data/conditionsData.js

export const customData = [
  {
    id: 1,
    condition: "Username Equals to",
    outcomeType: "Success",
    output: "User found",
    users: [
      { userLogon: "jdoe", email: "jdoe@example.com", name: "John Doe" },
      { userLogon: "asmith", email: "asmith@example.com", name: "Alice Smith" },
    ],
  },
  {
    id: 2,
    condition: "Hostname Equals to",
    outcomeType: "Failed",
    output: "Host not found",
    users: [
      { userLogon: "bjones", email: "bjones@example.com", name: "Bob Jones" },
      { userLogon: "klee", email: "klee@example.com", name: "Karen Lee" },
    ],
  },
  {
    id: 3,
    condition: "Print Queue Equals to",
    outcomeType: "Success",
    output: "Queue found",
    users: [
      { userLogon: "mmiller", email: "mmiller@example.com", name: "Mary Miller" },
      { userLogon: "djohnson", email: "djohnson@example.com", name: "David Johnson" },
    ],
  },
];
