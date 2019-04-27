window.onscroll = function() {scrollFunction()};
var mobileToggle = document.getElementById("mobile-toggle");
var menuList = document.getElementById("example-menu");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mobileToggle.style.backgroundColor = "#f8f9fb";
    menuList.style.backgroundColor = "#f8f9fb";
  } else {
    mobileToggle.style.backgroundColor = "rgba(255, 255, 255, 0)";
    menuList.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
}
