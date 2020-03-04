/* google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Travelled distance', 'Fuel left'],
          ['Feb',  30,      65],
          ['Mar',  36,      60],
          ['Apr',  48,       58],
          ['May',  56,     46]
          
        ]);

        var options = {
          hAxis: { titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }*/