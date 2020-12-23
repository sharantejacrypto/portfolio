
var date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

document.getElementById('b-tech').innerHTML = `July 2018 - ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
// Navigation
var activeTag = document.querySelector('.active');
var navLinks = document.querySelectorAll('.nav-link');
var hrTags = document.getElementsByTagName('hr');
var hrTop = [];
for (var i = 0; i < hrTags.length; i++) {
  hrTop.push(hrTags[i].offsetTop);
}

navigateTo = id => $('html, body').animate({
  scrollTop: $("#" + id).offset().top
}, 1000);

setActive = element => {
  if (element != activeTag) {
    element.setAttribute('class', 'nav-link active');
    activeTag.setAttribute('class', 'nav-link');
    activeTag = element;
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
  // else if (thisTop >= hrTop[3] && thisTop <= hrTop[4]) {
  //   setActive(navLinks[4]);
  // }
}
