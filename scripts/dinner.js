
      new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: ["Pasta pesto", "Tomato soup", "Caprese salad", "Hamburger & fries"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#28ECAC", "#0069D8","white","#A7F6FF"],
            data: [25,30,30,15]
          }]
        },
        options: {
          legend: {
              display: true,
            position: 'bottom',
              labels: {
                  fontColor: 'white',
                  fontSize: 15,
                  fontFamily: 'helvetica',
                  boxWidth: 15,
              }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 15,
                bottom: 20
            }
        }
      }
    });