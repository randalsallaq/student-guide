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
            backgroundColor:['#303841', '#627284', '#eeeeee',' #ff5722', '#007377', 'rgb(235, 235, 224)'],
            borderColor: ['#303841', '#627284', '#eeeeee',' #ff5722',  '#007377' , 'rgb(235, 235, 224)'],
            data: [ 1268, 1120 , 637, 538, 277, 274]
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


// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }


//   function openNav() {
//        document.getElementById("mySidenav").style.width = "0";
//   }document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   function closeNav() {


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
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
    y.setAttribute('href', 'nighttranslation.css');
  //   document.getElementById('test-imgNigh').style.visibility = 'visible';
  //   document.getElementById('test-img').style.visibility = 'hidden';
  
  } else {
    y.setAttribute('href', 'TRANSLATION.css');
  //   document.getElementById('test-imgNigh').style.visibility = 'hidden';
  //   document.getElementById('test-img').style.visibility = 'visible';
    
  }
  x.addEventListener('click', test);
  
  function test() {
    totalclick++;
    console.log(totalclick);
  
    localStorage.setItem('night',JSON.stringify(totalclick));
    if (JSON.parse(localStorage.getItem('night')) % 2 !== 0) {
      y.setAttribute('href', 'nighttranslation.css');
  //     document.getElementById('test-imgNigh').style.visibility = 'visible';
  //     document.getElementById('test-img').style.visibility = 'hidden';
  
    } else {
      y.setAttribute('href', 'TRANSLATION.css');
  //     document.getElementById('test-imgNigh').style.visibility = 'hidden';
  //     document.getElementById('test-img').style.visibility = 'visible';
      
  
  
  }
}
