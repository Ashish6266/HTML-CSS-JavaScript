var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function nvidia(){
  window.location="nvidia.html"
}

function index(){
  window.location="index.html"
}

function amd() {
    var a = document.getElementById("amd");
    a.style.fontSize = "80px";
    a.style.color = "darkred";
}
window.onload = amd;
