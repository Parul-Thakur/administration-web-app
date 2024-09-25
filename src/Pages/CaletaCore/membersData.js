// data.js

const departmentData = [
  {
    "id": 1,
    "department_name": "Human Resources",
    "users": [
      { "id": 101, "user_logon": "jdoe", "name": "John Doe", "email": "jdoe@example.com" },
      { "id": 102, "user_logon": "asmith", "name": "Alice Smith", "email": "asmith@example.com" },
      { "id": 103, "user_logon": "bwilliams", "name": "Bob Williams", "email": "bwilliams@example.com" },
      { "id": 104, "user_logon": "ckim", "name": "Chris Kim", "email": "ckim@example.com" },
      { "id": 105, "user_logon": "djones", "name": "Diana Jones", "email": "djones@example.com" }
    ]
  },
  {
    "id": 2,
    "department_name": "Finance",
    "users": [
      { "id": 106, "user_logon": "emartinez", "name": "Eva Martinez", "email": "emartinez@example.com" },
      { "id": 107, "user_logon": "ffoster", "name": "Frank Foster", "email": "ffoster@example.com" },
      { "id": 108, "user_logon": "gmorgan", "name": "Gina Morgan", "email": "gmorgan@example.com" },
      { "id": 109, "user_logon": "hwhite", "name": "Hank White", "email": "hwhite@example.com" },
      { "id": 110, "user_logon": "imendez", "name": "Isabel Mendez", "email": "imendez@example.com" }
    ]
  },
  {
    "id": 3,
    "department_name": "IT",
    "users": [
      { "id": 111, "user_logon": "jrobinson", "name": "Jake Robinson", "email": "jrobinson@example.com" },
      { "id": 112, "user_logon": "kcollins", "name": "Karen Collins", "email": "kcollins@example.com" },
      { "id": 113, "user_logon": "lbaker", "name": "Liam Baker", "email": "lbaker@example.com" },
      { "id": 114, "user_logon": "mking", "name": "Mona King", "email": "mking@example.com" },
      { "id": 115, "user_logon": "ndavis", "name": "Nathan Davis", "email": "ndavis@example.com" }
    ]
  },
  {
    "id": 4,
    "department_name": "Marketing",
    "users": [
      { "id": 116, "user_logon": "orichards", "name": "Olivia Richards", "email": "orichards@example.com" },
      { "id": 117, "user_logon": "pscott", "name": "Paul Scott", "email": "pscott@example.com" },
      { "id": 118, "user_logon": "qgreen", "name": "Quincy Green", "email": "qgreen@example.com" },
      { "id": 119, "user_logon": "rhall", "name": "Rachel Hall", "email": "rhall@example.com" },
      { "id": 120, "user_logon": "slee", "name": "Sophie Lee", "email": "slee@example.com" }
    ]
  },
  {
    "id": 5,
    "department_name": "Production",
    "users": [
      { "id": 121, "user_logon": "tmorris", "name": "Tony Morris", "email": "tmorris@example.com" },
      { "id": 122, "user_logon": "uwilliams", "name": "Uma Williams", "email": "uwilliams@example.com" },
      { "id": 123, "user_logon": "vclark", "name": "Victor Clark", "email": "vclark@example.com" },
      { "id": 124, "user_logon": "wwilson", "name": "Wendy Wilson", "email": "wwilson@example.com" },
      { "id": 125, "user_logon": "xlopez", "name": "Xavier Lopez", "email": "xlopez@example.com" }
    ]
  }
]
const allUsers = [
  { userlogon: "user01", name: "Alice Johnson", email: "alice.johnson@example.com" },
  { userlogon: "user02", name: "Bob Smith", email: "bob.smith@example.com" },
  { userlogon: "user03", name: "Charlie Brown", email: "charlie.brown@example.com" },
  { userlogon: "user04", name: "Diana Prince", email: "diana.prince@example.com" },
  { userlogon: "user05", name: "Edward Norton", email: "edward.norton@example.com" },
  { userlogon: "user06", name: "Fiona Gallagher", email: "fiona.gallagher@example.com" },
  { userlogon: "user07", name: "George Clark", email: "george.clark@example.com" },
  { userlogon: "user08", name: "Hannah Lee", email: "hannah.lee@example.com" },
  { userlogon: "user09", name: "Isaac Newton", email: "isaac.newton@example.com" },
  { userlogon: "user10", name: "Julia Roberts", email: "julia.roberts@example.com" },
  { userlogon: "user11", name: "Kevin Durant", email: "kevin.durant@example.com" },
  { userlogon: "user12", name: "Laura Croft", email: "laura.croft@example.com" },
  { userlogon: "user13", name: "Michael Jordan", email: "michael.jordan@example.com" },
  { userlogon: "user14", name: "Natalie Portman", email: "natalie.portman@example.com" },
  { userlogon: "user15", name: "Oliver Queen", email: "oliver.queen@example.com" },
];


