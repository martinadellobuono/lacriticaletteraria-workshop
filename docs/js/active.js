var header = document.getElementById("list");
var selectedItem = header.getElementsByClassName("item");
for (var i = 0; i < selectedItem.length; i++) {
  selectedItem[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}