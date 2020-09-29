var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [
            'Mathematics',
            'Project Management',
            'Manufacturing',
            'problem solving'
        ],
        datasets: [{
            backgroundColor: ['#303841', '#627284', '#eeeeee',' #ff5722'],
           
            data: [15, 10,25,50 ]
        }]
    },

    // Configuration options go here
    legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'white'
        }
    }

});