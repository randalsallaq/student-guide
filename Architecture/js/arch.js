var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [
            'Employed',
            'Further study',
            'Working and studying',
            'Unemployed',
            'Other'
        ],
        datasets: [{
            backgroundColor: ['#303841', '#627284', '#eeeeee',' #ff5722', '#007377'],
            borderColor: ['#303841', '#627284', '#eeeeee',' #ff5722', '#007377'],
            data: [76.8, 8.5, 8, 6.3, 4.4 ]
        }]
    },

    // Configuration options go here
    legend: {
        labels: {
        }
    }

});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }