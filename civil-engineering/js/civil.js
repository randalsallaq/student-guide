'use strict';

var ctx = document.getElementById('what jobs can you get as a civil engineering graduate-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {

        labels: ['Professional job', 'Professional job and study', 'Study only', 'Non-professional job', 'Non-professional job and study', 'Unemployed'],
        datasets: [{
           
            backgroundColor: ['rgb(0, 0, 255)','rgb(128,0,0)','rgb(192,192,192)','rgb(255,255,0)','rgb(128,0,128)','rgb(85,107,47)'],
            borderColor: ['rgb(0, 0, 255)','rgb(128,0,0)','rgb(192,192,192)','rgb(255,255,0)','rgb(128,0,128)','rgb(85,107,47)'],
            data: [69,3,15,6,1,5]
        }, ]
    },


    // Configuration options go here
    options: {}
});
