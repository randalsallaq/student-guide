'use strict';

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['English','Chinese', 'Hindi', 'Spanish', 'French', 'Arabic'],
        datasets: [{
            label: 'Most spoken languages around the world',
            backgroundColor:['rgb(61, 61, 41)', 'rgb(122, 122, 82)', 'rgb(194, 194, 163)', 'rgb(102, 26, 0)', 'rgb(255, 159, 128)', 'rgb(235, 235, 224)'],
            borderColor: ['rgb(61, 61, 41)', 'rgb(122, 122, 82)', 'rgb(194, 194, 163)', 'rgb(102, 26, 0)', 'rgb(255, 159, 128)', 'rgb(235, 235, 224)'],
            data: [ 1268, 1120 , 637, 538, 277, 274]
        }]
    },

    // Configuration options go here
    options: {}
});