const navbar = document.getElementById("navbar-portfolio");
const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll=function(){
    if (window.pageYOffset>200) {
        navbar.classList.remove("bg-transparent","navbar-dark");
        navbar.classList.add("bg-light","navbar-light");
        scrollTopButton.classList.add("show");
    }
    else{
        navbar.classList.add("bg-transparent","navbar-dark");
        navbar.classList.remove("bg-light","navbar-light");
        scrollTopButton.classList.remove("show");
    }
}

// Get the root element
var r = document.querySelector('body');
// Create a function for setting a variable value

function changeColor(color,colorhover) {
    // change les variables
    r.style.setProperty('--color-accent', color);
    r.style.setProperty('--color-accent-hover', colorhover);
  }

  function ChangeColorFromPicker(){
    let color = document.getElementById("colorAccent");
    let colorHover = document.getElementById("colorHover");

    changeColor(color.value,colorHover.value);

  }

/* Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--red-color'));
}*/

function ShowPanelColor(){
    let panel = document.getElementById('color-setter');
    if(panel.style.left=="0px"){
        panel.style.left = "-100px";
    }
    else{
        panel.style.left = "0px";
    }
    
}


var map = L.map('map').setView([-21.34, 55.47], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-21.34, 55.47]).addTo(map)
    .bindPopup('Je suis ici.<br> ...enfin je crois')
    .openPopup();