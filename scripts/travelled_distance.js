
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ["Feb", "Mar","Apr","May","Jun","Jul",],
          datasets: [{ 
              data: [30,36,48,56,62,67],
              label: "Travelled distance",
              borderColor: "#39EAAD",
              /*backgroundColor: '#39EAAD',*/
              fill: true
            }, { 
              data: [72,65,60,58,46,42],
              label: "Fuel left",
              borderColor: "#006FD1",
              /*backgroundColor: '#006FD1',*/
              /*borderDash: [8],*/
              fill: true
            }, 
          ]
        },
        options: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    fontColor: 'white',
                    fontSize: 14,
                    fontFamily: 'helvetica',
                    boxWidth: 15,
                    padding: 25,
                    /*fontFamily: 'roboto mono',*/  
                }
            },
            layout: {
            padding: {
                left: 20,
                right: 40,
                top: 10,
                bottom: 20
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