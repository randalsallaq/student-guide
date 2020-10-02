var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [
            'Linguistics',
            'Sociology',
            'Psychology',
            'History'
        ],
        datasets: [{
            backgroundColor: ['#303841', '#627284', '#eeeeee',' #ff5722'],
            borderColor: ['#303841', '#627284', '#eeeeee',' #ff5722'],

            data: [50, 12.5,12.5, 25 ]
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


//     legend: {
//         labels: {
//             // This more specific font property overrides the global property
//             fontColor: 'white'
//         }
//     }

// });
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  ////////////////////



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
    y.setAttribute('href', 'arabicnight.css');
  //   document.getElementById('test-imgNigh').style.visibility = 'visible';
  //   document.getElementById('test-img').style.visibility = 'hidden';
  } else {
    y.setAttribute('href', 'arabic2.css');
  //   document.getElementById('test-imgNigh').style.visibility = 'hidden';
  //   document.getElementById('test-img').style.visibility = 'visible';
  }
  x.addEventListener('click', test);
  function test() {
    totalclick++;
    console.log(totalclick);
    localStorage.setItem('night',JSON.stringify(totalclick));
    if (JSON.parse(localStorage.getItem('night')) % 2 !== 0) {
      y.setAttribute('href', 'arabicnight.css');
  //     document.getElementById('test-imgNigh').style.visibility = 'visible';
  //     document.getElementById('test-img').style.visibility = 'hidden';
    } else {
      y.setAttribute('href', 'arabic2.css');
  //     document.getElementById('test-imgNigh').style.visibility = 'hidden';
  //     document.getElementById('test-img').style.visibility = 'visible';
  }
}