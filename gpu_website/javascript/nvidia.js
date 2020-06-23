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

function amd(){
  window.location='amd.html';
}

function index(){
  window.location='index.html';
}

function nvidia() {
    var a = document.getElementById("nvidia");
    a.style.fontSize = "80px";
    a.style.color = "darkgreen";
}
window.onload = nvidia;
