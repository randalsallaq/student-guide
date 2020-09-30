var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [
            'Leadership skills',
            'Math skills',
            'Organizational skills',
            'Problem-solving skills'
        ],
        datasets: [{
            backgroundColor: ['#303841', '#627284', '#eeeeee',' #ff5722'],
           
            data: [50, 12.5,12.5, 25 ]
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
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }