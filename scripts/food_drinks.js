

    new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Used Food",
          backgroundColor: "#39EAAD",
          data: [10,18,27,35,41,52]
        }, {
          label: "Used Drinks",
          backgroundColor: "#006CD4",
          defaultFontSize: 12,
          data: [14,16,23,34,39,43]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'How much % of the food and drinks is left?'
      }
    }
});
