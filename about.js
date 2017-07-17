    window.onload = function () {
      var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "#677d87",
        title: {
          text: "Industry",
          fontColor: "#ccccbf"
        },
        toolTip:{
           content:"{name}" ,
         },
        axisX: {
          interval: 6,
          intervalType: "year",
          labelFontColor: "#ccccbf",
          tickThickness: 0,
          lineThickness: 1,
          lineColor: "#ccccbf",
          minimum: new Date(1977,11,31)
        },
        axisY: {
          interval: 5,
          minimum: 10,
          maximum: 40,
          labelFontColor: "#ccccbf",
          tickThickness: 0,
          lineThickness: 0
        },
        data: [
        {
          type: "bubble",
          dataPoints: [
            { x: new Date(1987,00,01), y: 28.7, z: 76, name: "New Zealand", color: "#ffc425" },
            { x: new Date(1981,00,01), y: 37.12, z: 48, name: "Singapore", color: "#ffc425" },
            { x: new Date(1997,00,01), y: 16.71, z: 4, name: "Philippines", color: "#ffc425" },
            { x: new Date(2007,00,01), y: 26.6, z: 5, name: "Sri Lanka", color: "#ffc425" },
            { x: new Date(2001,00,01), y: 33.11, z: 15, name: "Malaysia", color: "#ffc425" },
            { x: new Date(2012,00,01), y: 30.3, z: 11, name: "China", color: "#ffc425" }
          ]
        }
        ]
      });

      chart.render();
    }