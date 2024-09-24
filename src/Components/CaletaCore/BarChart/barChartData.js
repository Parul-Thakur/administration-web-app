export const getChartData = (view) => {
  const now = new Date();
  const currentMonth = now.getMonth(); // 0-based index (0 for January, 11 for December)
  const currentDay = now.getDate() - 1; // 0-based index (0 for the 1st day)
  const currentYear = now.getFullYear(); // Full year (e.g., 2024)

  const data = {
    today: {
      labels: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
      datasets: [{
        label: 'Prints',
        data: [5, 10, 12, 8, 15, 20, 22, 18, 16, 10, 8, 5],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index === currentDay ? '#d46a1c' : '#f9b235';
        },
        borderColor: (context) => {
          const index = context.dataIndex;
          return index === currentDay ? '#d46a1c' : '#f9b235';
        },
        borderWidth: 1
      }]
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Prints',
        data: [100, 150, 200, 175, 180, 220, 210, 230, 250, 270, 300, 320],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return index === currentMonth ? '#d46a1c' : '#f9b235';
        },
        borderColor: (context) => {
          const index = context.dataIndex;
          return index === currentMonth ? '#d46a1c' : '#f9b235';
        },
        borderWidth: 1
      }]
    },
    yearly: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Prints',
        data: [1500, 1700, 1800, 2000, 1700],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          // Convert the label to a number and compare with currentYear
          return parseInt(context.chart.data.labels[index], 10) === currentYear ? '#d46a1c' : '#f9b235';
        },
        borderColor: (context) => {
          const index = context.dataIndex;
          // Convert the label to a number and compare with currentYear
          return parseInt(context.chart.data.labels[index], 10) === currentYear ? '#d46a1c' : '#f9b235';
        },
        borderWidth: 1
      }]
    }
  };

  return data[view];
};
