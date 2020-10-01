'use strict';

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
  y.setAttribute('href', 'nightHome.css');
  document.getElementById('test-imgNigh').style.visibility = 'visible';
  document.getElementById('test-img').style.visibility = 'hidden';

} else {
  y.setAttribute('href', 'home.css');
  document.getElementById('test-imgNigh').style.visibility = 'hidden';
  document.getElementById('test-img').style.visibility = 'visible';
  
}
x.addEventListener('click', test);

function test() {
  totalclick++;
  console.log(totalclick);

  localStorage.setItem('night',JSON.stringify(totalclick));
  if (JSON.parse(localStorage.getItem('night')) % 2 !== 0) {
    y.setAttribute('href', 'nightHome.css');
    document.getElementById('test-imgNigh').style.visibility = 'visible';
    document.getElementById('test-img').style.visibility = 'hidden';

  } else {
    y.setAttribute('href', 'home.css');
    document.getElementById('test-imgNigh').style.visibility = 'hidden';
    document.getElementById('test-img').style.visibility = 'visible';
    
  }

}
