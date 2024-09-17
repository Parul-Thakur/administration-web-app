// import PeopleIcon from '@mui/icons-material/People';
// import DevicesIcon from '@mui/icons-material/Devices';
// import PrintIcon from '@mui/icons-material/Print';
// import ForestIcon from '@mui/icons-material/Forest';

// export const cardData = [
//   { title: 'Users', value: '123', icon: <PeopleIcon />, color: 'var(--primary-color)' },
//   { title: 'Devices', value: '456', icon: <DevicesIcon /> },
//   { title: 'Printed Today', value: '789', icon: <PrintIcon /> },
//   { title: 'Tree Saved', value: '2', icon: <ForestIcon /> },
// ];


import image1 from '../../Images/users.png';
import image2 from '../../Images/device.png';
import image3 from '../../Images/printed.png';
import image4 from '../../Images/trees.png';


export const cardData = [
  {
    id:1,
    image: image1,
    title: "Total Users",
    text: "3,424 active users",
  },
  {
    id:2,
    image: image2,
    title: "Devices in Network",
    text: "45 connected devices",
  },
  {
    id:3,
    image: image3,
    title: "Print Jobs Today",
    text: "78 documents printed",
  },
  {
    id:4,
    image: image4,
    title: "Trees Saved",
    text: "Equivalent to 3 trees",
  },
];

