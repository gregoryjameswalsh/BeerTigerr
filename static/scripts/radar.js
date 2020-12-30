// JavaScript source code


var ctx = document.getElementById('radar-graph').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 3, 6, 0, 8, 7]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        ticks: {
            display: false
        },
        layout: {
            padding: 0
        }
    }
});