const groupData = [
  {
    "id": 1,
    "group_name": "Project Alpha",
    "users": [
      { "id": 201, "user_logon": "tadams", "name": "Tom Adams", "email": "tadams@example.com" },
      { "id": 202, "user_logon": "ubel", "name": "Uma Bel", "email": "ubel@example.com" },
      { "id": 203, "user_logon": "vclarkson", "name": "Victor Clarkson", "email": "vclarkson@example.com" },
      { "id": 204, "user_logon": "wendy", "name": "Wendy Williams", "email": "wendy@example.com" },
      { "id": 205, "user_logon": "xavier", "name": "Xavier Thomas", "email": "xavier@example.com" }
    ]
  },
  {
    "id": 2,
    "group_name": "Beta Team",
    "users": [
      { "id": 206, "user_logon": "yarner", "name": "Yara Garner", "email": "yarner@example.com" },
      { "id": 207, "user_logon": "zhal", "name": "Zane Hall", "email": "zhal@example.com" },
      { "id": 208, "user_logon": "abryant", "name": "Ava Bryant", "email": "abryant@example.com" },
      { "id": 209, "user_logon": "bgriffin", "name": "Brian Griffin", "email": "bgriffin@example.com" },
      { "id": 210, "user_logon": "cjones", "name": "Chloe Jones", "email": "cjones@example.com" }
    ]
  },
  {
    "id": 3,
    "group_name": "Research Group Gamma",
    "users": [
      { "id": 211, "user_logon": "djordan", "name": "Daniel Jordan", "email": "djordan@example.com" },
      { "id": 212, "user_logon": "esmith", "name": "Emily Smith", "email": "esmith@example.com" },
      { "id": 213, "user_logon": "fnguyen", "name": "Frank Nguyen", "email": "fnguyen@example.com" },
      { "id": 214, "user_logon": "glee", "name": "Grace Lee", "email": "glee@example.com" },
      { "id": 215, "user_logon": "hthompson", "name": "Hannah Thompson", "email": "hthompson@example.com" }
    ]
  },
  {
    "id": 4,
    "group_name": "Innovation Hub Delta",
    "users": [
      { "id": 216, "user_logon": "iroberts", "name": "Isaac Roberts", "email": "iroberts@example.com" },
      { "id": 217, "user_logon": "jnelson", "name": "Julia Nelson", "email": "jnelson@example.com" },
      { "id": 218, "user_logon": "kbell", "name": "Kevin Bell", "email": "kbell@example.com" },
      { "id": 219, "user_logon": "lmorris", "name": "Linda Morris", "email": "lmorris@example.com" },
      { "id": 220, "user_logon": "mjohnson", "name": "Michael Johnson", "email": "mjohnson@example.com" }
    ]
  },
  {
    "id": 5,
    "group_name": "Task Force Epsilon",
    "users": [
      { "id": 221, "user_logon": "nperry", "name": "Nora Perry", "email": "nperry@example.com" },
      { "id": 222, "user_logon": "omartinez", "name": "Oscar Martinez", "email": "omartinez@example.com" },
      { "id": 223, "user_logon": "pramos", "name": "Patricia Ramos", "email": "pramos@example.com" },
      { "id": 224, "user_logon": "qstevens", "name": "Quentin Stevens", "email": "qstevens@example.com" },
      { "id": 225, "user_logon": "rwatson", "name": "Rachel Watson", "email": "rwatson@example.com" }
    ]
  }
]


const deviceData = [
  {
    "id": 1,
    "device_name": "Device Alpha",
    "users": [
      { "id": 201, "user_logon": "tadams", "name": "Tom Adams", "email": "tadams@example.com" },
      { "id": 202, "user_logon": "ubel", "name": "Uma Bel", "email": "ubel@example.com" },
      { "id": 203, "user_logon": "vclarkson", "name": "Victor Clarkson", "email": "vclarkson@example.com" },
      { "id": 204, "user_logon": "wendy", "name": "Wendy Williams", "email": "wendy@example.com" },
      { "id": 205, "user_logon": "xavier", "name": "Xavier Thomas", "email": "xavier@example.com" }
    ]
  },
  {
    "id": 2,
    "device_name": "Beta Terminal",
    "users": [
      { "id": 206, "user_logon": "yarner", "name": "Yara Garner", "email": "yarner@example.com" },
      { "id": 207, "user_logon": "zhal", "name": "Zane Hall", "email": "zhal@example.com" },
      { "id": 208, "user_logon": "abryant", "name": "Ava Bryant", "email": "abryant@example.com" },
      { "id": 209, "user_logon": "bgriffin", "name": "Brian Griffin", "email": "bgriffin@example.com" },
      { "id": 210, "user_logon": "cjones", "name": "Chloe Jones", "email": "cjones@example.com" }
    ]
  },
  {
    "id": 3,
    "device_name": "Gamma Research Unit",
    "users": [
      { "id": 211, "user_logon": "djordan", "name": "Daniel Jordan", "email": "djordan@example.com" },
      { "id": 212, "user_logon": "esmith", "name": "Emily Smith", "email": "esmith@example.com" },
      { "id": 213, "user_logon": "fnguyen", "name": "Frank Nguyen", "email": "fnguyen@example.com" },
      { "id": 214, "user_logon": "glee", "name": "Grace Lee", "email": "glee@example.com" },
      { "id": 215, "user_logon": "hthompson", "name": "Hannah Thompson", "email": "hthompson@example.com" }
    ]
  },
  {
    "id": 4,
    "device_name": "Delta Innovation Hub",
    "users": [
      { "id": 216, "user_logon": "iroberts", "name": "Isaac Roberts", "email": "iroberts@example.com" },
      { "id": 217, "user_logon": "jnelson", "name": "Julia Nelson", "email": "jnelson@example.com" },
      { "id": 218, "user_logon": "kbell", "name": "Kevin Bell", "email": "kbell@example.com" },
      { "id": 219, "user_logon": "lmorris", "name": "Linda Morris", "email": "lmorris@example.com" },
      { "id": 220, "user_logon": "mjohnson", "name": "Michael Johnson", "email": "mjohnson@example.com" }
    ]
  },
  {
    "id": 5,
    "device_name": "Epsilon Task Force Terminal",
    "users": [
      { "id": 221, "user_logon": "nperry", "name": "Nora Perry", "email": "nperry@example.com" },
      { "id": 222, "user_logon": "omartinez", "name": "Oscar Martinez", "email": "omartinez@example.com" },
      { "id": 223, "user_logon": "pramos", "name": "Patricia Ramos", "email": "pramos@example.com" },
      { "id": 224, "user_logon": "qstevens", "name": "Quentin Stevens", "email": "qstevens@example.com" },
      { "id": 225, "user_logon": "rwatson", "name": "Rachel Watson", "email": "rwatson@example.com" }
    ]
  }
];

