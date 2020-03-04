
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ["Feb", "Mar","Apr","May","Jun","Jul",],
          datasets: [{ 
              data: [30,36,48,56,62,67],
              label: "Travelled distance",
              borderColor: "#39EAAD",
              fill: true
            }, { 
              data: [72,65,60,58,46,42],
              label: "Fuel left",
              borderColor: "#006FD1",
              fill: true
            }, 
          ]
        },
        options: {
            
            title: {
              display: true,
            }
            
        }
      });