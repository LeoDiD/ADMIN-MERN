const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      scales: {
        r: {
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 18
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Polar Area Chart With Centered Point Labels'
        }
      }
    },
  };