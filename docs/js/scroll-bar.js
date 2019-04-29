window.onscroll = function() {scrollFunction()};
var menuList = document.getElementById("example-menu");
var toggleBar = document.getElementById("toggle-bar");
var header = document.getElementById("list");
var selectedItem = header.getElementsByClassName("item");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menuList.style.backgroundColor = "#f8f9fb";
    toggleBar.style.backgroundColor = "#f8f9fb";
  } else {
    menuList.style.backgroundColor = "rgba(255, 255, 255, 0)";
    toggleBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
}
