
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Completed distance", "Uncomleted distance"],
      datasets: [
        {
          label: "Completed Journey",
          backgroundColor: ["#39EAAD", "white"],
          data: [74,26]
        }
      ]
    },
     options: {
          title: {
            display: true,
            verticalAlign: 'middle',
            floating: true
               }
          legend: {
              display: false
              }
        }
});



