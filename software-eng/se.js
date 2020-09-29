var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [
            'Mathematics',
            'Project Management',
            'Engineering',
            'problem solving'
        ],
        datasets: [{
            backgroundColor: [' #303841', '#00adb5', '#eeeeee','#ff5722'],
            data: [25, 15,10,50 ]
        }]
    },

    // Configuration options go here
    options: {}

});