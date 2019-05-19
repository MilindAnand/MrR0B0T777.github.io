var imag = document.querySelector('img');

imag.onclick = function() {
    var sorc = imag.getAttribute('src');
    if(sorc == 'images/3.jpg'){
        imag.setAttribute ('src','images/my_hero_academia.jpg');
    }
    else{
        imag.setAttribute ('src', 'images/3.jpg');
    }
}

var mybutt = document.querySelector('button');
var hed = document.querySelector('h1');

function setuser() {
    var usrnam = prompt("Please enter your name: ");
    localStorage.setItem('name', usrnam);
    hed.textContent = usrnam + ', It\'s time for Plus ULTRA!!!';
}

if(!localStorage.getItem('name')) {
    setuser();
  } else {
    var storedName = localStorage.getItem('name');
    hed.textContent = storedName + ', It\'s time for Plus ULTRA!!!';
  }

mybutt.onclick = function() {
    setuser();
}