
var date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

document.getElementById('b-tech').innerHTML = `July 2018 - ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
// Navigation
var navbarBtn = document.getElementById('navbarButton');
var navbar = document.getElementById('navbar');

var active = document.querySelector('.active');
var navLinks = document.querySelectorAll('.nav-link');

var hr = document.getElementsByTagName('hr');
var hrTop = [];
for (var i = 0; i < hr.length; i++) {
  hrTop.push(hr[i].offsetTop);
}

var maxWidth = window.matchMedia("(max-width: 991px)");
maxWidth.addListener(() => {
  if(!maxWidth.matches){
    navbarBtn.setAttribute('class', 'navbar-toggler');
    navbarBtn.setAttribute('aria-expanded', 'true');
  }
});

navigateTo = id => {
  if(maxWidth.matches){
    navbarBtn.setAttribute('class', 'navbar-toggler collapsed');
    navbarBtn.setAttribute('aria-expanded', 'false');
    navbar.setAttribute('class', 'navbar-collapse collapse');
  }
  $('html, body').animate({
    scrollTop: $("#" + id).offset().top
  }, 1000);
}

setActive = element => {
  if (element != active) {
    element.setAttribute('class', 'nav-link active');
    active.setAttribute('class', 'nav-link');
    active = element;
  }
}

window.onscroll = () => {
  var thisTop = document.documentElement.scrollTop;
  if (thisTop <= hrTop[0]) {
    setActive(navLinks[0]);
  } else if (thisTop >= hrTop[0] && thisTop <= hrTop[1]) {
    setActive(navLinks[1]);
  } else if (thisTop >= hrTop[1] && thisTop <= hrTop[2]) {
    setActive(navLinks[2]);
  } else if (thisTop >= hrTop[2] && thisTop <= hrTop[3]) {
    setActive(navLinks[3]);
  } else {
    setActive(navLinks[4]);
  }
}
