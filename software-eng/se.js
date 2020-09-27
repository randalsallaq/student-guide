var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [
            'Mathematics',
            'Engineering',
            'Manufacturing',
            'problem solving',
            'Project Management'
        ],
        datasets: [{
            backgroundColor: ['lightblue', 'brown', 'gray','lightsalmon','lightgreen'],
            data: [25, 5,10,50,10 ]
        }]
    },

    // Configuration options go here
    options: {}

});