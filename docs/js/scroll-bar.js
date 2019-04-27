window.onscroll = function() {scrollFunction()};
//var mobileToggle = document.getElementById("mobile-toggle");
var menuList = document.getElementById("example-menu");
var toggleBar = document.getElementById("toggle-bar");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //mobileToggle.style.backgroundColor = "#f8f9fb";
    menuList.style.backgroundColor = "#f8f9fb";
    toggleBar.style.backgroundColor = "#f8f9fb";
  } else {
    //mobileToggle.style.backgroundColor = "rgba(255, 255, 255, 0)";
    menuList.style.backgroundColor = "rgba(255, 255, 255, 0)";
    toggleBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
}
