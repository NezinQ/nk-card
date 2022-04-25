var modal = document.getElementById("myModal");
var trigger = document.getElementById("trigger");
var span = document.getElementsByClassName("close")[0];

trigger.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
