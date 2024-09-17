import React, { useState } from "react";
import { useTheme } from "../../utils/ThemeContext";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  Typography,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import { Bar, Pie, Line, Radar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale,
  DoughnutController,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale,
  DoughnutController
);

export default function Statistics() {
  const [selectedChart, setSelectedChart] = useState("bar");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedDataScenario, setSelectedDataScenario] = useState("scenario1");

  const dataByYearAndScenario = {
    2024: {
      scenario1: { labels: ["Red", "Blue", "Yellow"], data: [320, 60, 110] },
      scenario2: { labels: ["A", "B", "C"], data: [140, 210, 90] },
      scenario3: { labels: ["M", "N", "O"], data: [100, 150, 200] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [200, 300, 400] },
      scenario5: { labels: ["X", "Y", "Z"], data: [80, 220, 120] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [300, 400, 500, 600],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [120, 180, 90],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [150, 100, 50] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [60, 120, 90],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [70, 130, 200],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [150, 100, 250] },
      scenario12: { labels: ["Jan", "Feb", "Mar"], data: [300, 200, 400] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [500, 600, 700, 800],
      },
      scenario14: { labels: ["Online", "Offline"], data: [800, 200] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [100, 200, 300] },
    },
    2023: {
      scenario1: { labels: ["Red", "Blue", "Yellow"], data: [300, 50, 100] },
      scenario2: { labels: ["A", "B", "C"], data: [120, 200, 80] },
      scenario3: { labels: ["M", "N", "O"], data: [90, 170, 130] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [150, 250, 350] },
      scenario5: { labels: ["X", "Y", "Z"], data: [100, 190, 110] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [250, 350, 450, 550],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [110, 160, 80],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [130, 90, 60] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [70, 110, 80],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [60, 140, 180],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [140, 120, 230] },
      scenario12: { labels: ["Apr", "May", "Jun"], data: [400, 300, 200] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [600, 700, 800, 900],
      },
      scenario14: { labels: ["Online", "Offline"], data: [700, 300] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [120, 190, 250] },
    },
    2022: {
      scenario1: {
        labels: ["Green", "Purple", "Orange"],
        data: [200, 150, 80],
      },
      scenario2: { labels: ["X", "Y", "Z"], data: [100, 250, 130] },
      scenario3: { labels: ["M", "N", "O"], data: [160, 90, 200] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [180, 270, 360] },
      scenario5: { labels: ["P", "Q", "R"], data: [140, 200, 110] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [200, 300, 400, 500],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [90, 150, 100],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [120, 80, 60] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [50, 100, 70],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [80, 120, 150],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [160, 130, 200] },
      scenario12: { labels: ["Jul", "Aug", "Sep"], data: [250, 350, 450] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [700, 800, 900, 1000],
      },
      scenario14: { labels: ["Online", "Offline"], data: [600, 400] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [130, 180, 220] },
    },
    2021: {
      scenario1: { labels: ["Pink", "Cyan", "Gray"], data: [120, 230, 150] },
      scenario2: { labels: ["P", "Q", "R"], data: [200, 100, 70] },
      scenario3: { labels: ["M", "N", "O"], data: [80, 150, 210] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [250, 350, 450] },
      scenario5: { labels: ["X", "Y", "Z"], data: [110, 160, 200] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [150, 250, 350, 450],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [100, 140, 80],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [130, 90, 50] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [80, 110, 60],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [90, 120, 150],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [130, 120, 240] },
      scenario12: { labels: ["Oct", "Nov", "Dec"], data: [300, 200, 350] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [500, 600, 700, 800],
      },
      scenario14: { labels: ["Online", "Offline"], data: [500, 500] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [140, 180, 210] },
    },
    2020: {
      scenario1: { labels: ["Black", "White", "Gray"], data: [130, 120, 140] },
      scenario2: { labels: ["U", "V", "W"], data: [110, 200, 140] },
      scenario3: { labels: ["M", "N", "O"], data: [70, 160, 180] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [150, 250, 350] },
      scenario5: { labels: ["X", "Y", "Z"], data: [100, 180, 90] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [200, 300, 400, 500],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [80, 160, 120],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [140, 100, 60] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [90, 130, 80],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [80, 150, 200],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [160, 140, 230] },
      scenario12: { labels: ["Jan", "Feb", "Mar"], data: [400, 300, 500] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [600, 700, 800, 900],
      },
      scenario14: { labels: ["Online", "Offline"], data: [400, 600] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [150, 190, 230] },
    },
    2019: {
      scenario1: { labels: ["Orange", "Pink", "Teal"], data: [150, 160, 120] },
      scenario2: { labels: ["L", "M", "N"], data: [90, 210, 120] },
      scenario3: { labels: ["M", "N", "O"], data: [120, 140, 180] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [200, 300, 400] },
      scenario5: { labels: ["X", "Y", "Z"], data: [130, 150, 170] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [250, 350, 450, 550],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [100, 160, 110],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [120, 70, 50] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [80, 110, 70],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [90, 130, 180],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [140, 130, 250] },
      scenario12: { labels: ["Apr", "May", "Jun"], data: [350, 250, 400] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [700, 800, 900, 1000],
      },
      scenario14: { labels: ["Online", "Offline"], data: [600, 400] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [180, 200, 240] },
    },
    2018: {
      scenario1: { labels: ["Maroon", "Navy", "Olive"], data: [110, 100, 140] },
      scenario2: { labels: ["A", "B", "C"], data: [80, 190, 110] },
      scenario3: { labels: ["M", "N", "O"], data: [130, 150, 200] },
      scenario4: { labels: ["Alpha", "Beta", "Gamma"], data: [180, 270, 360] },
      scenario5: { labels: ["X", "Y", "Z"], data: [140, 160, 180] },
      scenario6: {
        labels: ["North", "South", "East", "West"],
        data: [180, 270, 360, 450],
      },
      scenario7: {
        labels: ["Apples", "Oranges", "Bananas"],
        data: [110, 140, 120],
      },
      scenario8: { labels: ["Dogs", "Cats", "Birds"], data: [100, 80, 60] },
      scenario9: {
        labels: ["Morning", "Afternoon", "Evening"],
        data: [90, 120, 70],
      },
      scenario10: {
        labels: ["Small", "Medium", "Large"],
        data: [70, 140, 200],
      },
      scenario11: { labels: ["Red", "Green", "Blue"], data: [140, 120, 230] },
      scenario12: { labels: ["Jul", "Aug", "Sep"], data: [250, 300, 400] },
      scenario13: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        data: [500, 600, 700, 800],
      },
      scenario14: { labels: ["Online", "Offline"], data: [300, 700] },
      scenario15: { labels: ["X1", "X2", "X3"], data: [160, 200, 240] },
    },
  };

  const handleChangeChart = (event) => {
    setSelectedChart(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleDataScenarioChange = (event) => {
    setSelectedDataScenario(event.target.value);
  };
  const { theme } = useTheme();
  const chartData = {
    labels: dataByYearAndScenario[selectedYear][selectedDataScenario].labels,
    datasets: [
      {
        label: `Data for ${selectedYear} - ${selectedDataScenario}`,
        data: dataByYearAndScenario[selectedYear][selectedDataScenario].data,
        backgroundColor:
          theme === "dark"
            ? ["#91C8E4", "#578196", "#bbd4e1", "#e7e7e7"]
            : ["#041E49", "#91C8E4", "#C3E1F0", "#356076"],
        hoverBackgroundColor:
          theme === "dark"
            ? ["#F0F0F0", "#A8D0DB", "#4A90A4"]
            : ["#041E49", "#91C8E4", "#C3E1F0"],
      },
    ],
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{ padding: 0, margin: "4rem 2rem 0rem" }}
      >
        Statistics
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
      <div className="reportMain">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            margin: "2rem auto",
            textAlign: "center",
            backgroundColor: "var(--color)",
            padding: "2% 5% 0",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "var(--btn-bg)",
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          >
            Select Visualization Type:
          </Typography>
          <Grid container spacing={2} mb={5}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-head)",
                  }}
                >
                  Visualization Type
                </InputLabel>
                <Select
                  value={selectedChart}
                  onChange={handleChangeChart}
                  variant="outlined"
                  size="small"
                  label="Visualization Type"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--secondary-color) !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color) !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color) !important",
                    },
                    "& .MuiInputLabel-root": {
                      color: "var(--text-head)",
                    },
                    "& .MuiSelect-icon": {
                      color: "var(--text-head)",
                    },
                    "& .MuiSelect-select": {
                      color: "var(--text-grey)",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          backgroundColor: "var(--color)",
                          color: "var(--text-grey)",
                        },
                        "& .MuiMenuItem-root:hover": {
                          backgroundColor: "var(--primary-color)",
                          color: "#fff",
                        },
                        "&.MuiPaper-root": {
                          margin: 0,
                          padding: 0,
                          backgroundColor: "var(--color)",
                        },
                      },
                    },
                    sx: {
                      "& .MuiMenu-list": {
                        padding: 0,
                      },
                    },
                  }}
                >
                  <MenuItem value="bar">Bar Chart</MenuItem>
                  <MenuItem value="pie">Pie Chart</MenuItem>
                  <MenuItem value="line">Line Chart</MenuItem>
                  <MenuItem value="radar">Radar Chart</MenuItem>
                  <MenuItem value="doughnut">Doughnut Chart</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-head)",
                  }}
                >
                  Year
                </InputLabel>
                <Select
                  value={selectedYear}
                  onChange={handleYearChange}
                  variant="outlined"
                  size="small"
                  label="Year"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--secondary-color) !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color) !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color) !important",
                    },
                    "& .MuiInputLabel-root": {
                      color: "var(--text-head)",
                    },
                    "& .MuiSelect-icon": {
                      color: "var(--text-head)",
                    },
                    "& .MuiSelect-select": {
                      color: "var(--text-grey)",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          backgroundColor: "var(--color)",
                          color: "var(--text-grey)",
                        },
                        "& .MuiMenuItem-root:hover": {
                          backgroundColor: "var(--primary-color)",
                          color: "#fff",
                        },
                        "&.MuiPaper-root": {
                          margin: 0,
                          padding: 0,
                          backgroundColor: "var(--color)",
                        },
                      },
                    },
                    sx: {
                      "& .MuiMenu-list": {
                        padding: 0,
                      },
                    },
                  }}
                >
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                  <MenuItem value="2018">2018</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-head)",
                  }}
                >
                  Data Scenario
                </InputLabel>
                <Select
                  value={selectedDataScenario}
                  onChange={handleDataScenarioChange}
                  variant="outlined"
                  size="small"
                  label="Data Scenario"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--secondary-color) !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color) !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--primary-color) !important",
                    },
                    "& .MuiInputLabel-root": {
                      color: "var(--text-head)",
                    },
                    "& .MuiSelect-icon": {
                      color: "var(--text-head)",
                    },
                    "& .MuiSelect-select": {
                      color: "var(--text-grey)",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root": {
                          backgroundColor: "var(--color)",
                          color: "var(--text-grey)",
                        },
                        "& .MuiMenuItem-root:hover": {
                          backgroundColor: "var(--primary-color)",
                          color: "#fff",
                        },
                        "&.MuiPaper-root": {
                          margin: 0,
                          padding: 0,
                          backgroundColor: "var(--color)",
                        },
                      },
                    },
                    sx: {
                      "& .MuiMenu-list": {
                        padding: 0,
                      },
                    },
                  }}
                >
                  <MenuItem value="scenario1">Scenario 1</MenuItem>
                  <MenuItem value="scenario2">Scenario 2</MenuItem>
                  <MenuItem value="scenario3">Scenario 3</MenuItem>
                  <MenuItem value="scenario4">Scenario 4</MenuItem>
                  <MenuItem value="scenario5">Scenario 5</MenuItem>
                  <MenuItem value="scenario6">Scenario 6</MenuItem>
                  <MenuItem value="scenario7">Scenario 7</MenuItem>
                  <MenuItem value="scenario8">Scenario 8</MenuItem>
                  <MenuItem value="scenario9">Scenario 9</MenuItem>
                  <MenuItem value="scenario10">Scenario 10</MenuItem>
                  <MenuItem value="scenario11">Scenario 11</MenuItem>
                  <MenuItem value="scenario12">Scenario 12</MenuItem>
                  <MenuItem value="scenario13">Scenario 13</MenuItem>
                  <MenuItem value="scenario14">Scenario 14</MenuItem>
                  <MenuItem value="scenario15">Scenario 15</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box
            sx={{
              // mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <Box
              sx={{
                width: "100%",
                // maxWidth: 1200,
                height: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {selectedChart === "bar" && (
                <Bar data={chartData} options={{ responsive: true }} />
              )}
              {selectedChart === "pie" && (
                <Pie data={chartData} options={{ responsive: true }} />
              )}
              {selectedChart === "line" && (
                <Line data={chartData} options={{ responsive: true }} />
              )}
              {selectedChart === "radar" && (
                <Radar data={chartData} options={{ responsive: true }} />
              )}
              {selectedChart === "doughnut" && (
                <Doughnut data={chartData} options={{ responsive: true }} />
              )}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}
// import React from "react";
// import { Grid, Box, Typography,  Button } from "@mui/material";
// import { Bar } from "react-chartjs-2";
// import { motion } from "framer-motion";
// import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

// Chart.register(BarElement, CategoryScale, LinearScale);

// const MotionPaper = motion(Paper);

// const data = {
//   labels: ["2020", "2021", "2022", "2023"],
//   datasets: [
//     {
//       label: "Annual Profits",
//       data: [4000, 6800, 9300, 14000],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// export default function Statistics()  {
//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <MotionPaper
//             sx={{ padding: 3 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography variant="h4">Financial Dashboard</Typography>
//             <Typography variant="subtitle1">Tue, December 19</Typography>
//           </MotionPaper>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <MotionPaper
//             sx={{ padding: 3 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography variant="h6">Visa</Typography>
//             <Typography>**** 2719</Typography>
//             <Button variant="contained" sx={{ marginRight: 1 }}>
//               Receive
//             </Button>
//             <Button variant="outlined">Send</Button>
//             <Typography variant="body2" sx={{ marginTop: 2 }}>
//               Monthly regular fee: $25.00
//             </Typography>
//           </MotionPaper>
//         </Grid>

//         <Grid item xs={12} md={8}>
//           <MotionPaper
//             sx={{ padding: 3 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography variant="h6">Annual Profits</Typography>
//             <Bar data={data} options={options} />
//           </MotionPaper>
//         </Grid>

//         {/* Add more components here as needed */}
//       </Grid>
//     </Box>
//   );
// };
