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
            borderColor: ['#303841', '#627284', '#eeeeee',' #ff5722'],
            data: [15, 10,25,50 ]
        }]
    },
    // Configuration options go here
    options: {legend: {
        labels: {
            fontColor: "white",
            fontSize: 12,
        }
    }}
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  var totalclick;
  var x = document.getElementById('night-test');
  var y = document.getElementById('dayMood');
  if(localStorage.getItem('night')){
    totalclick= JSON.parse(localStorage.getItem('night'))
  }else{
    totalclick = 0;
  }
  console.log(totalclick);
  if (JSON.parse(localStorage.getItem('night')) % 2 !== 0) {
    y.setAttribute('href', 'softwarenight.css');
  } else {
    y.setAttribute('href', 'css/style2.css');
  }
  x.addEventListener('click', test);
  function test() {
    totalclick++;
    console.log(totalclick);
    localStorage.setItem('night',JSON.stringify(totalclick));
    if (JSON.parse(localStorage.getItem('night')) % 2 !== 0) {
      y.setAttribute('href', 'softwarenight.css');
    } else {
      y.setAttribute('href', 'css/style2.css');
  
  }
}