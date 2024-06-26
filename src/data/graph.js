const ctx1 = document.getElementById('agingChart').getContext('2d');
const agingData = {
  labels: ['2020', '2025', '2030', '2035', '2040', '2045', '2050'],
  datasets: [{
    label: 'Aumento da população Idosa no mundo: 2020-2050 (Bilhões)',
    data: [11, 13, 14, 16, 17.5, 19, 21],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};
const agingConfig = {
  type: 'line',
  data: agingData,
  options: {
    scales: {
      x: {
        beginAtZero: true,
        suggestedMax: 2055 // Extend slightly beyond the last label
      },
      y: {
        display: false,
        beginAtZero: true,
        suggestedMax: 2.5 // Extend slightly above the maximum data value
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          visible: false // Hides the labels
          // usePointStyle: true,
          // boxWidth: 6 // Reduces the size of the color box, making it less dominant
        }
      },
      tooltip: { enabled: true },
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        color: '#555',
        font: {
          weight: 'bold'
        },
        formatter: function (value, ctx) {
          return value + '%';
        }
      }
    }
  },
  plugins: [ChartDataLabels]
};
new Chart(ctx1, agingConfig);

// Gráfico de Distribuição por Idade
const ctx2 = document.getElementById('ageDistributionChart').getContext('2d');
const ageData = {
  labels: ['60-64 anos', '65-69 anos', '70-74 anos', '75-79 anos', '80-84 anos', '85+ anos'],
  datasets: [{
    label: 'Distribuição por Faixa Etária no Brasil em 2023 (%)',
    data: [4.9, 3.8, 2.8, 1.9, 1.1, 0.6],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
  }]
};
const ageConfig = {
  type: 'bar',
  data: ageData,
  options: {
    scales: {
      x: {
        grid: {
          display: false
        },
        beginAtZero: true,
        suggestedMax: 90 // Adjust as needed
      },
      y: {
        display: false,
        beginAtZero: true,
        suggestedMax: 6 // Adjust as needed to ensure labels fit
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 6 // Minimizes the color box
        }
      },
      datalabels: {
        align: 'top',
        anchor: 'end',
        color: '#555',
        font: {
          weight: 'bold'
        },
        formatter: function (value, context) {
          return value + '%';
        }
      }
    }
  },
  plugins: [ChartDataLabels]
};
new Chart(ctx2, ageConfig);