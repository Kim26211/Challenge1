
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      /*labels: ["Completed", "Uncomleted"],*/
      datasets: [
        {
          label: "Completed Journey",
          backgroundColor: ["#39EAAD", "white"],
          data: [74,26]
        }
      ]
    },
    options: {
      
    }
});