const costCodeData = [
  {
    "id": 1,
    "cost_code_name": "Alpha Operations",
    "users": [
      { "id": 201, "user_logon": "tadams", "name": "Tom Adams", "email": "tadams@example.com" },
      { "id": 202, "user_logon": "ubel", "name": "Uma Bel", "email": "ubel@example.com" },
      { "id": 203, "user_logon": "vclarkson", "name": "Victor Clarkson", "email": "vclarkson@example.com" },
      { "id": 204, "user_logon": "wendy", "name": "Wendy Williams", "email": "wendy@example.com" },
      { "id": 205, "user_logon": "xavier", "name": "Xavier Thomas", "email": "xavier@example.com" }
    ]
  },
  {
    "id": 2,
    "cost_code_name": "Beta Operations",
    "users": [
      { "id": 206, "user_logon": "yarner", "name": "Yara Garner", "email": "yarner@example.com" },
      { "id": 207, "user_logon": "zhal", "name": "Zane Hall", "email": "zhal@example.com" },
      { "id": 208, "user_logon": "abryant", "name": "Ava Bryant", "email": "abryant@example.com" },
      { "id": 209, "user_logon": "bgriffin", "name": "Brian Griffin", "email": "bgriffin@example.com" },
      { "id": 210, "user_logon": "cjones", "name": "Chloe Jones", "email": "cjones@example.com" }
    ]
  },
  {
    "id": 3,
    "cost_code_name": "Gamma Research",
    "users": [
      { "id": 211, "user_logon": "djordan", "name": "Daniel Jordan", "email": "djordan@example.com" },
      { "id": 212, "user_logon": "esmith", "name": "Emily Smith", "email": "esmith@example.com" },
      { "id": 213, "user_logon": "fnguyen", "name": "Frank Nguyen", "email": "fnguyen@example.com" },
      { "id": 214, "user_logon": "glee", "name": "Grace Lee", "email": "glee@example.com" },
      { "id": 215, "user_logon": "hthompson", "name": "Hannah Thompson", "email": "hthompson@example.com" }
    ]
  },
  {
    "id": 4,
    "cost_code_name": "Delta Innovation",
    "users": [
      { "id": 216, "user_logon": "iroberts", "name": "Isaac Roberts", "email": "iroberts@example.com" },
      { "id": 217, "user_logon": "jnelson", "name": "Julia Nelson", "email": "jnelson@example.com" },
      { "id": 218, "user_logon": "kbell", "name": "Kevin Bell", "email": "kbell@example.com" },
      { "id": 219, "user_logon": "lmorris", "name": "Linda Morris", "email": "lmorris@example.com" },
      { "id": 220, "user_logon": "mjohnson", "name": "Michael Johnson", "email": "mjohnson@example.com" }
    ]
  },
  {
    "id": 5,
    "cost_code_name": "Epsilon Task Force",
    "users": [
      { "id": 221, "user_logon": "nperry", "name": "Nora Perry", "email": "nperry@example.com" },
      { "id": 222, "user_logon": "omartinez", "name": "Oscar Martinez", "email": "omartinez@example.com" },
      { "id": 223, "user_logon": "pramos", "name": "Patricia Ramos", "email": "pramos@example.com" },
      { "id": 224, "user_logon": "qstevens", "name": "Quentin Stevens", "email": "qstevens@example.com" },
      { "id": 225, "user_logon": "rwatson", "name": "Rachel Watson", "email": "rwatson@example.com" }
    ]
  }
];


export { departmentData, groupData, deviceData, costCodeData ,allUsers };
