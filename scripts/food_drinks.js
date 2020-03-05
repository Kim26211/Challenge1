

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
          legend: {
              display: true,
              align: 'start',

            position: 'top',
              labels: {
                  fontColor: 'white',
                  fontSize: 14,
                  fontFamily: 'helvetica',
                  /*padding: 25,*/
                  pointStyle: true,
                  boxWidth: 15,
              }
        },
        layout: {
            padding: {
                left: 16,
                right: 30,
                top: 10,
                bottom: 16
            }
        },
        scales: {
        xAxes: [{
            gridLines: {
                display: false,
            },
             ticks:{
                fontColor: 'white',  
                fontSize: 13,
                fontFamily: 'roboto mono',             
              }
        }],
        yAxes: [{
            gridLines: {
                color: '#A4F7FF',
                lineWidth: 0.2,
            },
             ticks:{
                fontColor: 'white',  
                fontSize: 13,
                fontFamily: 'roboto mono',             
              }
        }]
    }      

      }
    
});
