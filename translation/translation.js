'use strict';

var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['English','Chinese', 'Hindi', 'Spanish', 'French', 'Arabic'],
        datasets: [{
            label: 'Most spoken languages around the world',
            backgroundColor:['#303841', '#627284', '#eeeeee',' #ff5722', ' rgb(77, 77, 255)', 'rgb(235, 235, 224)'],
            borderColor: ['#303841', '#627284', '#eeeeee',' #ff5722', ' rgb(77, 77, 255)', 'rgb(235, 235, 224)'],
            data: [ 1268, 1120 , 637, 538, 277, 274]
        }]
    },

    // Configuration options go here
    options: {}
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }